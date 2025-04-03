


export  interface CustomLinkProps extends React.ButtonHTMLAttributes<HTMLHtmlElement>{

    label:string,
    theme?:'primary'|'secondary'
    href:string,
    icon?:React.ReactNode,
    text_color?:string

}

export interface CustomButtonProps{
    label:string,
    theme :"primary" | "secondary" | "google" | "github" | "custom"
    onClick:()=>void,
    className?:string,
    icon?:React.ReactNode,
    text_color?:string
    loading?:"github" | "google" |null
    

}

export interface User{
    id: number
	name: string
	email: string
	username: string
}

export interface Album{

    userId: number
	id: number
	title: string

}

export interface Photo{
    url:string,
    albumId:number,
    title:string
}

export interface AlbumProps {
	id: number
	title: string
    photo_count?: number
    userId?: number
}
  export interface FetchErrorComponentProps{
    onClick:()=>void,
    error_msg:string
  }

