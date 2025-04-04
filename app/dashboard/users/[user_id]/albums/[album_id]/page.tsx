import AlbumPhotos from "@/app/components/album_photos"
import AlbumProfile from "@/app/components/album_profile"

type UserPageProps = Promise<{ album_id: string }>
export default async function AlbumPhotosPage({
	params,
}: {
	params: UserPageProps
}) {
	const { album_id } = await params

	return (
		<div className="w-full max-w-7xl px-4 lg:px-0 mx-auto   pt-24">
			<AlbumProfile />
			<hr className="mb-8 text-gray-300"></hr>

			<AlbumPhotos album_id={album_id} />
		</div>
	)
}
