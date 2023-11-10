import React from "react";
import './ExcursionCardComponent.css'

export default function ExcursionCardComponent(props) {
    return (
        <div className="card" style={props.description === "В разработке..." ? {"backgroundColor" : "rgb(231 195 103)"} : {"backgroundColor" : "#f7c441"}}>
            <div className="card-container">
                {props.description === "В разработке..." ?
                <div className="card-in-progress-content">
                    <img src="./images/InProgressIcon.svg" alt="in progress icon" className="in-progress-icon" />
                    <span className="excursion-title">{props.name}</span>
                    <p className="exc-info-short">{props.description}</p>
                </div> 
                :
                <div className="card-content">
                    <span className="excursion-title">{props.name}</span>
                    <p className="exc-info-short">{props.description}</p>
                    <div className="to-exc-page-btn" onClick={() => {window.location.href=props.link}}>
                        Перейти 
                    </div>
                </div>} 
                {props.description === "В разработке..." ? null : <div className="image-container"></div>}
            </div>
        </div>
    )
}