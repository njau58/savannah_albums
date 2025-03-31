"use client"
import { signIn } from "next-auth/react"
import { FaGoogle, FaGithub } from "react-icons/fa"
import { BsStars } from "react-icons/bs"
import { useState } from "react"
import { useRouter } from "next/navigation"
import CustomButton from "@/app/components/custom_button"

export default function SignInPage() {
	const [loading, setLoading] = useState<"google" | "github" | null>(null)
	const router = useRouter()

	const handleSignIn = async (provider: "google" | "github") => {
		setLoading(provider)
		try {
			const result = await signIn(provider, {
				callbackUrl: "/dashboard",
				redirect: false,
			})

			if (result?.error) {
				console.error("Sign in error:", result.error)
			} else if (result?.url) {
				router.push(result.url)
			}
		} catch (error) {
			console.error("Authentication failed:", error)
		} finally {
			setLoading(null)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-purple-50">
			<div className="bg-white/90 rounded-2xl shadow-md overflow-hidden w-full max-w-md ">
				<div className="bg-primary p-6 text-center">
					<div className="flex justify-center mb-2">
						<BsStars className="text-yellow-300 text-2xl" />
					</div>
					<h1 className="text-3xl font-bold text-white">
						Welcome To Savannah Albums!
					</h1>
				</div>

				<div className="p-8">
					<div className="space-y-4">
						<CustomButton
							theme="google"
							label="Continue with Google"
							onClick={() => handleSignIn("google")}
							icon={<FaGoogle />}
							loading={loading}
						/>
						<CustomButton
							theme="github"
							label="Continue with GitHub"
							onClick={() => handleSignIn("github")}
							icon={<FaGithub />}
							loading={loading}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
