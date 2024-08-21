import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function PATCH(req) {
    try {
        await connectMongoDB();
        
        // Extract the email and new budget value from the request body
        const { email, budget } = await req.json();

        console.log("budget is: " + budget);
        // Find the user by email and update the budget
        const user = await User.findOneAndUpdate(
            { email },
            { budget },
            { new: true } // Return the updated document
        ).select("_id budget");

        console.log("user is: " + user);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Respond with the updated user data
        return NextResponse.json({ user });
    } catch (error) {
        console.log("Error: ", error);
        return NextResponse.json({ error: "Failed to update budget" }, { status: 500 });
    }
}

