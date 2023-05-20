import LogoutButton from '@/components/LogoutButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { initPocketBase } from '@/lib/_pb'
import { redirect, useRouter } from 'next/navigation'

async function Home() {
  const pb = await initPocketBase()

  if (!pb.authStore.isValid) {
    redirect('/')
  }

  const user = pb.authStore.model

  return (
    <div className="flex-1 p-5 container flex justify-center md:items-center">
      <div className="md:w-96 mx-auto space-y-3 flex-1 md:flex-none">
        <Card>
          <CardHeader>
            <CardTitle>Hello, {user?.username}</CardTitle>
          </CardHeader>
          <CardContent>
            <LogoutButton />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
