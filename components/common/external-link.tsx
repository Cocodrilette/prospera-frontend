export function ExternalLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode
  href: string
  className?: string
}) {
  return (
    <a
      className={`text-purple-800 underline ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
