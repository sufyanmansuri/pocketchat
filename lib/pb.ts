import PocketBase from 'pocketbase'
import cookies from './universal-cookies'

const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_URI)

const authCookie = cookies.get('pb_auth')

if (authCookie) pb.authStore.loadFromCookie('pb_auth=' + authCookie)

export default pb
