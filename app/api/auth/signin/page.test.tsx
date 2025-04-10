import "@testing-library/jest-dom"
import { render, screen, fireEvent, act } from "@testing-library/react" // Import act
import { signIn } from "next-auth/react"
import SignInPage from "@/app/api/auth/signin/page"
import mockRouter from "next-router-mock"

jest.mock("next/navigation", () => ({
	useRouter: () => mockRouter,
}))

jest.mock("next-auth/react", () => ({
	signIn: jest.fn(() => Promise.resolve({ ok: true })),
}))

describe("SignInPage", () => {
	it("shows the welcome message", () => {
		render(<SignInPage />)
		expect(screen.getByText("Welcome To Savannah Albums!")).toBeInTheDocument()
	})

	it("has working Google sign-in button", async () => {
		render(<SignInPage />)
		const googleButton = screen.getByText("Continue with Google")

		await act(async () => {
			fireEvent.click(googleButton)
		})

		expect(signIn).toHaveBeenCalledWith("google", {
			callbackUrl: "/dashboard",
			redirect: false,
		})
	})

	it("has working GitHub sign-in button", async () => {
		render(<SignInPage />)
		const githubButton = screen.getByText("Continue with GitHub")

		await act(async () => {
			fireEvent.click(githubButton)
		})

		expect(signIn).toHaveBeenCalledWith("github", {
			callbackUrl: "/dashboard",
			redirect: false,
		})
	})
})
