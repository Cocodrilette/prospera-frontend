type MainType = {
  children: React.ReactNode
}

export function Main({ children }: MainType) {
  return <main className="p-5">{children}</main>
}
