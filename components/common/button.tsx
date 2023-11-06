interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} // Path: components/common/button.tsx
