'use server'

import { initPocketBase } from '@/lib/_pb'
import { LoginAction, LogoutAction, SignUpAction } from './types'
import { ClientResponseError } from 'pocketbase'

export const logIn: LoginAction = async (form) => {
  const pb = await initPocketBase()
  await pb.collection('users').authWithPassword(form.username, form.password)
}

export const signUp: SignUpAction = async (form) => {
  const pb = await initPocketBase()
  await pb.collection('users').create(form)
}

export const logout: LogoutAction = async () => {
  const pb = await initPocketBase()
  pb.authStore.clear()
}
