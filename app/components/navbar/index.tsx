"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import CustomButton from "../custom_button"
import CustomLink from "../custom_link"
import { useSession, signOut } from "next-auth/react"
import { toast } from "sonner"
import { useState } from "react"

import UserDashboardProfile from "@/app/dashboard/_components/user_dashboard_profile"

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const { data: session } = useSession()
	const pathname = usePathname()
	const isDashboard = pathname.startsWith("/dashboard")
	const handleSignOut = async () => {
		try {
			await signOut({ redirect: false })
			toast.success("Signed out successfully")
			window.location.href = "/auth/signin"
		} catch {
			toast.error("Failed to sign out")
		}
	}

	const toggleSidebar = () => {
		setIsMenuOpen((prev) => !prev)
	}

	console.log(session)

	return (
		<nav className="mx-auto px-4 py-4 bg-primary top-0 fixed z-50 w-full">
			<div className="w-full lg:px-2 max-w-7xl mx-auto flex items-center justify-between relative">
				<Link
					href="/"
					className="lg:text-2xl border-2 p-1.5 text-lg font-bold text-white"
				>
					Savannah Albums
				</Link>

				<div className="flex items-center ">
					<UserDashboardProfile
						isDashboard={isDashboard}
						session={session}
						isMenuOpen={isMenuOpen}
						toggleSidebar={toggleSidebar}
					/>
					{!isDashboard && (
						<>
							{session ? (
								<div>
									<CustomButton
										theme="secondary"
										onClick={handleSignOut}
										label="SignOut"
										icon={<FaSignOutAlt />}
									/>
								</div>
							) : (
								<CustomLink
									theme="secondary"
									label="SignIn"
									icon={<FaSignInAlt />}
									href="/auth/signin"
								/>
							)}
						</>
					)}
				</div>

				{isDashboard && isMenuOpen && (
					<div className="absolute right-0 divide-y-1 divide-gray-200  top-full mt-2 bg-white p-4 w-64 rounded shadow-lg">
						<CustomLink href="/dashboard" label="Dashboard" />
						<div className="mt-2">
							<CustomButton
								theme="primary"
								onClick={handleSignOut}
								label="SignOut"
								icon={<FaSignOutAlt />}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
