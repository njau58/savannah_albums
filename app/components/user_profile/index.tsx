"use client"

import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import GoBackButton from "../go_back_button"
export default function UserProfile({ user_id }: { user_id: number }) {
	const { userQuery } = useServerActionsQuery(user_id)

	if (userQuery.isLoading) {
		return (
			<div className="flex items-center justify-center w-full my-8 mx-auto">
				Loading user profile...
			</div>
		)
	}

	if (userQuery.error) {
		return <div className="text-red-500">Error: {userQuery.error.message}</div>
	}

	return (
		<div className=" w-full flex items-center justify-between my-8">
			<div>
				<h1 className="text-2xl font-bold">{userQuery.data?.name}</h1>
				<p className="text-gray-600">{userQuery.data?.email}</p>
			</div>
			<div>
				<GoBackButton />
			</div>
		</div>
	)
}
