'use server'
import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.DB_URI)

export const handleSignUp = async (data: FormData) => {
  try {
    const user = await pb.collection('users').create({
      username: data.get('username'),
      password: data.get('password'),
      passwordConfirm: data.get('passwordConfirm'),
    })
    console.log(user)
  } catch (error: any) {
    console.warn(error?.response)
  }
}
