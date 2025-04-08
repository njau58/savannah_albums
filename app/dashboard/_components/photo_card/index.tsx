"use client"

import { PhotoCardProps } from "@/app/types"
import Image from "next/image"
import { useState } from "react"
import CustomLink from "../../../components/custom_link"
import { FaArrowRight } from "react-icons/fa"
import { useParams } from "next/navigation"

export function PhotoCard({ title, url, id }: PhotoCardProps) {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const { user_id } = useParams()

	return (
		<div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
			<div className="relative overflow-hidden h-64 rounded-md bg-gray-100">
				<Image
					placeholder="blur"
					blurDataURL={url}
					onLoad={() => setIsLoading(false)}
					src={url}
					layout="fill"
					alt="cover image"
					className={`${
						isLoading
							? "w-full h-full max-h-[20rem]  object-cover transform ease-in-out duration-700 hover:scale-110 blur-xl"
							: "w-full h-full max-h-[20rem] object-cover bg-gray-100 transform ease-in-out duration-700 hover:scale-110"
					}`}
				/>
			</div>

			<div className="p-4 bg-white ">
				<h3 className="font-medium text-gray-900  ">{title}</h3>

				<hr className="my-4 text-gray-300"></hr>
				<div className="mt-3 flex justify-end items-center">
					<CustomLink
						href={`/dashboard/users/${user_id}/albums/${id}/photos/${id}`}
						label="Update photo"
						icon={<FaArrowRight />}
					/>
				</div>
			</div>
		</div>
	)
}
