"use client"
import { FaImages, FaArrowRight, FaExclamationTriangle } from "react-icons/fa"
import { Loader } from "../../components/spinners"
import CustomLink from "../../components/custom_link"

import { User } from "@/app/types"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"

export default function Users() {
	const { usersQuery, albumsQuery } = useServerActionsQuery()

	const getUserAlbumCount = (userId: number) => {
		return (
			albumsQuery.data &&
			albumsQuery.data.filter((album) => album.userId === userId).length
		)
	}

	const isLoading = usersQuery.isLoading || albumsQuery.isLoading

	const error = usersQuery.error || albumsQuery.error

	if (isLoading)
		return (
			<div className=" flex items-center justify-center w-full">
				<Loader />
			</div>
		)
	if (error)
		return (
			<div className=" flex items-center justify-center w-full">
				<div className="flex items-center flex-col  justify-center">
					<FaExclamationTriangle className="mx-auto text-yellow-400 mb-1" />
					<p className="text-sm mb-2">Failed to load data</p>
					<button
						onClick={() => {
							usersQuery.refetch()
							albumsQuery.refetch()
						}}
						className="text-xs bg-white/20 border border-primary hover:bg-white/30 px-3 py-1 rounded-md transition"
					>
						Retry
					</button>
				</div>
			</div>
		)

	return (
		<div className="max-w-7xl mx-auto  w-full">
			<div className="bg-white shadow-md rounded-lg overflow-x-scroll h-full max-h-[30rem] ">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Name
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Username
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Email
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Albums
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Action
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{usersQuery.data &&
							usersQuery.data.map((user: User) => (
								<tr key={user.id} className="hover:bg-gray-50">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										{user.name}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										@{user?.username}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{user.email}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div className="flex items-center">
											<FaImages className="mr-1 text-gray-400" />
											{getUserAlbumCount(user.id)}
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<CustomLink href={`/users/${user.id}`} label="View ">
											<FaArrowRight className="ml-1" />
										</CustomLink>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
