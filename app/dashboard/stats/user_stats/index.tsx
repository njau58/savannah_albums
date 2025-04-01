import { FaUser } from "react-icons/fa"

const UserStats = () => {
	return (
		<div className="flex  text-white  items-center justify-center flex-col bg-primary  border-2 border-gray-200 p-8 rounded-3xl ">
			<div className="text-white mb-4 text-4xl">
				<FaUser />
			</div>
			<h3 className="text-sm font-bold mb-2">10 Users</h3>
		</div>
	)
}

export default UserStats
