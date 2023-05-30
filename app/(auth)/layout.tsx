import Footer from '@/components/Footer'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="flex justify-center flex-1">{children}</main>
      <Footer />
    </>
  )
}
