"use client"
import CustomLink from "@/app/components/custom_link"
import { useSearchParams } from "next/navigation"

import { FaExclamationTriangle } from "react-icons/fa"
import { RiArrowGoBackFill } from "react-icons/ri"

export default function ErrorPage() {
	const params = useSearchParams()
	const error = params.get("error")

	const errorMessages: Record<string, string> = {
		Default: "An unexpected error occurred - please try again",
	}

	return (
		<div className="min-h-screen b flex items-center justify-center p-6">
			<div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md border border-red-100">
				<div className="bg-primary p-6 text-center">
					<div className="flex justify-center mb-3">
						<FaExclamationTriangle className="text-white text-3xl" />
					</div>
					<h1 className="text-2xl font-bold text-white">
						Authentication Error
					</h1>
				</div>

				<div className="p-8">
					<div className="text-center mb-6">
						<p className="text-gray-700 text-lg font-medium">
							{errorMessages[error || "Default"]}
						</p>
						<p className="text-gray-500 mt-2 text-sm">
							Error code: {error || "unspecified"}
						</p>
					</div>

					<div className="flex flex-col space-y-4">
						<CustomLink href="/auth/signin" theme="primary" label="Try Again" />
						<CustomLink
							href="/"
							theme="secondary"
							label="Return to Homepage"
							text_color="black"
							icon={<RiArrowGoBackFill />}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
