import { cookies } from 'next/headers'
import PocketBase from 'pocketbase'

export const initPocketBase = async () => {
  const pb = new PocketBase(process.env.DB_URI)

  // load the store data from the request cookie string
  const authCookie = cookies().get('pb_auth')
  pb.authStore.loadFromCookie(`${authCookie?.name}=${authCookie?.value}`)

  // send back the default 'pb_auth' cookie to the client with the latest store state
  pb.authStore.onChange(() => {
    let authCookie = pb.authStore.exportToCookie()
    authCookie = authCookie.replace('pb_auth=', '')
    try {
      // @ts-ignore
      cookies().set('pb_auth', authCookie)
    } catch {
      console.log("Error: Couldn't set cookie")
    }
  })

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    pb.authStore.isValid && (await pb.collection('users').authRefresh())
  } catch (_) {
    console.log('Could not refresh auth')
    // clear the auth store on failed refresh
    pb.authStore.clear()
  }

  return pb
}
