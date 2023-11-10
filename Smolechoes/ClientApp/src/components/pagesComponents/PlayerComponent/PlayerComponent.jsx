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
                            <div className="pause-btn">
                                <img src="./images/pauseBtn.svg" alt="pause audio button" className="pauseBtn"/>
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