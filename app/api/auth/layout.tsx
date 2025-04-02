import { Suspense } from "react"

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="bg-gray-50">
			<Suspense fallback={<AuthLoading />}>{children}</Suspense>
		</div>
	)
}

function AuthLoading() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="animate-pulse">Loading authentication...</div>
		</div>
	)
}
