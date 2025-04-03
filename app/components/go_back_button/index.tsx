"use client"

import { FiArrowLeft } from "react-icons/fi"
import CustomButton from "../custom_button"
import { useRouter } from "next/navigation"

const GoBackButton: React.FC = () => {
	const router = useRouter()

	const GoBack = () => {
		router.back()
	}

	return (
		<CustomButton
			icon={<FiArrowLeft />}
			className=" inline-flex items-center gap-2 px-4 py-2 hover:bg-primary/90 bg-primary text-white rounded-full text-center
transition-colors duration-200"
			onClick={GoBack}
			theme="custom"
			label="Back"
		/>
	)
}

export default GoBackButton
