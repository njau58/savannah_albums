import { useQuery } from "@tanstack/react-query";
import { fetchAlbums, fetchUsers, getUser, getUserAlbums } from "../actions";


export function useServerActionsQuery(user_id?:number) {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
  });

  const albumsQuery = useQuery({
    queryKey: ['albums'],
    queryFn: () => fetchAlbums(), 
  });
  const userQuery = useQuery({
    queryKey: ['user',user_id],
    queryFn: () => user_id?getUser(user_id):Promise.resolve(null), 
  });
  const userAlbumsQuery = useQuery({
    queryKey: ['album',user_id],
    queryFn: () => user_id?getUserAlbums(user_id):Promise.resolve(null), 
  
  });

  return { usersQuery, albumsQuery, userQuery , userAlbumsQuery};
}