import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        };
        try {
            const res = await axios.post("http://localhost:3000/user/login", userInfo);
            console.log(res.data);
            
            toast.success('Logged in successful');  
            document.getElementById('my_modal_3').close();
        
            localStorage.setItem("Users", JSON.stringify(res.data.user))
            
            setTimeout(() => {
                window.location.reload();   
                window.location.href = "/";  
            }, 1000);
            
            
        } catch (err) {
            console.log(err);
            toast.error("Error: "+err.response.data.message );

        }

    };
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <button
                        className="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById("my_modal_3").close()}
                        type="button"
                    >
                        ✕
                    </button>

                    <h3 className="font-bold text-xl">Login Here</h3>

                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <div className='mt-5'>
                            <p className='mb-1'>Email:</p>
                            <input
                                type="text" placeholder="Enter Your Email" className="outline-none border rounded py-1 px-2 w-full"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>

                        <div className='mt-5'>
                            <p className='mb-1'>Password:</p>
                            <input
                                type="password" placeholder="Enter Your Password" className="outline-none border rounded py-1 px-2 w-full"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>

                        <div className='mt-7 flex justify-between'>
                            <button className="btn bg-blue-600 text-white hover:bg-blue-700 active:bg-black transition duration-300">
                                Login
                            </button>

                            <p className='mt-4 mr-5'>Not Registered?
                                <Link to="/Signup" className='text-blue-600 cursor-pointer font-bold'>
                                    SignUp
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}
