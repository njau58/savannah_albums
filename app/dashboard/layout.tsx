import { redirect } from "next/navigation"
import { getSession } from "../lib/auth"

export default async function DashboardRootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getSession()

	if (!session) {
		redirect("/auth/signin?callbackUrl=/dashboard")
	}

	return <>{children}</>
}
