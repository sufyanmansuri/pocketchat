'use client'

import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { AlertCircle } from 'lucide-react'
import FullscreenSpinner from './FullscreenSpinner'
import { useRouter } from 'next/navigation'
import type { LoginAction, SignUpAction } from '@/_actions/types'
import { useTransition } from 'react'
import { SingUpInputs, SingUpSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'

function SignUpForm({
  logIn,
  signUp,
}: {
  logIn: LoginAction
  signUp: SignUpAction
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SingUpInputs>({ resolver: zodResolver(SingUpSchema) })
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const onSubmit = async (data: SingUpInputs) => {
    startTransition(() =>
      signUp(data)
        .then(() => logIn({ username: data.username, password: data.password }))
        .then(() => {
          router.push('/home')
        })
        .catch((e) => {
          if (!e.message) {
            return setError('root', {
              message: 'Something went wrong. Please try again later.',
            })
          }
          return setError('username', {
            message: 'Username is invalid or already in use.',
          })
        })
    )
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      {isPending && <FullscreenSpinner />}
      {errors.root && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errors.root.message}</AlertDescription>
        </Alert>
      )}
      <div>
        <Input
          type="text"
          placeholder="Username"
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
          {...register('password')}
          {...(errors.password ? { 'aria-invalid': true } : {})}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>
      <div>
        <Input
          type="password"
          placeholder="Confirm password"
          {...register('passwordConfirm')}
          {...(errors.passwordConfirm ? { 'aria-invalid': true } : {})}
        />
        {errors.passwordConfirm && (
          <p className="text-sm text-destructive">
            {errors.passwordConfirm.message}
          </p>
        )}
      </div>
      <Button className="w-full" type="submit">
        Sign up
      </Button>
    </form>
  )
}
export default SignUpForm
