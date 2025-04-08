"use client"

import { editPhotoTitle } from "@/app/actions"
import CustomButton from "@/app/components/custom_button"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import Image from "next/image"
import { BiSave } from "react-icons/bi"

interface PhotoDetailsProps {
	photo_id: string
}

const PhotoDetails = ({ photo_id }: PhotoDetailsProps) => {
	const { photoByIdQuery } = useServerActionsQuery("", "", photo_id)

	return (
		<div className="pt-4  border border-gray-300 rounded-md">
			<div className="mb-8 px-2 bg relative h-56 w-full max-w-96 mx-auto flex justify-center">
				{photoByIdQuery?.isLoading ? (
					<div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
				) : (
					<Image
						src={photoByIdQuery?.data?.url}
						alt={photoByIdQuery?.data?.title || "cober img"}
						fill
						className="max-w-full h-full max-h-[500px] rounded-lg shadow-lg object-cover"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				)}
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
							onClick={() => editPhotoTitle(photo_id, "new title")}
							theme="primary"
							label="Save"
							icon={<BiSave />}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PhotoDetails
