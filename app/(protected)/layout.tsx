import Navigation from '@/components/Navigation'
import { initPocketBase } from '@/lib/_pb'
import { redirect } from 'next/navigation'

async function Protected({ children }: { children: React.ReactNode }) {
  const pb = await initPocketBase()

  if (!pb.authStore.isValid) {
    redirect('/')
  }

  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="flex-1">{children}</div>
      <Navigation />
    </div>
  )
}
export default Protected
