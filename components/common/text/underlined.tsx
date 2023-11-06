type ElementType = "span" | "p"

export function Underlined({
  children,
  className,
  element = "span",
}: {
  children: React.ReactNode
  className?: string
  element?: ElementType
}) {
  if (element === "p")
    return <p className={`underline ${className}`}>{children}</p>
  //
  else return <span className={`underline ${className}`}>{children}</span>
}
