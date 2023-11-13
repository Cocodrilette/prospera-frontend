interface H4Props {
  children: React.ReactNode
  className?: string
}

export function H4({ children, className }: H4Props) {
  return <h4 className={`text-2xl font-bold ${className}`}>{children}</h4>
} // Path: components/common/text/h2.tsx
