import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function GET(req) {
    try {
        await connectMongoDB();

        const email = req.nextUrl.searchParams.get("email");

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Find the user by email and return the budget
        const user = await User.findOne({ email }).select("budget");

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Return the user's budget
        return NextResponse.json({ budget: user.budget });
    } catch (error) {
        console.error("Error retrieving budget:", error);
        return NextResponse.json({ error: "Failed to retrieve budget" }, { status: 500 });
    }
}