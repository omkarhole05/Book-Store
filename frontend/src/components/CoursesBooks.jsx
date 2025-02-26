import React, { useEffect, useState } from 'react'
import BookCards from './BookCards'
import axios from 'axios'

export default function CoursesBooks() {
    
    const [book,setBook]=useState([])
    useEffect(()=> {
        const getBook=async()=>{
            try {
                const res =await axios.get("http://localhost:3000/book");
                setBook(res.data)
            } catch (error) {
                console.log(error);
                
            }
        }
        getBook();  
    },[]); 

    const paidBook = book.filter((data) => data.category === "paid");
    
    
    
    return (
        <div className='px-0 md:px-20 container-fluid flex justify-evenly my-10'>
            <div className='md:grid md:grid-cols-4 md:gap-8 flex flex-col gap-7 '>
                {paidBook.map((item) => (
                    <BookCards item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}
