import React, { useEffect } from "react";
import { HeaderWithConnect } from "./Header";
import { OrderForm } from "./MapOrderForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetCoordinates } from "../modules/route/actions";
import { coordinatesSelector } from "../modules/route/reducer";
import { isSubmittedSelector } from "../modules/profile/reducer";
import { drawRoute } from "./MapDrawRoute";

const MapView = ({ map }) => {

    const isSubmitted = useSelector(isSubmittedSelector);
    const coordinates = useSelector(coordinatesSelector);

    const dispatch = useDispatch();

    const reset = (event) => {
        event.preventDefault();
        dispatch(resetCoordinates());
        map.removeLayer("route");
    }

    useEffect(() => {
        if (map && map.isStyleLoaded() && coordinates.length) {
            drawRoute(map, coordinates);
        }
    }, [coordinates]);

    

  if (!isSubmitted) {
    return (
      <div className="wrapper">
        <HeaderWithConnect />
        <div className="map__message">
          <h1 className="map__message-title">Введите данные карты</h1>
          <p className="map__message-subtitle">Чтобы заказать такси, заполните платежные данные в профиле</p>
          <div className="profile__button">
            <Link to="/profile">Перейти в профиль</Link>
          </div>
        </div>
      </div>
    )
  }
  if (coordinates.length) {
    return (
      <div className="wrapper">
        <HeaderWithConnect />
        <div className="map__message">
          <h1 className="map__message-title">Заказ размещен</h1>
          <p className="map__message-subtitle"> Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
          <div className="profile__button">
            <button onClick={reset} className="btn btn--profile">Сделать новый заказ</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="wrapper">
      <HeaderWithConnect />
      <div className="map__message">
        <OrderForm />
      </div>
    </div>
  )
};

export default MapView;