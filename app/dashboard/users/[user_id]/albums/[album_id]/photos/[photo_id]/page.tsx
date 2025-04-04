"use client"

import PhotoProfile from "@/app/components/photo_profile"
import Image from "next/image"

const PhotoPage = () => {
	return (
		<div className="w-full max-w-7xl mx-auto p-6 py-24">
			<PhotoProfile />

			<div className="pt-4 border border-gray-300 rounded-md">
				<div className="mb-8 bg relative h-56 w-full max-w-96 mx-auto flex justify-center">
					<Image
						src="https://picsum.photos/500"
						alt=""
						layout="fill"
						className="max-w-full h-full max-h-[500px] rounded-lg shadow-lg object-cover"
					/>
				</div>

				<div className="bg-gray-50 p-6 rounded-lg">
					<div className="flex flex-col sm:flex-row gap-4">
						<input
							type="text"
							placeholder="Edit photo title here..."
							className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
						/>
						<div className="flex gap-2">
							<button>Save</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PhotoPage
