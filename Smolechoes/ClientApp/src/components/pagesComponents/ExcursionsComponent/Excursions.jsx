import React from "react";
import HeaderComponent from "../../structureElements/Header/HeaderComponent";
import ExcursionCardComponent from "../../structureElements/ExcursionCardComponent/ExcursionCardComponent";
import './Excursions.css'


export default function Excursions() {
    document.title = "Экскурсии";
    return(
        <div className="page-container">
            <HeaderComponent/>
            <main className="main-container">
                <ExcursionCardComponent link="/excursion"/>
                <ExcursionCardComponent link="/excursion"/>
                <ExcursionCardComponent link="/excursion"/>
                <ExcursionCardComponent link="/excursion"/>
                <ExcursionCardComponent link="/excursion"/>

            </main>
        </div>
    )
}