'use client'

import pb from '@/lib/pb'
import { ConversationsResponse, UsersResponse } from '@/types/pocketbase'
import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import { Badge } from './ui/badge'
import ProfilePic from './ProfilePic'

const Conversations = () => {
  const user = pb.authStore.model
  const [conversations, setConversations] = useState<
    ConversationsResponse<{ members: UsersResponse[] }>[]
  >([])

  const add = useCallback(
    async (record: ConversationsResponse) => {
      if (conversations.findIndex(({ id }) => id === record.id)) return

      const memberId = record.members.find((id) => id !== user?.id)
      if (!memberId) return
      const member = await pb
        .collection('users')
        .getOne<UsersResponse>(memberId)

      setConversations((prev) => [
        {
          ...record,
          expand: { members: [user as unknown as UsersResponse, member] },
        },
        ...prev,
      ])
    },
    [user, conversations]
  )

  const remove = useCallback((conversationId: string) => {
    setConversations((prev) => prev.filter(({ id }) => conversationId !== id))
  }, [])

  useEffect(() => {
    const fetchConversations = async () => {
      setConversations(
        await pb
          .collection('conversations')
          .getFullList<ConversationsResponse<{ members: UsersResponse[] }>>({
            expand: 'members',
            sort: '-created',
          })
      )
    }
    fetchConversations()
  }, [])

  useEffect(() => {
    pb.collection('conversations').subscribe<ConversationsResponse>(
      '*',
      (event) => {
        const { action, record } = event
        if (['create', 'update'].includes(action)) add(record)
        else if (action === 'delete') remove(record.id)
      }
    )

    return () => {
      pb.collection('conversations').unsubscribe('*')
    }
  }, [add, remove])

  return (
    <div className="container flex-1">
      <ul>
        {conversations.map(async (conversation, index) => {
          return (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              index={index}
            />
          )
        })}
      </ul>
    </div>
  )
}

const ConversationItem = ({
  conversation,
  index,
}: {
  index: number
  conversation: ConversationsResponse<{ members: UsersResponse[] }>
}) => {
  const member = conversation.expand?.members.find(
    (member) => member.id !== 'user?.id'
  )
  return (
    <li key={conversation.id} className="py-3">
      <div className="flex items-center gap-2">
        <ProfilePic id={member?.id ?? ''} fallback={member?.username ?? ''} />
        <div className="flex-1">
          <div className="flex justify-between">
            <p className="font-semibold">{member?.username}</p>
            <p
              className={clsx(
                'text-sm text-muted-foreground',
                index === 0 ? 'text-primary' : ''
              )}
            >
              *time here*
            </p>
          </div>
          <div className="flex justify-between">
            <p
              className={clsx(
                'text-sm text-muted-foreground',
                index === 0 ? 'font-semibold text-primary' : ''
              )}
            >
              *last message here*
            </p>
            {index === 0 && <Badge variant="secondary">1</Badge>}
          </div>
        </div>
      </div>
    </li>
  )
}

export default Conversations
