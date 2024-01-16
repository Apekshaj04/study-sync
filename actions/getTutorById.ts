import { db } from "@/lib/db"

export default async function getTutorById(id: string) {
    try {
        const tutor = await db.tutor.findFirst({
            where: {
                user_id: id
            }
        })

        return tutor 
    } catch (error) {
        console.error(error)
    }
}