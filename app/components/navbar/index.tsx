"use client"

import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import CustomLink from "../custom_link"
import { useSession, signOut } from "next-auth/react"
import { toast } from "sonner"
import CustomButton from "../custom_button"

const NavBar: React.FC = () => {
	const { data: session, status } = useSession()

	console.log("User session", session)
	console.log("User session", status)
	const handleSignOut = async () => {
		try {
			await signOut({ redirect: false })
			toast.success("Signed out successfully")
			window.location.href = "/auth/signin"
		} catch {
			toast.error("Failed to sign out")
		}
	}
	return (
		<nav className=" mx-auto px-6 py-4 bg-primary top-0 fixed z-50 w-full">
			<div className=" w-full max-w-7xl mx-auto flex items-center justify-between">
				<div className="lg:text-2xl text-xl font-bold text-white">
					Savannah Albums
				</div>
				{session ? (
					<div>
						{" "}
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
			</div>
		</nav>
	)
}

export default NavBar
