import { getServerSession } from "next-auth"

import { redirect } from "next/navigation"
import { authOptions } from "../lib/auth"

export default async function DashboardRootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = getServerSession(authOptions)

	if (!session) {
		redirect("/auth/signin?callbackUrl=/dashboard")
	}

	return <>{children}</>
}
