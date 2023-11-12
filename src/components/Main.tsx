export default function Main({ children }: React.PropsWithChildren) {
  return (
    <main className="bg-primary text-basic-white">
      {children}
    </main>
  )
}
