import React, { useEffect, useState } from "react";
import './PlayerComponent.css'
import HeaderComponent from "../../structureElements/Header/HeaderComponent";
import { MapContainer, TileLayer } from "react-leaflet";

export default function PlayerComponent() {
    const position = [8.1386, 5.1026]; // [latitude, longitude]
    const zoomLevel = 13; 
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="player-page-container">
            <HeaderComponent/>
            <div className="player-page-content">
                <div className="player-block">
                    <MapContainer 
                            className="player-map"
                            center={position} 
                            zoom={zoomLevel} 
                            scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                    </MapContainer>
                    <div className="player-controls">
                        <span className="point-name">Крепостная стена</span>
                        <div className="track-line">
                            <div className="line"></div>
                            <span className="point-number">0</span>
                        </div>
                        <div className="btns">
                            <div className="prev-point-btn">
                                <img src="./images/prevPointBtn.svg" alt="previous point button" className="prev-btn-icon"/>
                            </div>
                            <div className="pause-btn" onClick={() => setIsActive(!isActive)}>
                                <span className="left-bar"></span>
                                <span className="right-bar_1"></span>
                                <span className="right-bar_2"></span>
                            </div>
                            <div className="next-point-btn">
                                <img src="./images/nextPointBtn.svg" alt="next point button" className="next-btn-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}