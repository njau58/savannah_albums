"use client"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import { PhotoCardProps } from "@/app/types"
import { PhotoCard } from "../photo_card"
import FetchErrorComponent from "../fetch_error_component"

const AlbumPhotos = ({ album_id }: { album_id: string }) => {
	const { albumPhotosQuery } = useServerActionsQuery("", album_id, "")

	if (albumPhotosQuery.isLoading) {
		return (
			<div className="flex my-16 items-center justify-center w-full  mx-auto">
				Loading photos...
			</div>
		)
	}

	if (albumPhotosQuery.error) {
		return (
			<FetchErrorComponent
				error_msg="Failed to load photos"
				onClick={albumPhotosQuery.refetch}
			/>
		)
	}
	return (
		<>
			{albumPhotosQuery?.data?.lenght === 0 ? (
				<div className="min-h-screen flex items-center justify-center text-center py-12">
					<p>No photos found</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{albumPhotosQuery.data?.map((photo: PhotoCardProps) => {
						return (
							<PhotoCard
								key={photo.url}
								thumbnailUrl={photo.thumbnailUrl}
								title={photo.title}
								url={photo.url}
								id={photo.id}
							/>
						)
					})}
				</div>
			)}
		</>
	)
}

export default AlbumPhotos
