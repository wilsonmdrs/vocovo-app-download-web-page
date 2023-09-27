import { api } from "@/api"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

type Params = { 
    serialNumber:string,
    id:string
}

type Props = {
    params: Params
    installAppFromGooglePlay():string
    installAppFromAppStore():string
}

export const useCustomParams = ():Props => {

    const [params, setParams] = useState<Params>({
        serialNumber:"",
        id:""
    })

    const searchParams = useSearchParams()

    const installAppFromAppStore =  ():string => {
        if (params.id && params.serialNumber) {
            return `elpvocovo://Home?id=${params.id}&SerialNumber=${params.serialNumber}`
        }
        return `elpvocovo://Home`
    }

    const installAppFromGooglePlay =  ():string => {
        if (params.id && params.serialNumber) {
            return `elpvocovo://Home?id=${params.id}&SerialNumber=${params.serialNumber}`
        }
        return `elpvocovo://Home`
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