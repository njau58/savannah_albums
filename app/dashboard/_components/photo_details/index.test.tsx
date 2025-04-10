import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import PhotoDetails from "./index"
import { useServerActionsQuery } from "@/app/custom_hooks/useServerActionsQuery"
import { useServerActionsMutation } from "@/app/custom_hooks/useServerActionsMutation"
import "@testing-library/jest-dom"
import Image from "next/image"

/*eslint-disable @typescript-eslint/no-explicit-any*/

jest.mock("@/app/custom_hooks/useServerActionsQuery")
jest.mock("@/app/custom_hooks/useServerActionsMutation")
jest.mock("sonner")
jest.mock("next/image", () => ({
	__esModule: true,
	default: (props: any) => {
		const { ...rest } = props // Remove fill prop
		return <Image {...rest} alt="" />
	},
}))
describe("PhotoDetails Component", () => {
	const mockPhotoData = {
		url: "https://example.com/photo.jpg",
		title: "Sample Photo",
	}

	beforeEach(() => {
		;(useServerActionsQuery as jest.Mock).mockReturnValue({
			photoByIdQuery: {
				isLoading: false,
				data: mockPhotoData,
				refetch: jest.fn(),
			},
		})
		;(useServerActionsMutation as jest.Mock).mockReturnValue({
			photoMutation: {
				mutate: jest.fn(),
				isPending: false,
				isError: false,
			},
		})
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it("renders photo and form", () => {
		render(<PhotoDetails photo_id="1" />)

		expect(screen.getByRole("img")).toHaveAttribute("src", mockPhotoData.url)
		expect(
			screen.getByPlaceholderText("Edit photo title here...")
		).toBeInTheDocument()
		expect(screen.getByText("Save")).toBeInTheDocument()
	})

	it("shows loading state", () => {
		;(useServerActionsQuery as jest.Mock).mockReturnValue({
			photoByIdQuery: {
				isLoading: true,
			},
		})

		render(<PhotoDetails photo_id="1" />)
		expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument()
	})

	it("validates empty title submission", async () => {
		render(<PhotoDetails photo_id="1" />)

		fireEvent.submit(screen.getByRole("form"))

		expect(
			await screen.findByText("Title cannot be empty!")
		).toBeInTheDocument()
		expect(
			useServerActionsMutation("id", "title").photoMutation.mutate
		).not.toHaveBeenCalled()
	})

	it("submits the form with valid title", async () => {
		const mockMutate = jest.fn()
		;(useServerActionsMutation as jest.Mock).mockReturnValue({
			photoMutation: {
				mutate: mockMutate,
				isPending: false,
				isError: false,
			},
		})

		render(<PhotoDetails photo_id="1" />)

		fireEvent.change(screen.getByPlaceholderText("Edit photo title here..."), {
			target: { value: "New Title" },
		})
		fireEvent.submit(screen.getByRole("form"))

		await waitFor(() => {
			expect(mockMutate).toHaveBeenCalled()
		})
	})

	it("shows error message when mutation fails", () => {
		;(useServerActionsMutation as jest.Mock).mockReturnValue({
			photoMutation: {
				mutate: jest.fn(),
				isPending: false,
				isError: true,
				error: { message: "Update failed" },
			},
		})

		render(<PhotoDetails photo_id="1" />)
		expect(
			screen.getByText("Error updating title: Update failed")
		).toBeInTheDocument()
	})
})
