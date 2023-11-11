export function Container7XL({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative p-5 md:max-w-7xl mx-auto sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  )
} // Path: components/common/container-7xl.tsx
