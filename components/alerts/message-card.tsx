interface MessageCardProps {
  content: string
  type: "error" | "success" | "warning" | "info"
}

export function MessageCard({ content, type }: MessageCardProps) {
  const baseClass = "rounded-md p-4 flex items-center justify-between"
  const typeClass = () => {
    switch (type) {
      case "error":
        return "bg-red-50"
      case "success":
        return "bg-green-50"
      case "warning":
        return "bg-yellow-50"
      case "info":
        return "bg-blue-50"
    }
  }

  return (
    <div className={`${baseClass} ${typeClass}`}>
      <p>{content}</p>
    </div>
  )
}
