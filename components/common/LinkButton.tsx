import Link from "next/link"

export function LinkButton({
  children,
  href,
  color: color = "bg-terciaryGreen",
  className = "",
  onClick = () => {},
}: {
  children: React.ReactNode
  href: string
  color?: string
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      className={`w-36 border-2 border-white flex justify-center items-center gap-3 text-white px-5 py-2 shadow-lg transition-all cursor-pointer hover:shadow-sm hover:bg-white hover:text-black hover:font-semibold ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
