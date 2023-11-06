interface TextProps {
  children: React.ReactNode
  className?: string
}

export function Text({ children, className }: TextProps) {
  return <p className={`text-gray-500 ${className}`}>{children}</p>
} // Path: components/common/text/text.tsx
