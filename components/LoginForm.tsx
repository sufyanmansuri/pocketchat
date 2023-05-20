'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { LoginInputs, LoginSchema } from '@/lib/schema'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Spinner } from './ui/spinner'
import type { LoginAction } from '@/_actions/types'

type LoginFormProps = {
  logIn: LoginAction
}
function LoginForm({ logIn }: LoginFormProps) {
  const {
    formState: { errors },
    handleSubmit: registerSubmit,
    register,
    setError,
    setValue,
  } = useForm<LoginInputs>({ resolver: zodResolver(LoginSchema) })
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (form: LoginInputs) => {
    startTransition(() => {
      logIn(form)
        .then(() => router.push('/home'))
        .catch((e) => {
          if (!e.message) {
            return setError('root', {
              message: 'Something went wrong. Please try again later.',
            })
          }
          setValue('password', '')
          return setError('root', { message: 'Invalid username or password.' })
        })
    })
  }
  return (
    <form className="space-y-3" onSubmit={registerSubmit(handleSubmit)}>
      {errors.root && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>An error occurred. ☹</AlertTitle>
          <AlertDescription>{errors.root.message}</AlertDescription>
        </Alert>
      )}
      <div>
        <Input
          type="text"
          placeholder="Username"
          disabled={isPending}
          {...register('username')}
          {...(errors.username ? { 'aria-invalid': true } : {})}
        />
        {errors.username && (
          <p className="text-sm text-destructive">{errors.username.message}</p>
        )}
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          disabled={isPending}
          {...register('password')}
          {...(errors.password ? { 'aria-invalid': true } : {})}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>
      <Button className="w-full" type="submit" disabled={isPending}>
        {isPending ? <Spinner className="h-4 w-4" /> : 'Log in'}
      </Button>
    </form>
  )
}
export default LoginForm
