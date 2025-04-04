"use client"

import { useParams } from "next/navigation"
import GoBackButton from "../go_back_button"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import FetchErrorComponent from "../fetch_error_component"
import { Loader } from "../spinners"

const PhotoProfile = () => {
	const { photo_id } = useParams()
	const { photoByIdQuery } = useServerActionsQuery("", "", photo_id)

	return (
		<div className="w-full flex items-center justify-between my-8 ">
			<div className="flex items-baseline gap-2">
				<span className="text-sm text-gray-600">
					Showing details for photo:
				</span>
				<h1 className="text-sm lg:text-xl font-bold w-full max-w-xs lg:max-w-sm text-primary">
					{photoByIdQuery.data?.title}
				</h1>
				{photoByIdQuery.error && (
					<h1 className="text-sm lg:text-xl font-bold w-full max-w-xs lg:max-w-sm text-primary">
						<FetchErrorComponent
							onClick={photoByIdQuery.refetch}
							error_msg="An error occured."
						/>
					</h1>
				)}
				{photoByIdQuery.isLoading && <Loader />}
			</div>
			<div>
				<GoBackButton />
			</div>
		</div>
	)
}

export default PhotoProfile
