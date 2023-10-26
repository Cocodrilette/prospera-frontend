export function StrongText({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <strong
      className={`font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl ${className}`}
    >
      {children}
    </strong>
  )
}
