'use server'
import { getServerAuthSession } from "~/server/auth"

export const createClassRoom = async(title:string) => {
    const user = await getServerAuthSession()
    const name = title
}