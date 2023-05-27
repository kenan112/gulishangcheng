import { v4 as uudiv4 } from "uuid"

export const getUUID = () => {
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    if (!uuid_token) {
        uuid_token = uudiv4()
        localStorage.setItem("UUIDTOKEN", uuid_token)
    }
    return uuid_token
}