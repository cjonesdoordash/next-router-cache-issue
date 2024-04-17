import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <div>
          <Link prefetch={false} href={'/success-page'}>
            Successful Page
          </Link>
        </div>
        <div>
          <Link prefetch={false} href={'/failure-page'}>
            Failure Page
          </Link>
        </div>
        <div>{children}</div>
      </body>
    </html>
  )
}
