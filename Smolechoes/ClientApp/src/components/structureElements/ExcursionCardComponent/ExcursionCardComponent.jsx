import React from "react";
import './ExcursionCardComponent.css'

export default function ExcursionCardComponent(props) {
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-content">
                    <span className="excursion-title">{props.name}</span>
                    <p className="exc-info-short">{props.description}</p>
                    <div className="to-exc-page-btn" onClick={() => {window.location.href=props.link}}>
                        Перейти 
                    </div>
                </div>  
                <div className="image-container"></div>
            </div>
        </div>
    )
}