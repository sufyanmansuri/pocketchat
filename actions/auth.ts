'use server'

import { log } from '@/lib/log'
import { initPocketBase } from '@/lib/pb'
import { redirect } from 'next/navigation'

export async function handleLogin(form: FormData) {
  try {
    const pb = await initPocketBase()
    const authData = await pb
      .collection('users')
      .authWithPassword(
        form.get('username') as string,
        form.get('password') as string
      )
    redirect('/home')
  } catch (error) {
    log(error, 'handleLogin')
  }
}

export const handleSignUp = async (form: FormData) => {
  const pb = await initPocketBase()
  try {
    const user = await pb.collection('users').create({
      username: form.get('username'),
      password: form.get('password'),
      passwordConfirm: form.get('passwordConfirm'),
    })
    await pb
      .collection('users')
      .authWithPassword(
        form.get('username') as string,
        form.get('password') as string
      )
    redirect('/home')
  } catch (error) {
    log(error, 'handleSignup')
  }
}

export async function handleLogout() {
  const pb = await initPocketBase()
  pb.authStore.clear()
  redirect('/')
}
