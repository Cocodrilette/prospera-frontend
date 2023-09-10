export function BiggerTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl ${className}`}>
      {children}
    </h1>
  )
}
