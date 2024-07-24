export default function UserInfo() {
    return (
    <div className= "grid place-items-center h-screen"> 
        <div className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> 
            <div>
                Name: <span className="font-bold"> John</span>
            </div>
            <div>
                Email: <span className="font-bold"> john@gmail.com </span>
            </div>
            <button className="bg-yellow-500 text-white font-bold px-6 py-2 mt-3">Log out</button>
        </div>
        
    </div>
)}