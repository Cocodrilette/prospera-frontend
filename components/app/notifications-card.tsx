import { useEffect, useState } from "react"
import { AppCard } from "./card"
import { LoadingBars } from "../common/loading-bars"
import { H4 } from "../common/text/h4"

export function NotificationCard({ className }: { className?: string }) {
  const [mounted, setMounted] = useState<boolean>(false)
  const [notifications, setNotifications] = useState<any[]>([])

  useEffect(() => setMounted(true), [])

  return (
    <AppCard
      className={`${className} bg-gradient-to-tl from-gray-700 to-gray-900`}
    >
      {!mounted && (
        <div className="flex flex-col gap-2">
          <LoadingBars />
          <LoadingBars />
        </div>
      )}
      {mounted && (
        <div className="flex flex-col gap-2">
          <div className="inline-flex justify-between items-center">
            <H4 className="text-white">Notifications</H4>
          </div>
          <div className="flex flex-col gap-2">
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="text-white">{notification.title}</p>
                  <p className="text-white">{notification.description}</p>
                </div>
              ))
            ) : (
              <p className="text-white">- Empty -</p>
            )}
          </div>
        </div>
      )}
    </AppCard>
  )
}
