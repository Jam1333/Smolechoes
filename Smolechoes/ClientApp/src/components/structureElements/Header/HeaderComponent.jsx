import React from "react";
import './HeaderComponent.css'

export default function HeaderComponent() {
    return(
        <header>
            <div className="header-container">
                <a href="/" className="logo-link">
                    <div className="logo-container">
                        <img className="logo-icon" src="./images/Logo_bordered.svg" alt="Logo icon" />
                        <span className="logo-title">Smolechoes</span>
                    </div>
                </a>
            </div>
        </header>
    )
}