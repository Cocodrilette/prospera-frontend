export function StrongText({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <strong
      className={`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl ${className}`}
    >
      {children}
    </strong>
  )
}
