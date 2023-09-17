export function ScreenSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`h-screen p-2 lg:px-20 ${className}`}>
      {children}
    </section>
  )
}
