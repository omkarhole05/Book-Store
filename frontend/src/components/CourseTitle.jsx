import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseTitle() {
  return (
    <div className='justify-center items-center text-center mt-30 container-fluid md:px-20 px-3'>
        <div>
        <h1 className='text-3xl font-bold'>We're delighted to have you <span className='text-blue-600 font-extrabold' >Here!!!</span></h1>
        </div>
        <div className='mt-8 '>
        <p>On our bookstore website, we offer a wide selection of paid books spanning various genres, including fiction, fiction, mystery, romance, science fiction, and more. Each book is carefully curated to ensure quality and relevance for our readers.
        By purchasing paid books,you not only gain access to captivating stories and valuable knowledge but also support authors and publish who dedicate their time and effort to creating these works. 
        </p>
        </div>
        <div>
          <Link to="/">
            <button  className='btn bg-blue-600 hover:bg-blue-700 text-white transition duration-300 px-5 my-7'>Back</button>
            </Link>
        </div>
    </div>
  )
}
