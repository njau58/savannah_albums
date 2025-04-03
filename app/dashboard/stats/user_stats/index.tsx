import FetchErrorComponent from "@/app/components/fetch_error_component"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import { FaUser } from "react-icons/fa"

const UserStats = () => {
	const { usersQuery } = useServerActionsQuery()

	return (
		<div className="flex  text-white  items-center justify-center flex-col bg-primary  border-2 border-gray-200 p-8 rounded-3xl ">
			<div className="text-white mb-4 text-4xl">
				<FaUser />
			</div>

			{usersQuery.isLoading ? (
				<p className="h-6 flex text-sm items-center">Loading users...</p>
			) : usersQuery.isError ? (
				<FetchErrorComponent
					error_msg="Failed to load albums"
					onClick={usersQuery.refetch}
				/>
			) : (
				<h3 className="text-sm font-bold mb-2">
					{usersQuery?.data?.length} User(s)
				</h3>
			)}
		</div>
	)
}

export default UserStats
