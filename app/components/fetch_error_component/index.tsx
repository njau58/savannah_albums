import { FetchErrorComponentProps } from "@/app/types"
import { FaExclamationTriangle } from "react-icons/fa"

const FetchErrorComponent = ({
	onClick,
	error_msg,
}: FetchErrorComponentProps) => {
	return (
		<div className="text-center">
			<FaExclamationTriangle className="mx-auto text-yellow-400 mb-1" />
			<p className="text-sm mb-2">{error_msg}</p>
			<button
				onClick={onClick}
				className="text-xs bg-white/20 border hover:bg-white/30 px-3 border-primary py-1 rounded-md transition"
			>
				Retry
			</button>
		</div>
	)
}

export default FetchErrorComponent
