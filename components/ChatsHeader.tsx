import { MessageSquare, PlusIcon, SearchIcon } from 'lucide-react'
import { Button } from './ui/button'

function ChatsHeader() {
  return (
    <div className="border-b pt-4 pb-2">
      <div className="container">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Chats</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="w-8 h-8 rounded-full p-0">
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="outline" className="w-8 h-8 rounded-full p-0">
              <PlusIcon className="h-4 w-4" />
              <span className="sr-only">New chat</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChatsHeader
