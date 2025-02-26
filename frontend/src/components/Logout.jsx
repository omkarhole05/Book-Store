import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import toast from 'react-hot-toast';

export default function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout =()=>{
        
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
  return (
    <div>
        <button className="btn bg-red-600 rounded-md hover:bg-red-700 text-white transition duration-300"
        onClick={handleLogout}>Logout</button>
    </div>
  )
}
