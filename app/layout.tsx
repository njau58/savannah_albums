import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import { Toaster } from "sonner"
import ReactQueryProvider from "./providers/react_query_provider"
import { getSession } from "next-auth/react"
import { ClientSessionProvider } from "./providers/client_session_provider"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Savannah Informatics Assessment",
	description: "Assessment",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await getSession()
	return (
		<html lang="en">
			<body className={`${jost.className}`}>
				<ReactQueryProvider>
					<ClientSessionProvider session={session}>
						<NavBar />
						{children}
						<Footer />
						<Toaster />
					</ClientSessionProvider>
				</ReactQueryProvider>
			</body>
		</html>
	)
}
