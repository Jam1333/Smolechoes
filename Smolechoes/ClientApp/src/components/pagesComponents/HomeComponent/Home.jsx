import React from "react";
import './Home.css';
import HeaderComponent from "../../structureElements/Header/HeaderComponent";

export default function Home() {
    return(
        <main>
            <div className="main-container">
                <HeaderComponent />
                <img src="./images/home_page_background_image.png" alt="home-page-background-image" className="background-image" />
            </div>
        </main>
    )
} 