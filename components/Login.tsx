import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Login() {
  async function handleLogin(data: FormData) {
    "use server"
    console.log(Object.fromEntries(data.entries()))
  }

  return (
    <form action={handleLogin}>
      <Input name="username" placeholder="Username" />
      <Input name="password" type="password" placeholder="Password" />

      <Button type="submit">Let&apos;s go!</Button>
    </form>
  )
}
