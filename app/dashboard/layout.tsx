import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

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
