import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="container-fluid px-5 flex flex-col md:px-20 md:flex-row md:my-1">

            <div className="w-full md:w-1/2 space-y-6 mt-25 md:mt-35 ">
                <h1 className="text-2xl font-bold md:text-4xl">
                    Hello,welcomes here to learn someting{" "}
                    <span className="text-blue-500">new everyday!!!</span>
                </h1>
                <p >
                    They are a cost-effective way to gain new skills and advance in a
                    career without traditional classroom constraints.
                </p>
                <input
                    type="text"
                    placeholder="Enter your Email here"
                    className="outline-none border rounded py-2 px-2 w-full"
                />
                <Link to="/Contact">
                <button className="outline-none border rounded font-bold mt-2 py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition duration-300">
                    Contact us 
                </button>
                </Link>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                    className="mt-15 md:ml-20  md:w-125 md:h-125"
                    src="https://img.freepik.com/free-vector/telecommuting-concept-illustration_114360-1620.jpg?uid=R81367330&ga=GA1.1.319557425.1739047429&semt=ais_hybrid"
                    alt=""
                />
            </div>

        </div>
    );
}
