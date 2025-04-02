import { PulseLoader } from "react-spinners"

type LoaderType = {
	color?: string
}

export const Loader = ({ color }: LoaderType) => {
	return <PulseLoader color={color ? color : "#351d5b"} size={10} />
}
