"use client"

import { useParams } from "next/navigation"
import GoBackButton from "../../../components/go_back_button"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import FetchErrorComponent from "../fetch_error_component"
import { Loader } from "../../../components/spinners"

const AlbumProfile = () => {
	const { album_id } = useParams()
	const { albumByIdQuery } = useServerActionsQuery("", album_id)

	return (
		<div className="w-full flex items-center justify-between my-8">
			<div className="flex items-baseline gap-2">
				<span className="text-sm text-gray-600">
					Showing photo(s) for album:
				</span>
				<h1 className="text-sm lg:text-xl font-bold w-full max-w-xs lg:max-w-sm text-primary">
					{albumByIdQuery.data?.title}
				</h1>
				{albumByIdQuery.error && (
					<h1 className="text-sm lg:text-xl font-bold w-full max-w-xs lg:max-w-sm text-primary">
						<FetchErrorComponent
							onClick={albumByIdQuery.refetch}
							error_msg="An error occured."
						/>
					</h1>
				)}
				{albumByIdQuery.isLoading && <Loader />}
			</div>
			<div>
				<GoBackButton />
			</div>
		</div>
	)
}

export default AlbumProfile
