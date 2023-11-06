interface H3Props {
  children: React.ReactNode
  className?: string
}

export function H3({ children, className }: H3Props) {
  return <h3 className={`text-3xl font-bold ${className}`}>{children}</h3>
} // Path: components/common/text/h2.tsx
