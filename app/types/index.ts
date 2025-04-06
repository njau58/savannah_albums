


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
