import { render, screen, fireEvent } from "@testing-library/react"
import Users from "./index" // Adjust the path based on your file structure
import { useServerActionsQuery } from "../../custom_hooks/useServerActionsQuery"
import "@testing-library/jest-dom"

jest.mock("../../custom_hooks/useServerActionsQuery", () => ({
	useServerActionsQuery: jest.fn(),
}))

jest.mock("../../components/spinners", () => ({
	Loader: () => <div>Loading...</div>,
}))

describe("Users Component", () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it("renders the loader when data is loading", () => {
		;(useServerActionsQuery as jest.Mock).mockReturnValue({
			usersQuery: { isLoading: true, error: null, data: null },
			albumsQuery: { isLoading: true, error: null, data: null },
		})

		render(<Users />)
		expect(screen.getByText("Loading...")).toBeInTheDocument()
	})

	it("renders the error component when data fetch fails", () => {
		const mockRefetch = jest.fn()
		;(useServerActionsQuery as jest.Mock).mockReturnValue({
			usersQuery: {
				isLoading: false,
				error: true,
				refetch: mockRefetch,
				data: null,
			},
			albumsQuery: {
				isLoading: false,
				error: false,
				refetch: jest.fn(),
				data: null,
			},
		})

		render(<Users />)
		expect(screen.getByText("Failed to load data")).toBeInTheDocument()

		const retryButton = screen.getByText("Retry")
		fireEvent.click(retryButton)
		expect(mockRefetch).toHaveBeenCalled()
	})

	it("renders user data when loading is complete", () => {
		;(useServerActionsQuery as jest.Mock).mockReturnValue({
			usersQuery: {
				isLoading: false,
				error: null,
				data: [
					{
						id: 1,
						name: "John Doe",
						username: "johndoe",
						email: "john@example.com",
					},
				],
			},
			albumsQuery: {
				isLoading: false,
				error: null,
				data: [
					{ id: 1, userId: 1, title: "Album 1" },
					{ id: 2, userId: 1, title: "Album 2" },
				],
			},
		})

		render(<Users />)

		expect(screen.getByText("John Doe")).toBeInTheDocument()
		expect(screen.getByText("@johndoe")).toBeInTheDocument()
		expect(screen.getByText("john@example.com")).toBeInTheDocument()
		expect(screen.getByText("2")).toBeInTheDocument() // Album count
	})
})
