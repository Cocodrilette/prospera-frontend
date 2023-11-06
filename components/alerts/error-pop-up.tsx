import { Button, Modal } from "flowbite-react"
import { useState } from "react"
import { HiOutlineExclamationCircle } from "react-icons/hi"

export function ErrorPopUp({
  title,
  message,
  show,
  setPageError,
}: {
  title?: string
  message: string
  show: boolean
  setPageError: (error: string | undefined) => void
}) {
  return (
    <Modal show={show}>
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-500 dark:text-gray-200" />
          <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {title || "Error"}
          </h2>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {message || "Something went wrong"}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="gray" onClick={() => setPageError(undefined)}>
              Cerrar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
