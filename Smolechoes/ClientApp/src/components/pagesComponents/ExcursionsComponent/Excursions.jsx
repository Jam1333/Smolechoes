import React, {useState, useEffect } from "react";
import HeaderComponent from "../../structureElements/Header/HeaderComponent";
import ExcursionCardComponent from "../../structureElements/ExcursionCardComponent/ExcursionCardComponent";
import './Excursions.css'


export default function Excursions() {
    document.title = "Экскурсии";

    const [excursionsData, setExcursionsData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5297/api/Pathways')
        .then(res => {
            return res.json()
        })
        .then(data => {
            return setExcursionsData(data);
        })
    }, [])
    
    return(
        <div className="page-container">
            <HeaderComponent/>
            <main className="main-container">
                {(excursionsData != null) ? excursionsData.map(exc => (
                    <ExcursionCardComponent link={`/excursion/${exc.id}`} name={exc.name} description={exc.description}/>
                )) : null}
            </main>
        </div>
    )
}