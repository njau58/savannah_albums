


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
    onClick:()=>void
    icon?:React.ReactNode,
    text_color?:string
    loading?:"github" | "google" |null
    

}