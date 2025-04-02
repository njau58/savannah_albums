import { CustomButtonProps } from "@/app/types"

import { Loader } from "../spinners"

const CustomButton = ({
	label,
	onClick,
	loading,
	theme,
	icon,
	...props
}: CustomButtonProps) => {
	switch (theme) {
		case "google":
			return (
				<button
					onClick={onClick}
					disabled={!!loading}
					className="w-full bg-white border border-gray-200 text-sm hover:border-gray-300 text-gray-800 font-medium py-3 px-4 rounded-full flex items-center justify-center gap-3 transition-all shadow-sm hover:shadow-md disabled:opacity-70"
					{...props}
				>
					{loading === "google" ? (
						<Loader />
					) : (
						<>
							<span className="text-red-500 text-xl">{icon}</span>
							{label}
						</>
					)}
				</button>
			)
		case "github":
			return (
				<button
					onClick={onClick}
					disabled={!!loading}
					className="w-full bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-3 px-4 rounded-full flex items-center justify-center gap-3 transition-all shadow-sm hover:shadow-md disabled:opacity-70"
					{...props}
				>
					{loading === "github" ? (
						<Loader color="#fff" />
					) : (
						<>
							<span className="text-white text-xl">{icon}</span>
							{label}
						</>
					)}
				</button>
			)
		case "secondary":
			return (
				<button
					onClick={onClick}
					className="w-full bg-transparent hover:bg-white/10 text-white  border font-medium text-sm py-2 px-4 rounded-full flex items-center justify-center gap-3 transition-all shadow-sm hover:shadow-md disabled:opacity-70"
					{...props}
				>
					<span className="text-white text-xl">{icon}</span>
					{label}
				</button>
			)
	}
}

export default CustomButton
