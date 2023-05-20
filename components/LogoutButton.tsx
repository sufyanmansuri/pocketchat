'use client'

import { logout } from '@/_actions/auth'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

function LogoutButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  return (
    <Button
      onClick={() =>
        startTransition(() => {
          logout().then(() => router.refresh())
        })
      }
    >
      Logout
    </Button>
  )
}
export default LogoutButton
