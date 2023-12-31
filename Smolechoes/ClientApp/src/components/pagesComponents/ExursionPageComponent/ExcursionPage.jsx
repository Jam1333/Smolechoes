import React from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from '../../structureElements/Header/HeaderComponent';
import './ExcursionPage.css';

export default function ExcursionPage() {

    const params = useParams();
    const excursionId = params.id;

    return (
        <div className="exc-page-container"style={{height: '100%'} }>
            <HeaderComponent/>
            <main>
                <div className="exc-page-content">
                    <img src="./images/Фото_для_карточки_экскурсии_1.jpg" alt="background image" className="exc-page-hero" />
                    <span className="exc-heading">Крепостная стена</span>
                    <div className="timing">
                        <img src="./images/excursion_duration_icon.svg" alt="excursion_duration_icon" className="exc-dur-icon" />
                        <span className="exc-dur-title">Длительность экскурсии:</span>
                        <span className="exc-dur">60 мин</span>
                    </div>
                    <div className="excursion-info">Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Инициал наш подзаголовок ее снова дороге жизни путь последний, речью, пунктуация не заглавных рекламных предупредила все переписывается большого составитель бросил!</div>
                    <div className="excursion-info">Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Инициал наш подзаголовок ее снова дороге жизни путь последний, речью, пунктуация не заглавных рекламных предупредила все переписывается большого составитель бросил!</div>
                    <div className="excursion-info">Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Инициал наш подзаголовок ее снова дороге жизни путь последний, речью, пунктуация не заглавных рекламных предупредила все переписывается большого составитель бросил!</div>
                    <div className="start-excursion-btn" onClick={() => window.location.href = `/player/${excursionId}`}>В путь!</div>
                </div>
            </main>
        </div>
    )
}