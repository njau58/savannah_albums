import UserAlbums from "@/app/components/user_albums"
import UserProfile from "@/app/components/user_profile"

interface UserPageProps {
	params: { user_id: number }
}

export default async function UserPage({ params }: UserPageProps) {
	const { user_id } = await params
	return (
		<div className="w-full max-w-7xl px-4 lg:px-0 mx-auto  pt-24">
			<UserProfile user_id={user_id} />

			<UserAlbums user_id={user_id} />
		</div>
	)
}
