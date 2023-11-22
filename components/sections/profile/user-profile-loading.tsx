import { Spinner } from "flowbite-react"

export function UserProfileLoading() {
  return (
    <div className="animate-pulse">
      <Spinner color="gray" className="animate-spin" />
    </div>
  )
}
