import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Contact() {
  

  // const emailOfUser = localStorage.getItem("Users");
  // const user = JSON.parse(emailOfUser); // Convert string to object
  // const email2 = user.email; // Get email
  // console.log(email2);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    };
    try {
      const res = await axios.post("http://localhost:3000/contactUser/contact", userInfo);
      console.log(res.data);

      toast.success('Message Sent successfully');

    } catch (err) {
      toast.error("Error: " + err.response.data.message);
    }

  };
  return (
    <>
      <Navbar />

      <div className='md:mx-50 mx-3 flex-row-reverse flex-rows md:flex md:flex-cols  justify-center items-center md:h-screen md:gap-5'>

        <div>
        <form className='flex justify-center items-center  md:px-5 mt-25 ' onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className="  p-7 w-130">
          
              <h3 className="font-bold text-xl mb-5">Contact Us</h3>

              <div className='mt-3'>
                <p className='mb-1'>Name:</p>
                <input type="text" placeholder="Enter Your Name" className="focus:border-b-2 outline-none border rounded py-1 px-2 w-full "
                  {...register("name", { required: true })} />
                {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
              </div>
              
              <div className='mt-5'>
                <p className='mb-1'>Email:</p>
                <input type="text" placeholder="Enter your Email" className="focus:border-b-2 outline-none border rounded py-1 px-2 w-full "
                {...register("email", { required: true })}/>
                {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
              </div>

              <div className='mt-5'>
                <p className='mb-1'>Message:</p>
                <textarea type="message" row="4" col="30" placeholder="Leave your msg here..." className="focus:border-b-2 outline-none border rounded py-1 px-2 w-full pb-13"
                  {...register("message", { required: true })} />
                {errors.message && <span className='text-red-500 text-sm'>This field is required</span>}
              </div>

              <div className="mt-7 flex justify-between ">
                <button className="btn bg-blue-600 text-white active:bg-black hover:bg-blue-700 text-white transition duration-300">
                  Submit
                </button>

                <Link to="/">
                  <button className="btn">Close</button>
                </Link>
              </div>
            </div>
            </form>
        </div>

        <div className=' mx-5  md:mx-10 md:mt-10 '>
          <div className="flex md:ml-0 md:my-5 opacity-0 md:opacity-100 ">
            <img src="tabIcon.png" alt="icon" className="h-9  mr-0" />
            <Link className="btn btn-ghost text-xl font-bold">BookStore</Link>
          </div>

          <p className=''>Bookstores draws book lovers of all ages into a community where they  can discover great books, engage with booklovers and meet their favourite literary personalities.</p>

          <div className='my-9 md:my-7 border-[0px] border-gray-300 rounded-lg md:shadow-md md:pt-4 md:pb-4 md:pr-4 md:pl-3'>
            <div className="flex ml-1 md:ml-0">
              <img src="whatsapp.png" alt="icon" className="h-5.5 mr-2" />
              <Link to="https://wa.me/+918484905853" target="_blank" className=" text-sm  font-bold">+91 8484905853</Link>
            </div>

            <div className="flex ml-1 md:ml-0 mt-4">
              <img src="gmail1.png" alt="icon" className="h-5 mr-2" />
              <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=holeom191@gmail.com" target="_blank" className=" text-sm  font-bold">holeom191@gmail.com</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
