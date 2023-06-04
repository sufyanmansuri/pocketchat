import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Pocketchat',
  description: 'Connect with people in your life.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>💬</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  )
}
