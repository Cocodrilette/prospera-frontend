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
      className={`text-md w-40 border-2 border-white flex justify-center items-center gap-3 px-5 py-1.5 shadow-lg transition-all cursor-pointer hover:bg-white hover:text-black hover:font-semibold hover:border-2 hover:border-black ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
