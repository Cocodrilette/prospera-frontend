interface H1Props {
  children: React.ReactNode
  className?: string
}

export function H1({ children, className }: H1Props) {
  return <h1 className={`text-5xl font-extrabold ${className}`}>{children}</h1>
} // Path: components/common/text/h2.tsx
