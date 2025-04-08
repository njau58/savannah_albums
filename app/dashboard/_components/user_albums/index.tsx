"use client"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import { AlbumCard } from "../album_card"
import { AlbumProps } from "@/app/types"
import FetchErrorComponent from "../fetch_error_component"

const UserAlbums = ({ user_id }: { user_id: string }) => {
	const { userAlbumsQuery } = useServerActionsQuery(user_id)

	if (userAlbumsQuery.isLoading) {
		return (
			<div className="flex items-center justify-center w-full my-8 mx-auto">
				Loading user albums...
			</div>
		)
	}

	if (userAlbumsQuery.error) {
		return (
			<FetchErrorComponent
				onClick={userAlbumsQuery.refetch}
				error_msg="An error occured."
			/>
		)
	}
	return (
		<>
			{userAlbumsQuery.data.lenght === 0 ? (
				<div className="col-span-full text-center py-12">
					<p>No albums found</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{userAlbumsQuery.data?.map((album: AlbumProps) => {
						return (
							<AlbumCard
								userId={album.userId}
								key={album.id}
								title={album.title}
								id={album.id}
							/>
						)
					})}
				</div>
			)}
		</>
	)
}

export default UserAlbums
