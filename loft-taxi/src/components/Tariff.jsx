import React, {useState} from "react";
import carOne from "../assets/car-one.png";
import carTwo from "../assets/car-two.png";
import carThree from "../assets/car-three.png";

export const Tariff = () => {
    const [activeTariff, setActiveTariff] = useState('standart');

    const setTariff = (tarif) => () =>setActiveTariff(tarif);

    return (
        <ul className="fare__list">
            <li className={`fare__item ${activeTariff === 'standart' && "fare__item--active"} `} onClick={setTariff('standart')}>
                <h2 className="fare__item-title">Стандарт</h2>
                <span className="fare__item-subtitle">Стоимость</span>
                <span className="fare__item-price">150Р</span>
                <div className="fare__item-icon">
                    <img src={carOne} className="fare__item-pic" />
                </div>
            </li>
            <li className={`fare__item ${activeTariff === 'biznes' && "fare__item--active"} `} onClick={setTariff('biznes')}>  
                <h2 className="fare__item-title">Бизнес</h2>
                <span className="fare__item-subtitle">Стоимость</span>
                <span className="fare__item-price">250Р</span>
                <div className="fare__item-icon">
                    <img src={carTwo} className="fare__item-pic" />
                </div>
            </li>
            <li className={`fare__item ${activeTariff === 'premium' && "fare__item--active"} `} onClick={setTariff('premium')}>
                <h2 className="fare__item-title">Премиум</h2>
                <span className="fare__item-subtitle">Стоимость</span>
                <span className="fare__item-price">350Р</span>
                <div className="fare__item-icon">
                    <img src={carThree} className="fare__item-pic" />
                </div>
            </li>
        </ul>
    )
}

