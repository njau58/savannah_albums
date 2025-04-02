import { useQuery } from "@tanstack/react-query";
import { fetchAlbums, fetchUsers } from "../actions";


export function useServerActionsQuery() {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
  });

  const albumsQuery = useQuery({
    queryKey: ['albums'],
    queryFn: () => fetchAlbums(), 
  });

  return { usersQuery, albumsQuery };
}