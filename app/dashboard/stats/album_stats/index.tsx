import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import { FaExclamationTriangle, FaImage } from "react-icons/fa"

const AlbumStats = () => {
	const { albumsQuery } = useServerActionsQuery()

	return (
		<div className="flex items-center justify-center flex-col bg-white  border-2 border-gray-200 p-8 rounded-3xl ">
			<div className="text-primary mb-4 text-4xl">
				<FaImage />
			</div>
			{albumsQuery.isLoading ? (
				<p className="h-6 flex text-sm items-center">Loading albums...</p>
			) : albumsQuery.isError ? (
				<div className="text-center">
					<FaExclamationTriangle className="mx-auto text-yellow-400 mb-1" />
					<p className="text-sm mb-2">Failed to load albums</p>
					<button
						onClick={() => albumsQuery.refetch()}
						className="text-xs bg-white/20 border hover:bg-white/30 px-3 border-primary py-1 rounded-md transition"
					>
						Retry
					</button>
				</div>
			) : (
				<h3 className="text-sm font-bold mb-2">
					{albumsQuery?.data?.length} Albums
				</h3>
			)}
		</div>
	)
}

export default AlbumStats
