type MainType = {
  children: React.ReactNode
}

export function Main({ children }: MainType) {
  return <main className="flex justify-center items-center">{children}</main>
}
