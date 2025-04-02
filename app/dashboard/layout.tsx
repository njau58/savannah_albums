import { getServerSession } from "next-auth"

import { redirect } from "next/navigation"
import { authOptions } from "../lib/auth"
import { Suspense } from "react"

export default async function DashboardRootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = getServerSession(authOptions)

	if (!session) {
		redirect("/auth/signin?callbackUrl=/dashboard")
	}

	function AuthLoading() {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-pulse">Loading...</div>
			</div>
		)
	}

	return <Suspense fallback={<AuthLoading />}>{children}</Suspense>
}
