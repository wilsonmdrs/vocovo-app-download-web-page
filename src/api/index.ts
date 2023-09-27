import axios from "axios"

const openOnAppStore = (id:string, serialNumber:string) => {
    axios.get(`elpvocovo://Login`)
}

export const api = {
    openOnAppStore
}