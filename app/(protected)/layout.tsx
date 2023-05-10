import { initPocketBase } from '@/lib/pb'
import { redirect } from 'next/navigation'

async function Protected({ children }: { children: React.ReactNode }) {
  const pb = await initPocketBase()

  if (!pb.authStore.isValid) {
    redirect('/')
  }

  return <>{children}</>
}
export default Protected
