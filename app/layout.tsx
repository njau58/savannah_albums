import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import ClientSessionProvider from "./providers/client_session_provider"
import type { Session } from "next-auth"
import { Toaster } from "sonner"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Savannah Informatics Assessment",
	description: "Assessment",
}

export default function RootLayout({
	children,
	session,
}: Readonly<{
	children: React.ReactNode
	session: Session | null
}>) {
	return (
		<html lang="en">
			<body className={`${jost.className}`}>
				<ClientSessionProvider session={session}>
					<NavBar />
					{children}
					<Footer />
					<Toaster />
				</ClientSessionProvider>
			</body>
		</html>
	)
}
