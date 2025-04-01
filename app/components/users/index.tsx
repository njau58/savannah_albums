"use client"
import { FaImages, FaArrowRight } from "react-icons/fa"
import { Loader } from "../spinners"
import CustomLink from "../custom_link"
import { useQuery } from "@tanstack/react-query"
import { fetchAlbums, fetchUsers } from "@/app/services"

export default function Users() {
	const {
		data: users,
		isLoading: usersLoading,
		error: usersError,
	} = useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
	})
	const {
		data: albums,
		isLoading: albumsLoading,
		error: albumsError,
	} = useQuery({
		queryKey: ["albums"],
		queryFn: fetchAlbums,
	})

	const getUserAlbumCount = (userId: number) => {
		return albums && albums.filter((album) => album.userId === userId).length
	}

	const isLoading = usersLoading || albumsLoading

	const error = usersError || albumsError

	if (isLoading)
		return (
			<div className=" flex items-center justify-center w-full">
				<Loader />
			</div>
		)
	if (error)
		return (
			<div className="text-red-500 text-center py-8">
				{" "}
				{error instanceof Error ? error.message : "An unknown error occurred"}
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
						{users &&
							users.map((user) => (
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
