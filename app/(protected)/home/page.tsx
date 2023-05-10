import { handleLogout } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { initPocketBase } from '@/lib/pb'

async function Home() {
  const pb = await initPocketBase()

  const user = pb.authStore.model

  return (
    <div className="flex-1 p-5 container flex justify-center md:items-center">
      <div className="md:w-96 mx-auto space-y-3 flex-1 md:flex-none">
        <Card>
          <CardHeader>
            <CardTitle>Hello, {user?.username}</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={handleLogout}>
              <Button>Logout</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
