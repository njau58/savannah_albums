import { useQuery } from "@tanstack/react-query";
import { fetchAlbums, fetchUserById, fetchUsers, getAlbumById, fetchAlbumPhotos, fetchPhotoById, fetchUserAlbums } from "../actions";


export function useServerActionsQuery(user_id?:string, album_id?:string, photo_id?:string) {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
  });

  const albumsQuery = useQuery({
    queryKey: ['albums'],
    queryFn: () => fetchAlbums(), 
  });
  const fetchUserByIdQuery = useQuery({
    queryKey: ['user',user_id],
    queryFn: () => user_id?fetchUserById(user_id):Promise.resolve(null), 
  });
  const userAlbumsQuery = useQuery({
    queryKey: ['user-albums',user_id],
    queryFn: () => user_id?fetchUserAlbums(user_id):Promise.resolve(null), 
  
  });
  const albumPhotosQuery = useQuery({
    queryKey: ['photos',album_id],
    queryFn: () => album_id?fetchAlbumPhotos(album_id):Promise.resolve(null), 
  
  });
  const albumByIdQuery = useQuery({
    queryKey: ['albums',album_id],
    queryFn: () => album_id?getAlbumById(album_id):Promise.resolve(null), 
  
  });
  const photoByIdQuery = useQuery({
    queryKey: ['photo',photo_id],
    queryFn: () => photo_id?fetchPhotoById(photo_id):Promise.resolve(null), 
  
  });

  return { usersQuery, albumsQuery, fetchUserByIdQuery , userAlbumsQuery, albumPhotosQuery, albumByIdQuery, photoByIdQuery};
}