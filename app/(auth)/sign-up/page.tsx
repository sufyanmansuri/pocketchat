import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { initPocketBase } from '@/lib/_pb'
import { redirect } from 'next/navigation'
import SignUpForm from '@/components/SignUpForm'
import { logIn, signUp } from '@/_actions/auth'

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
            <CardTitle>
              <span className="text-2xl font-bold">Pocketchat 💬</span>
            </CardTitle>
            <CardDescription>
              Connect with the people in your life.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignUpForm logIn={logIn} signUp={signUp} />
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
