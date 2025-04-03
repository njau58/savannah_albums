"use client"

import Users from "./users"
import { Loader } from "../components/spinners"
import { useSession } from "next-auth/react"
import AlbumStats from "./stats/album_stats"
import UserStats from "./stats/user_stats"
import GoBackButton from "../components/go_back_button"

export default function DashboardPage() {
	const { data: session, status } = useSession()

	console.log("session", session)
	return (
		<main className="py-24  w-full max-w-7xl px-4 mx-auto">
			<div className="flex flex-col lg:flex-row gap-8  items-center justify-between mb-8">
				<>
					{!session && status === "loading" && <Loader />}

					{session && (
						<div className=" font-medium text-center lg:text-left ">
							Hi {session.user?.name || "User"}, Welcome!
						</div>
					)}
					<div>
						<GoBackButton />
					</div>
				</>
			</div>
			<hr className="text-gray-300 my-4"></hr>
			<div className="flex flex-col  justify-between space-x-8  lg:flex-row w-full">
				<div className="grid grid-cols-2 m gap-8  py-4 min-w-max  h-full max-h-44     ">
					<UserStats />
					<AlbumStats />
				</div>
				<Users />
			</div>
		</main>
	)
}
