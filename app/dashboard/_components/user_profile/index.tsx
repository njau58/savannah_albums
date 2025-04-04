"use client"

import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import GoBackButton from "../../../components/go_back_button"
import FetchErrorComponent from "../fetch_error_component"
import { Loader } from "../../../components/spinners"
export default function UserProfile({ user_id }: { user_id: string }) {
	const { userQuery } = useServerActionsQuery(user_id)

	return (
		<div className=" w-full flex items-center justify-between my-8">
			<div>
				<h1 className="text-2xl font-bold">{userQuery.data?.name}</h1>
				<p className="text-gray-600">{userQuery.data?.email}</p>
				{userQuery.error && (
					<h1 className="text-sm lg:text-xl font-bold w-full max-w-xs lg:max-w-sm text-primary">
						<FetchErrorComponent
							onClick={userQuery.refetch}
							error_msg="An error occured."
						/>
					</h1>
				)}
				{userQuery.isLoading && <Loader />}
			</div>
			<div>
				<GoBackButton />
			</div>
		</div>
	)
}
