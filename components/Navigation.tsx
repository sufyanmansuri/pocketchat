'use client'
import { MessageSquare } from 'lucide-react'
import { User2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

function Navigation() {
  const pathname = usePathname()
  const currentTab = pathname.split('/')[1]

  return (
    <div className="border-t flex justify-around p-3">
      <Link href="/home">
        <Button variant="secondary" className="rounded-full">
          <MessageSquare className="w-6 h-6" />
        </Button>
      </Link>
      <Link href="/profile">
        <Button variant="ghost" className="rounded-full">
          <User2 className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  )
}
export default Navigation
