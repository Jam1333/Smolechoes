import React from "react";
import './PlayerComponent.css'
import HeaderComponent from "../../structureElements/Header/HeaderComponent";

export default function PlayerComponent() {
    return (
        <div className="player-page-container">
            <HeaderComponent/>
            <div className="player-page-content">
                <div className="player-block">
                    <div className="player-map"></div>
                    <div className="player-controls"></div>
                </div>
            </div>
        </div>
    )
}