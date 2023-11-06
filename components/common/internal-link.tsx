import Link from "next/link"

export function InternalLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode
  href: string
  className?: string
}) {
  return (
    <Link className={`text-purple-800 underline ${className}`} href={href}>
      {children}
    </Link>
  )
}
