import React from "react";
import './Home.css';
import HeaderComponent from "../../structureElements/Header/HeaderComponent";

export default function Home() {

    return(
        <div className="main-container">
            <HeaderComponent />
            <main>
                <img src="./images/home_page_background_image.png" alt="home-page-background-image" className="background-image" />

                <div className="content">
                    <h1 className="heading">Экскурсии голосами минувших эпох</h1>
                    <p className="info">Городская культура и древние традиции Смоленска в атмосфере соответствующего исторического времени – это проект «Smolechoes». Для Вас созданы экскурсионные маршруты по самым знаменитым достопримечательностям с аудиосопровождением в стилистиках древнерусского периода, Смутного времени, Советской эпохи.</p>
                    <div className="to-exc-btn" onClick={() => {window.location.href = "/excursions"}}>
                        К экскурсиям
                        <img className="arrow-icon" src="./images/forward_arrow_icon.svg" alt="to-excursions-btn-arrow-icon" />
                    </div>
                </div>

            </main>
        </div>
    )
} 