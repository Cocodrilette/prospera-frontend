export function AppBanner({
  children,
  className,
  show,
}: {
  children?: React.ReactNode
  className?: string
  show?: boolean
}) {
  return (
    <section
      className={`rounded-md shadow-md bg-yellow-100 p-5 ${className} ${
        show ? "" : "hidden"
      }`}
    >
      {children}
    </section>
  )
}
