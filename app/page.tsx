import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Login() {
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
            <form className="space-y-3">
              <Input type="text" name="username" placeholder="Username" />
              <Input type="password" name="password" placeholder="Password" />
              <Button className="w-full" type="submit">
                Log in
              </Button>
            </form>
            <Separator className="my-4" />
            <Button className="w-full" variant="secondary">
              Forgot password?
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-3">
            Don&apos;t have an account? &nbsp;
            <Link href="/signup">
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
