'use client'
import { MessageSquare } from 'lucide-react'
import { User2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Badge } from './ui/badge'

function Navigation() {
  const pathname = usePathname()
  const currentTab = pathname.split('/')[1]

  return (
    <div className="flex justify-around p-2 backdrop-blur border bg-background/75 sticky bottom-2 mx-2 rounded-full">
      <Link href="/home" className="flex flex-col items-center">
        <Badge className="px-4">
          <MessageSquare className="w-6 h-6" />
        </Badge>
        <span className="font-semibold">Chats</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center">
        <Badge className="px-4" variant="secondary">
          <User2 className="w-6 h-6" />
        </Badge>
        <span>Profile</span>
      </Link>
    </div>
  )
}
export default Navigation
