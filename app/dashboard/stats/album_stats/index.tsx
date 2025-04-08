import FetchErrorComponent from "@/app/dashboard/_components/fetch_error_component"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import { FaImage } from "react-icons/fa"

const AlbumStats = () => {
	const { albumsQuery } = useServerActionsQuery()

	console.info(albumsQuery.data)

	return (
		<div className="flex items-center justify-center flex-col bg-white  border-2 border-gray-200 p-8 rounded-3xl ">
			<div className="text-primary mb-4 text-4xl">
				<FaImage />
			</div>
			{albumsQuery.isLoading ? (
				<p className="h-6 flex text-sm items-center">Loading albums...</p>
			) : albumsQuery.isError ? (
				<FetchErrorComponent
					error_msg="Failed to load albums"
					onClick={albumsQuery.refetch}
				/>
			) : (
				<h3 className="text-sm font-bold mb-2">
					{albumsQuery?.data?.length} Album(s)
				</h3>
			)}
		</div>
	)
}

export default AlbumStats
