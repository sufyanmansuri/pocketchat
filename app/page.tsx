import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import LoginForm from '@/components/LoginForm'
import { redirect } from 'next/navigation'
import { initPocketBase } from '@/lib/_pb'
import { logIn } from '@/_actions/auth'

export default async function Login() {
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
            <LoginForm logIn={logIn} />
            <Separator className="my-4" />
            <Button className="w-full" variant="secondary">
              Forgot password?
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-3">
            Don&apos;t have an account? &nbsp;
            <Link href="/sign-up">
              <Button variant="link" className="p-0" type="submit">
                Sign up
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
