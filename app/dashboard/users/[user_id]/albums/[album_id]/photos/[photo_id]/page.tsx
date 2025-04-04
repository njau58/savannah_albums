"use client"

import CustomButton from "@/app/components/custom_button"
import PhotoProfile from "@/app/dashboard/_components/photo_profile"
import Image from "next/image"
import { BiSave } from "react-icons/bi"

const PhotoPage = () => {
	const updatePhotoTitle = () => {}
	return (
		<div className="w-full max-w-7xl mx-auto p-6 py-24">
			<PhotoProfile />

			<div className="pt-4  border border-gray-300 rounded-md">
				<div className="mb-8 px-2 bg relative h-56 w-full max-w-96 mx-auto flex justify-center">
					<Image
						src="https://picsum.photos/500"
						alt=""
						layout="fill"
						className="max-w-full h-full max-h-[500px] rounded-lg shadow-lg object-cover"
					/>
				</div>

				<div className="bg-purple-50 p-6 rounded-t-3xl">
					<div className="flex flex-col sm:flex-row gap-4">
						<input
							type="text"
							placeholder="Edit photo title here..."
							className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
						/>
						<div className="flex gap-2">
							<CustomButton
								onClick={updatePhotoTitle}
								theme="primary"
								label="Save"
								icon={<BiSave />}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PhotoPage
