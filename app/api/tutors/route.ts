import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    
    const {userId} = auth();

    if(!userId) {
        return NextResponse.error();
    }
        const body = await request.json()

        const {university, college, cgpa, bio} = body;

        Object.keys(body).forEach((value: any) => {
            if(!body[value]) {
                return NextResponse.error()
            }
        })

        const listing = await db.tutor.create({
            data: {
                university,
                college,
                cgpa: parseFloat(cgpa),
                bio,
                user_id: userId
            }
        })

        return NextResponse.json(listing)

    
}