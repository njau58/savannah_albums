// components/AlbumCard.tsx
"use client"

import { AlbumProps } from "@/app/types"
import Link from "next/link"
import { IoMdImages } from "react-icons/io"
import { TfiAngleRight } from "react-icons/tfi"

export function AlbumCard({ id, title, userId }: AlbumProps) {
	return (
		<div className=" relative rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800">
			<div className="p-4">
				<h3 className="font-medium text-lg truncate text-gray-900 dark:text-white">
					{title}
				</h3>

				<div className="mt-8 flex justify-between items-center">
					<IoMdImages className="text-4xl text-primary" />
					<Link
						href={`/users/${userId}/albums/${id}`}
						className="text-sm text-primary hover:underline flex items-center"
					>
						View photos
						<span className="ml-1 ">
							{" "}
							<TfiAngleRight />
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
