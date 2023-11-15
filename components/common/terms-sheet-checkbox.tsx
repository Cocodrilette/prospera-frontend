import React from "react"

interface TermsSheetCheckboxProps {
  className?: string
  checked: boolean
  onChange: (checked: boolean) => void
  children: React.ReactNode
}

export function TermsSheetCheckbox({
  className,
  checked,
  onChange,
  children,
}: TermsSheetCheckboxProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        className="w-5 h-5 mr-3 rounded-md border-gray-300"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="text-gray-700 text-sm">{children}</label>
    </div>
  )
}
