'use client'
import { MessageSquare } from 'lucide-react'
import { User2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navigation() {
  const pathname = usePathname()
  const currentTab = pathname.split('/')[1]

  return (
    <div className="border-t flex justify-around p-3">
      <Link href="/home">
        <MessageSquare
          className="w-6 h-6"
          {...(currentTab === 'home' ? { fill: '' } : {})}
        />
      </Link>
      <Link href="/profile">
        <User2
          className="w-6 h-6"
          {...(currentTab === 'profile' ? { fill: '' } : {})}
        />
      </Link>
    </div>
  )
}
export default Navigation
