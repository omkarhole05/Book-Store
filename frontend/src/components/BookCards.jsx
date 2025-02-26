import React from 'react'

export default function BookCards({item}) {
    return (
    <>
        <div>
            <div className="card bg-base-100 w-90 md:w-80 shadow-sm cursor-pointer hover:scale-105 transition duration-300 ease-in-out hover:shadow-md">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge bg-blue-600 text-white">{item.category}</div>
                    </h2>
                    <p>{item.title} and it is for free.There is no fee.</p>
                    <div className="card-actions justify-between">
                        <div className="outline-none p-2 px-4  bg-base-300 rounded-lg font-bold">${item.price}</div>
                        <div 
                            className="outline-none p-2 px-2 border rounded-lg bg-black text-white cursor-pointer hover:bg-blue-600 transion-all duration-200 ease-in-out">
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
