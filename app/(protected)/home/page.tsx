import ChatsHeader from '@/components/ChatsHeader'
import Conversations from '@/components/Conversations'
import { ConversationsSkeleton } from '@/components/Skeleton'
import { Suspense } from 'react'

async function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <ChatsHeader />
      <Suspense fallback={<ConversationsSkeleton />}>
        <Conversations />
      </Suspense>
    </div>
  )
}

export default Home
