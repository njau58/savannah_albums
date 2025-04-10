import { render, screen } from "@testing-library/react"
import DashboardRootLayout from "@/app/dashboard/layout"
import { getSession } from "../lib/auth"
import "@testing-library/jest-dom"

/*eslint-disable @typescript-eslint/no-explicit-any */

jest.mock("../lib/auth", () => ({
	getSession: jest.fn(),
}))

const mockRedirect = jest.fn()
jest.mock("next/navigation", () => ({
	redirect: (...args: any[]) => {
		mockRedirect(...args)
		throw new Error("Redirect")
	},
}))

jest.mock("sonner", () => ({
	Toaster: () => <div data-testid="mock-toaster">Toast</div>,
}))

const mockGetSession = getSession as jest.MockedFunction<typeof getSession>

describe("DashboardRootLayout", () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it("should redirect to sign-in page when no session exists", async () => {
		// Setup - no active session
		mockGetSession.mockResolvedValueOnce(null)

		try {
			await DashboardRootLayout({ children: <div>Test Content</div> })
			// If we get here, it means redirect wasn't called (which should fail the test)
			fail("Expected redirect to be called")
		} catch {
			// Expected to throw due to our mock implementation
		}

		// Assert the redirect was called with the correct path
		expect(mockRedirect).toHaveBeenCalledWith(
			"/auth/signin?callbackUrl=/dashboard"
		)
	})

	it("should render children when a valid session exists", async () => {
		// Setup - mock a valid session
		const mockSession = {
			user: {
				name: "Test User",
				email: "test@example.com",
			},
			expires: new Date(Date.now() + 3600000).toISOString(),
		}

		mockGetSession.mockResolvedValueOnce(mockSession)

		// Execute
		const { container } = render(
			await DashboardRootLayout({ children: <div>Test Content</div> })
		)

		// Assert
		expect(screen.getByText("Test Content")).toBeInTheDocument()
		expect(
			container.querySelector("[data-testid='mock-toaster']")
		).toBeInTheDocument()
	})
})
