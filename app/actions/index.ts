
'use server'

import {  AlbumProps,  UserProps } from "../types"


export async function fetchUsers(): Promise<UserProps[]> {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/users`)
    if (!response.ok) throw new Error("Failed to fetch users")
    return response.json()
  }
  
  export async function fetchAlbums(): Promise<AlbumProps[]> {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/all-albums`)
   
    if (!response.ok) throw new Error("Failed to fetch albums")
      
    return response.json()
  }


export async function fetchUserById(user_id: string): Promise<UserProps> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${user_id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to fetch user");
  }
  return response.json();
}
  export async function fetchUserAlbums(userId: string) {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/users/albums/${userId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch albums`)
    }
    return response.json()
  }

  export const getAlbumPhotos =async (album_id:string)=>{

    const response = await  fetch(`https://jsonplaceholder.typicode.com/albums/${album_id}/photos`)
    if(!response.ok){
      throw new Error('Failed to fetch photos')
    } 


        return response.json()

}

export const getAlbumById =async (album_id:string)=>{

  const response = await  fetch(`https://jsonplaceholder.typicode.com/albums/${album_id}`)
  if(!response.ok){
    throw new Error('Failed to fetch album')
  } 


      return response.json()

}
export const getPhotoById =async (photo_id:string)=>{

  const response = await  fetch(`https://jsonplaceholder.typicode.com/photos/${photo_id}`)
  if(!response.ok){
    throw new Error('Failed to fetch photo')
  } 


      return response.json()

}










  