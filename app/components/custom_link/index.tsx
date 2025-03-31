import { CustomLinkProps } from "@/app/types"
import Link from "next/link"

const CustomLink = ({
	theme,
	label,
	href,
	icon,
	text_color,
}: CustomLinkProps) => {
	switch (theme) {
		case "primary":
			return (
				<Link
					href={href}
					className="rounded-full bg-primary text-center px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 transition duration-75"
				>
					{label}
				</Link>
			)
		case "secondary":
			return (
				<Link
					href={href}
					className={`rounded-full justify-center px-6 py-3 text-center text-sm font-semibold flex items-center gap-2 border border-gray-100 transition duration-75 hover:bg-white/10 ${
						text_color ? `text-${text_color}` : "text-white"
					}`}
				>
					{icon} {label}
				</Link>
			)

		default:
			return (
				<Link href={href} className=" px-4 py-2 text-sm hover:underline   ">
					{label}
				</Link>
			)
	}
}

export default CustomLink
