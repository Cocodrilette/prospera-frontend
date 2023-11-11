export function AppCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`rounded-md shadow-md ${className} p-5`}>
      {children}
    </section>
  )
}
