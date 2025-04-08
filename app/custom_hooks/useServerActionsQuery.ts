import { useQuery } from "@tanstack/react-query";
import { fetchAlbums, fetchUserById, fetchUsers, getAlbumById, fetchAlbumPhotos, getPhotoById, fetchUserAlbums } from "../actions";


/* eslint-disable @typescript-eslint/no-explicit-any */
export function useServerActionsQuery(user_id?:string, album_id?:string|any, photo_id?:string|any) {
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
    queryKey: ['albums',user_id],
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
    queryFn: () => photo_id?getPhotoById(photo_id):Promise.resolve(null), 
  
  });

  return { usersQuery, albumsQuery, fetchUserByIdQuery , userAlbumsQuery, albumPhotosQuery, albumByIdQuery, photoByIdQuery};
}