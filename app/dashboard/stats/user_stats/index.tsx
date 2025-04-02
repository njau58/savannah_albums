import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import { FaExclamationTriangle, FaUser } from "react-icons/fa"

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
				<div className="text-center">
					<FaExclamationTriangle className="mx-auto text-yellow-400 mb-1" />
					<p className="text-sm mb-2">Failed to load users</p>
					<button
						onClick={() => usersQuery.refetch()}
						className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-md transition"
					>
						Retry
					</button>
				</div>
			) : (
				<h3 className="text-sm font-bold mb-2">
					{usersQuery?.data?.length} Users
				</h3>
			)}
		</div>
	)
}

export default UserStats
