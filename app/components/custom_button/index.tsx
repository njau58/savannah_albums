import { CustomButtonProps } from "@/app/types"

import { Loader } from "../spinners"

const CustomButton = ({
	label,
	onClick,
	loading,
	theme,
	icon,
	className,
	...props
}: CustomButtonProps) => {
	switch (theme) {
		case "google":
			return (
				<button
					onClick={onClick}
					disabled={!!loading}
					className="w-full bg-white  disabled:cursor-not-allowed border border-gray-200 text-sm hover:border-gray-300 text-gray-800 font-medium py-3 px-4 rounded-full flex items-center justify-center gap-3 transition-all shadow-sm hover:shadow-md disabled:opacity-70"
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
					className="w-full bg-gray-800  disabled:cursor-not-allowed hover:bg-gray-900 text-white text-sm font-medium py-3 px-4 rounded-full flex items-center justify-center gap-3 transition-all shadow-sm hover:shadow-md disabled:opacity-70"
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
					className="w-full border-2 bg-transparent  disabled:cursor-not-allowed hover:bg-white/10 text-white  font-medium text-sm py-2 px-4 rounded-full flex items-center justify-center gap-3 transition-all shadow-sm hover:shadow-md disabled:opacity-70"
					{...props}
				>
					<span className="text-white text-xl">{icon}</span>
					{label}
				</button>
			)
		case "primary":
			return (
				<button
					disabled={!!loading}
					onClick={onClick}
					className="w-full bg-primary text-center disabled:cursor-not-allowed hover:bg-primary/90 text-white  border-2 font-medium text-sm py-2 px-4 rounded-full  flex items-center justify-center gap-3 transition-all shadow-sm hover:shadow-md disabled:opacity-70"
					{...props}
				>
					{loading ? (
						<>
							{" "}
							<Loader color="#fff" />
						</>
					) : (
						<>
							<span className="text-white text-xl">{icon}</span>
							{label}
						</>
					)}
				</button>
			)
		case "custom":
			return (
				<button onClick={onClick} className={`${className}`} {...props}>
					<span className=" text-xl">{icon}</span>
					{label}
				</button>
			)
	}
}

export default CustomButton
