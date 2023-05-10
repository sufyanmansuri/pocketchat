'use server'

import { log } from '@/utils/log'
import { initPocketBase } from '@/lib/pb'
import { revalidatePath } from 'next/cache'

export async function handleLogin(form: FormData) {
  try {
    const pb = await initPocketBase()
    await pb
      .collection('users')
      .authWithPassword(
        form.get('username') as string,
        form.get('password') as string
      )
    revalidatePath('/')
  } catch (error) {
    log(error, 'handleLogin')
  }
}

export const handleSignUp = async (form: FormData) => {
  const pb = await initPocketBase()
  try {
    await pb.collection('users').create({
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
    revalidatePath('/sign-up')
  } catch (error) {
    log(error, 'handleSignup')
  }
}

export async function handleLogout() {
  const pb = await initPocketBase()
  pb.authStore.clear()
  revalidatePath('/home')
}
