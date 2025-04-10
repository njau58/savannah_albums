"use client"

import Users from "./users"
import { Loader } from "../components/spinners"
import { useSession } from "next-auth/react"
import AlbumStats from "./stats/album_stats"
import UserStats from "./stats/user_stats"
import CustomLink from "../components/custom_link"
import { BiArrowBack } from "react-icons/bi"

export default function DashboardPage() {
	const { data: session, status } = useSession()

	// console.log("session", session)
	return (
		<div className="py-24  w-full max-w-7xl px-4 mx-auto">
			<div className="flex flex-row gap-8  items-center justify-between mb-8">
				<>
					{!session && status === "loading" && <Loader />}

					{session && (
						<div className=" text-sm lg:text-lg font-semibold text-center lg:text-left ">
							Hi {session.user?.name || "User"}, Welcome!
						</div>
					)}
					<div>
						<CustomLink
							icon={<BiArrowBack />}
							href="/"
							label=" Back Home"
							theme="primary"
						/>
					</div>
				</>
			</div>
			<hr className="text-gray-300 my-4"></hr>
			<div className="flex flex-col lg:space-x-8  justify-between   lg:flex-row w-full">
				<div className="grid grid-cols-2 m gap-8  py-4 min-w-max  h-full max-h-44   ">
					<UserStats />
					<AlbumStats />
				</div>
				<hr className="text-gray-300 my-8"></hr>
				<Users />
			</div>
		</div>
	)
}
