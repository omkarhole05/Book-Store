import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Homefreebooks from "../components/Homefreebooks";
import HomeCards from "../components/HomeCards";
import Footer from "../components/Footer";


export default function Home() {
    return (
        <>  
            
            <Navbar />
            <Banner />
            <Homefreebooks />
            <HomeCards />
            <Footer />
            
        </>
    );
}
