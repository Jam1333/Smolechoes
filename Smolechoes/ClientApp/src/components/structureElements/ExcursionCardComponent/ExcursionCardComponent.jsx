import React from "react";
import './ExcursionCardComponent.css'

export default function ExcursionCardComponent(props) {
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-content">
                    <span className="excursion-title">Крепостная стена</span>
                    <p className="exc-info-short">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur explicabo repellendus quibusdam blanditiis necessitatibus.</p>
                    <div className="to-exc-page-btn" onClick={() => {window.location.href=props.link}}>
                        Перейти 
                    </div>
                </div>  
                <div className="image-container"></div>
            </div>
        </div>
    )
}