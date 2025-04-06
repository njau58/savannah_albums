import { UserDashboardProfileProps } from "@/app/types"
import Image from "next/image"
import { FaAngleDown } from "react-icons/fa"

export const UserDashboardProfile = ({
	isDashboard,
	session,
	isMenuOpen,
	toggleSidebar,
}: UserDashboardProfileProps) => {
	if (!isDashboard || !session) return null

	return (
		<button
			onClick={toggleSidebar}
			aria-expanded={isMenuOpen}
			className="flex w-full items-center gap-1 p-1 rounded-lg hover:bg-white/10 transition-colors"
		>
			<div className="flex-shrink-0 h-9 w-9 relative">
				<Image
					src={session.user?.image || "/default_avatar.jpg"}
					alt="Profile"
					fill
					className="rounded-full object-cover"
				/>
			</div>

			<div className="text-left ">
				<p className="font-bold text-white text-xs truncate w-24">
					{session.user?.name || "Anonymous"}
				</p>
				<p className="text-gray-300 text-xs truncate w-24">
					{session.user?.email || ""}
				</p>
			</div>

			<FaAngleDown
				className={` text-white transition-transform ${
					isMenuOpen ? "rotate-180" : ""
				}`}
			/>
		</button>
	)
}

export default UserDashboardProfile
