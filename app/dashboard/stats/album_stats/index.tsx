import { FaImage } from "react-icons/fa"

const AlbumStats = () => {
	return (
		<div className="flex items-center justify-center flex-col bg-white  border-2 border-gray-200 p-8 rounded-3xl ">
			<div className="text-primary mb-4 text-4xl">
				<FaImage />
			</div>
			<h3 className="text-sm font-bold mb-2">10 Albums</h3>
		</div>
	)
}

export default AlbumStats
