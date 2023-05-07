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
      <body className="min-h-screen flex flex-col">
        <main className="flex justify-center flex-1">{children}</main>
        <footer className="flex justify-center text-sm text-muted-foreground p-3">
          Pocketchat © 2023
        </footer>
      </body>
    </html>
  )
}
