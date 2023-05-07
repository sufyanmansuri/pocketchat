import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { initPocketBase } from '@/lib/pb'
import { redirect } from 'next/navigation'
import { handleSignUp } from '@/actions/auth'

export default async function SignUp() {
  const pb = await initPocketBase()

  if (pb.authStore.isValid) {
    redirect('/home')
  }

  return (
    <div className="flex-1 p-5 container flex justify-center md:items-center">
      <div className="md:w-96 mx-auto space-y-3 flex-1 md:flex-none">
        <Card>
          <CardHeader>
            <CardTitle>Pocketchat 💬</CardTitle>
            <CardDescription>
              Connect with the people in your life.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-3" action={handleSignUp}>
              <Input type="text" placeholder="Username" name="username" />
              <Input type="password" placeholder="Password" name="password" />
              <Input
                type="password"
                name="passwordConfirm"
                placeholder="Confirm password"
              />
              <Button className="w-full" type="submit">
                Sign up
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-3">
            Already have an account? &nbsp;
            <Link href="/">
              <Button variant="link" className="p-0" type="submit">
                Log in
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
