import { useMutation } from "@tanstack/react-query";
import { editPhotoTitle } from "../actions";

export function useServerActionsMutation (photo_id:string, photo_title_edit:string){


    const photoMutation = useMutation({
        mutationKey:['photo'],
        mutationFn:()=>editPhotoTitle(photo_id,photo_title_edit)??Promise.resolve(null)
    })

return {photoMutation}


} 