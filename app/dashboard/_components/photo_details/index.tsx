"use client"

import { editPhotoTitle } from "@/app/actions"
import CustomButton from "@/app/components/custom_button"
import { useServerActionsMutation } from "@/app/custom_hooks/useServerActionsMutation"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import Image from "next/image"
import { useState } from "react"
import { BiSave } from "react-icons/bi"

interface PhotoDetailsProps {
	photo_id: string
}

const PhotoDetails = ({ photo_id }: PhotoDetailsProps) => {
	const [photo_title_edit, setPhotoTitleEdit] = useState<string>("")
	const [inputError, setInputError] = useState<string>("")
	const { photoByIdQuery } = useServerActionsQuery("", "", photo_id)

	const { photoMutation } = useServerActionsMutation(photo_id, photo_title_edit)

	const handleTitleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputError("")
		setPhotoTitleEdit(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (photo_title_edit === "") {
			setInputError("Title cannot be empty!")
			return
		}
		photoMutation.mutate(undefined, {
			onSuccess: () => {
				window.location.reload()
			},
		})
	}

	// console.log(photo_title_edit)

	return (
		<div className="p-2  border border-gray-300 rounded-3xl">
			<div className="mb-8 px-2 bg relative h-56 w-full max-w-96 mx-auto flex justify-center">
				{photoByIdQuery?.isLoading ? (
					<div className="w-full h-full bg-gray-200 animate-pulse rounded-3xl"></div>
				) : (
					<Image
						src={photoByIdQuery?.data?.url}
						alt={photoByIdQuery?.data?.title || "coveer img"}
						fill
						className="max-w-full h-full max-h-[500px] rounded-lg shadow-lg object-cover"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				)}
			</div>

			<div className="border border-gray-200 p-6 rounded-3xl">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col sm:flex-row gap-4"
				>
					<input
						type="text"
						value={photo_title_edit}
						onChange={handleTitleOnchange}
						placeholder="Edit photo title here..."
						className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
					/>
					<div className="flex gap-2">
						<CustomButton
							onClick={() => editPhotoTitle(photo_id, photo_title_edit)}
							theme="primary"
							label="Save"
							type="submit"
							loading={photoMutation.isPending}
							icon={<BiSave />}
						/>
					</div>
				</form>
				{inputError && (
					<p className="text-red-500 text-sm my-2 font-semibold">
						{inputError}
					</p>
				)}
				{photoMutation.isError && (
					<p className="text-red-500 text-sm my-2 font-semibold">
						Error updating title: {photoMutation.error.message}
					</p>
				)}
			</div>
		</div>
	)
}

export default PhotoDetails
