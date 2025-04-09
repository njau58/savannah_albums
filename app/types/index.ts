import { Document } from "mongoose"




export  interface CustomLinkProps {

    label:string,
    theme?:'primary'|'secondary'
    href:string,
    icon?:React.ReactNode,
    text_color?:string

}

export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label:string,
    theme :"primary" | "secondary" | "google" | "github" | "custom"
    onClick:()=>void,
    className?:string,
    icon?:React.ReactNode,
    text_color?:string
    loading?:"github" | "google" |null|boolean
    

}

export interface UserProps{
  id: number
name: string
email: string
username: string
}

export interface AlbumProps{

    userId: number
	id: number
	title: string

}



export interface PhotoProps{
    url:string,
    albumId:number,
    title:string
    id: number
}



  export interface FetchErrorComponentProps{
    onClick:()=>void,
    error_msg:string
  }

  export interface PhotoCardProps {
    title: string
    url: string
    thumbnailUrl: string
    id:string
  }


  export interface UserDashboardProfileProps {
    isDashboard: boolean;
    session: {
      user?: {
        image?: string | null;
        name?: string | null;
        email?: string | null;
      };
    } | null;
    isMenuOpen: boolean;
    toggleSidebar: () => void;
  }

//Models Types

  export interface PhotoDocumentProps extends Document{
    url:string,
    albumId:number,
    title:string
    id: number
  }
  
  export interface UserDocumentProps extends Document{
    id: number
	name: string
	email: string
	username: string
}
export interface AlbumDocumentProps extends Document{

  userId: number
id: number
title: string

}