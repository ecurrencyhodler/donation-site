export const metadata = {
  title: 'Donate',
  description: 'Support the cause with a donation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
