import React from "react"

const Footer: React.FC = () => {
	return (
		<footer className="bg-white py-8  w-full">
			<div className="container mx-auto px-6 text-center text-gray-500">
				<p>Savannah Informatics Technical Assessment</p>
				<p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
			</div>
		</footer>
	)
}

export default Footer
