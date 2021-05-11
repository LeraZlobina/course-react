import React, { Component } from "react";
import { HeaderWithConnect } from "./Header";
import { OrderFormWithConnect } from "./MapOrderForm";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetCoordinates } from "../modules/route/actions";

export class MapView extends Component {
    
    reset = (event) => {
        event.preventDefault();
        this.props.resetCoordinates();
    }

    render() {
        const {isSubmitted, coordinates} = this.props;
        if(!isSubmitted){
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
        if(coordinates.length){
            return (
                <div className="wrapper">
                    <HeaderWithConnect />
                    <div className="map__message">
                        <h1 className="map__message-title">Заказ размещен</h1>
                        <p className="map__message-subtitle"> Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                        <div className="profile__button">
                            <button className="btn btn--profile" onClick={this.reset}>Сделать новый заказ</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="wrapper">
                <HeaderWithConnect />
                <div className="map__message">
                    <OrderFormWithConnect/>
                </div>
            </div>
        )
    }
};

export const MapViewWithConnect = connect(
    state => ({ 
        isSubmitted: state.profile.isSubmitted,
        coordinates: state.coordinates.coordinates
    }),
    {resetCoordinates}
)(MapView)