interface H2Props {
  children: React.ReactNode
  className?: string
}

export function H2({ children, className }: H2Props) {
  return <h2 className={`text-4xl font-bold ${className}`}>{children}</h2>
} // Path: components/common/text/h2.tsx
