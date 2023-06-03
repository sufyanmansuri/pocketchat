'use client'

import pb from '@/lib/pb'
import { ConversationsResponse, UsersResponse } from '@/types/pocketbase'
import { useCallback, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Badge } from './ui/badge'
import ProfilePic from './ProfilePic'
import { UnsubscribeFunc } from 'pocketbase'

const Conversations = () => {
  const user = pb.authStore.model
  const [conversations, setConversations] = useState<
    ConversationsResponse<{ members: UsersResponse[] }>[]
  >([])

  // Adds a new conversation entry
  const add = useCallback(
    async (record: ConversationsResponse) => {
      if (conversations.findIndex(({ id }) => id === record.id) >= 0) return

      const memberId = record.members.find((id) => id !== user?.id)
      if (!memberId) return
      const member = await pb
        .collection('users')
        .getOne<UsersResponse>(memberId, { $autoCancel: false })

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

  // Removes a conversations entry
  const remove = useCallback((conversationId: string) => {
    setConversations((prev) => prev.filter(({ id }) => conversationId !== id))
  }, [])

  // Unsubscribes pb realtime connections
  const unsubscribe = useRef<UnsubscribeFunc>()

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
    pb.collection('conversations')
      .subscribe<ConversationsResponse>('*', (event) => {
        const { action, record } = event
        if (action === 'create') add(record)
        else if (action === 'delete') remove(record.id)
      })
      .then((func) => {
        unsubscribe.current = func
      })

    return () => {
      if (unsubscribe?.current) unsubscribe.current()
    }
  }, [add, remove])

  return (
    <div className="container flex-1">
      <ul>
        {conversations.map(async (conversation, index) => {
          const member = conversation.expand?.members.find(
            (member) => member.id !== user?.id
          )

          if (!member) return

          return (
            <ConversationItem
              key={conversation.id}
              data={{ id: conversation.id, member }}
              index={index}
            />
          )
        })}
      </ul>
    </div>
  )
}

const ConversationItem = ({
  data: { id, member },
  index,
}: {
  index: number
  data: { id: string; member: UsersResponse }
}) => {
  return (
    <li className="py-3">
      <div className="flex items-center gap-2">
        <ProfilePic id={member.id} fallback={member.username} />
        <div className="flex-1">
          <div className="flex justify-between">
            <p className="font-semibold">{member.username}</p>
            <p
              className={clsx(
                'text-sm text-muted-foreground',
                index === 0 && 'font-semibold text-primary-foreground'
              )}
            >
              *time here*
            </p>
          </div>
          <div className="flex justify-between">
            <p
              className={clsx(
                'text-sm text-muted-foreground',
                index === 0 && 'font-semibold text-primary-foreground'
              )}
            >
              *last message here*
            </p>
            {index === 0 && <Badge>1</Badge>}
          </div>
        </div>
      </div>
    </li>
  )
}

export default Conversations
