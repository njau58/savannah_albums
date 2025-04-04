import UserAlbums from "@/app/dashboard/_components/user_albums"
import UserProfile from "@/app/dashboard/_components/user_profile"

type UserPageProps = Promise<{ user_id: string }>
export default async function UserPage({ params }: { params: UserPageProps }) {
	const { user_id } = await params
	return (
		<div className="w-full max-w-7xl px-4 lg:px-0 mx-auto  pt-24">
			<UserProfile user_id={user_id} />
			<hr className="text-gray-300 my-4"></hr>

			<UserAlbums user_id={user_id} />
		</div>
	)
}
