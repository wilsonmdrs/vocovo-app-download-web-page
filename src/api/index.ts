import axios from "axios"

const openOnAppStore = (id:string, serialNumber:string) => {
    axios.get(`https://elpvocovo/`)
}

export const api = {
    openOnAppStore
}