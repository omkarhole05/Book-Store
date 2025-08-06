import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import toast from 'react-hot-toast';
import Login from './Login';

export default function Signup() {
    
        const { register, handleSubmit, formState: { errors } } = useForm();

        const onSubmit = async (data) => {
            const userInfo={
                name: data.name,
                email: data.email,
                password: data.password
            };
            try {
                const res = await axios.post("http://localhost:3000/user/signup", userInfo);
                console.log(res.data);
            
                setTimeout(() => {
                    window.location.reload();
                    window.location.href = "/";
                }, 1000);
                
                toast.success('Signup successful');
                localStorage.setItem("Users",JSON.stringify(res.data.user))
                
            } catch (err) {
                toast.error("Error: "+err.response.data.message );

                
            }         
            
        };

    return (
        <>
        <Navbar/>
        <div className='md:flex md:flex-cols  md:justify-center md:items-center md:h-screen md:gap-15'>
        <div>
            <img src="./signup1.svg" alt=""
            className=' md:w-130 md:h-130 hidden lg:block'/>
        </div>

        <div className='flex h-screen justify-center items-center px-5 '>
            <div id="my_modal_3" className="  rounded-lg  p-7 w-130">

            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                <div className="flex justify-between">   
                    <h3 className="font-bold text-xl">SignUp Here</h3>
                    <Link to="/" className="btn btn-md mt-0 btn-circle btn-ghost">✕</Link>
                </div>

                    <div className='mt-3'>                    
                        <p className='mb-1'>Name:</p>
                        <input type="text" placeholder="Enter Your Name" className=" focus:border-b-2  outline-none rounded py-1 px-2 w-full "
                        {...register("name", { required: true })} />
                        {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
                    </div>

                    <div className='mt-5'>
                        <p className='mb-1'>Email:</p>
                        <input type="text" placeholder="Enter Your Email" className="focus:border-b-2 outline-none border rounded py-1 px-2 w-full "
                        {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                    </div>

                    <div className='mt-5'>
                        <p className='mb-1'>Password:</p>
                        <input type="password" placeholder="Enter Your Password" className="focus:border-b-2 outline-none border rounded py-1 px-2 w-full "
                        {...register("password", { required: true })} />
                        {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
                    </div>

                    <div className='mt-7 flex justify-between'>
                        <button className="btn bg-blue-600 text-white hover:bg-blue-700 text-white transition duration-300">
                            SignUp
                            </button>

                        <p className='mt-4 mr-5'>Have an account? 
                            <Link className='text-blue-600 cursor-pointer font-bold'
                            onClick={() => document.getElementById('my_modal_3').showModal()}>
                            Login
                            </Link>
                            <Login/>
                            </p>

                    </div>
                    </form>
            </div>
        </div>

        
        {/* <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                    className="mt-15 md:ml-20  md:w-125 md:h-125"
                    src="https://img.freepik.com/free-vector/telecommuting-concept-illustration_114360-1620.jpg?uid=R81367330&ga=GA1.1.319557425.1739047429&semt=ais_hybrid"
                    alt=""
                />
            </div> */}

        </div>
        </>
    )
}
