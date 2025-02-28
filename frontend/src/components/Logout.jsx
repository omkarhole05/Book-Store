import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import toast from 'react-hot-toast';

export default function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {

        try {
            setAuthUser({
                ...authUser,
                user: null
            });

            localStorage.removeItem("Users");
            toast.success('Logout successful');

            setTimeout(() => {
                window.location.reload();
            }, 1200);


        } catch (error) {

        }
    }

    const nameOfUser = localStorage.getItem("Users");
    const user = JSON.parse(nameOfUser); // Convert string to object
    const name = user.name; // Get Name
    

    return (
        <>
            <div className='flex gap-2'>
                

                <div className="dropdown dropdown-hover dropdown-center ">

                <div tabIndex={0} >
                    <img src="profile4.png" alt="icon" className=" h-10 mr-2 opacity-0 md:opacity-100 cursor-pointer" />
                </div>
                    
                    <ul tabIndex={0} className="dropdown-content menu  text-white bg-blue-600 rounded-md z-1 mt-3 p-1 min-w-40 max-w-80 shadow-sm">
                        <li><a className='justify-left item-left font-bold '>{name}</a></li>
                        <li><a className='justify-left item-left font-bold '>{user.email}</a></li>
                    </ul>

                </div>

                <button className="btn bg-red-600 rounded-md hover:bg-red-700 active:bg-black text-white transition duration-300"
                    onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}
