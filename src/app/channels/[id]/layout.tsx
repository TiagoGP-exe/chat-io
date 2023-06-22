import { NavItem } from "@/types"

import { getAuthSession } from "@/lib/auth"
import { MainNav } from "@/components/main-nav"
import { SideNav } from "@/components/side-nav"

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    id: string
  }
}

const items: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
]

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { id } = params
  const session = await getAuthSession()

  return (
    <main className="fixed inset-0 flex min-h-screen bg-foreground-soft">
      <MainNav items={items} id={id} />
      <SideNav user={session?.user as any} />

      {children}
    </main>
  )
}
