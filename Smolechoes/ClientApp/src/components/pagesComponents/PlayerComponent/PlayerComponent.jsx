import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PlayerComponent.css'
import HeaderComponent from "../../structureElements/Header/HeaderComponent";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

export default function PlayerComponent() {

    const params = useParams();
    const excursionId = params.id;

    const position = [54.782635, 32.045287]; // [latitude, longitude]
    const zoomLevel = 12;
    const [isActive, setIsActive] = useState(false);

    let markers = [];

    const [excursionData, setExcursionData] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5297/api/Pathways/${excursionId}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                data.points.forEach(point => {
                    markers.push({
                        geocode: [point.latitude, point.longitude],
                        popup: point.name
                    });
                });
                console.log(markers);
                return setExcursionData(data);
            })
    }, []);

    const customIcon = new Icon({
        iconUrl: "./images/forward_arrow_icon.svg",
        iconSize: [38, 38]
    });

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
                        {markers.map(marker => (
                            <Marker position={marker.geocode} icon={ customIcon }>
                                <Popup>{ marker.popup }</Popup>
                        </Marker>))}
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