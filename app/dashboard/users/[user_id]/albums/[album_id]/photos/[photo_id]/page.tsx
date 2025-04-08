import PhotoDetails from "@/app/dashboard/_components/photo_details"
import PhotoProfile from "@/app/dashboard/_components/photo_profile"

type PhotoPageProps = Promise<{ photo_id: string }>

const PhotoPage = async ({ params }: { params: PhotoPageProps }) => {
	const { photo_id } = await params

	return (
		<div className="w-full max-w-7xl mx-auto p-6 py-24">
			<PhotoProfile />
			<PhotoDetails photo_id={photo_id} />
		</div>
	)
}

export default PhotoPage
