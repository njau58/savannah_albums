import CustomLink from "./components/custom_link"

export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<main className="container mx-auto px-6 ">
				<div className="flex flex-col items-center text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
						Explore Users, Albums & Photos
					</h1>
					<p className="text-lg md:text-2xl text-gray-600 max-w-3xl mb-12">
						A showcase application that demonstrates authentication &
						interaction with users albums and photos. Built with Next.js,
						TypeScript, MongoDB, NextAuth TailwindCSS and more.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 mb-16">
						<CustomLink label="Get Started" theme="primary" href="/dashboard" />
					</div>
				</div>
			</main>
		</div>
	)
}
