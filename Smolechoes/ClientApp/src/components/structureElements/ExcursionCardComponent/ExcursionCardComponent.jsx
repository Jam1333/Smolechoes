import React from "react";
import './ExcursionCardComponent.css'

export default function ExcursionCardComponent() {
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-content">
                    <span className="excursion-title">Крепостная стена</span>
                    <p className="exc-info-short">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur explicabo repellendus quibusdam blanditiis necessitatibus.</p>
                    <div className="to-exc-page-btn">
                        Перейти 
                    </div>
                </div>  
                <div className="image-container"></div>
            </div>
        </div>
    )
}