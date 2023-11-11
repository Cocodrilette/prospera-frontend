export function AppBanner({
  className,
  message,
  show,
}: {
  className?: string
  message: string
  show?: boolean
}) {
  return (
    <section
      className={`rounded-md shadow-md bg-gray-50 ${className} ${
        show ? "" : "hidden"
      }`}
    >
      <p>{message}</p>
    </section>
  )
}
