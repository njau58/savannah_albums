
'use server'

import { Album, User } from "../types"

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!response.ok) throw new Error("Failed to fetch users")
    return response.json()
  }
  
  export async function fetchAlbums(): Promise<Album[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    if (!response.ok) throw new Error("Failed to fetch albums")
    return response.json()
  }


  export async function getUser (user_id:string) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch user)`)
    }

    return response.json()
  }
  export async function getUserAlbums(user_id: string) {



    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user_id}/albums`
    )
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






  