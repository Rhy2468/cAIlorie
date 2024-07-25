"use client";

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";

export default function UserInfo() {

    const {data:session} = useSession();

    return (
    <div className= "grid place-items-center h-screen"> 
        <div className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> 
            <div>
                Name: <span className="font-bold"> {session?.user?.name} </span>
            </div>
            <div>
                Email: <span className="font-bold"> {session?.user?.email} </span>
            </div>
            <button 
                onClick={() => signOut()} 
                className="bg-yellow-500 text-white font-bold px-6 py-2 mt-3"
            >
                Log out
                </button>
        </div>
        
    </div>
)}