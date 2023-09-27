import { api } from "@/api"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type Params = { 
    serialNumber:string,
    id:string
}

type Props = {
    params: Params
    installAppFromGooglePlay():void
    installAppFromAppStore():void
}

export const useCustomParams = ():Props => {

    const [params, setParams] = useState<Params>({
        serialNumber:"",
        id:""
    })

    const searchParams = useSearchParams()

    const installAppFromAppStore =  () => {1
        try {
            api.openOnAppStore(params.id, params.serialNumber)
        } catch (error) {
            console.log(error)
        }
    }

    const installAppFromGooglePlay =  () => {
        
    }

    useEffect(() => {
        if (searchParams) {
            const serialNumber = searchParams.get('serialNumber') || ''
            const id = searchParams.get('id') || ''
            setParams({ serialNumber,id})
        }
    },[searchParams])
    return {
        params,
        installAppFromGooglePlay,
        installAppFromAppStore
    }
}