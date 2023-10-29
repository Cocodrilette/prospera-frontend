export function Text({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={`sm:text-xl md:text-2xl lg:text-3xl font-thin ${className}`}>
      {children}
    </p>
  )
}
