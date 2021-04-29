import React, { Component } from "react";
import { Input } from "./Input";
import {HeaderWithConnect} from "./Header"
import { InputForProfile } from "./InputForProfile";
import { LogoSvg } from "./LogoSvg";
import { ChipSvg } from "./ChipSvg";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { cardDetails } from "../modules/profile/actions";

const cardNumber = e => {
    const { value } = e.target;
    if (!value) {
      e.target.value = "";
    }
    const match =
      value
        .replace(/\D/g, "")
        .substring(0, 16)
        .match(/.{1,4}/g) || [];
    e.target.value = match.join(" ");
};
  
const expiryDate = e => {
    const { value } = e.target;
    if (!value) {
      e.target.value = "";
    }
    const match =
      value
        .replace(/\D/g, "")
        .substring(0, 4)
        .match(/.{1,2}/g) || [];
    e.target.value = match.join("/");
};
  
const cvc = e => {
    const { value } = e.target;
    if (!value) {
      e.target.value = "";
    }
    e.target.value = value.replace(/\D/g, "").substring(0, 3);
};
  
const cardName = e => {
    const { value } = e.target;
    if (!value) {
      e.target.value = "";
    }
    e.target.value = value.toUpperCase();
};

export class Profile extends Component {

    cardDetails = (event) => {
        event.preventDefault();
        const { cardNumber, expiryDate, cardName, cvc } = event.target;
        this.props.cardDetails(cardNumber.value, expiryDate.value, cardName.value, cvc.value);
    }

    render() {
        return (
            <>
                {this.props.isSubmitted ?(
                    <div className="wrapper">
                        <HeaderWithConnect />
                        <section className="profile-section">
                            <div className="profile-section__wrapper">
                                <div className="profile-wrapper"></div>
                                <div data-testid="profile" className="profile">
                                    <h1 className="profile__title">Профиль</h1>
                                    <p className="profile__subtitle">Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
                                    <div className="profile__button">
                                        <button className="btn btn--profile"><Link to="/map">Перейти на карту</Link></button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    ) : (
                        <div className="wrapper">
                            <HeaderWithConnect />
                            <section className="profile-section">
                                <div className="profile-section__wrapper">
                                    <div className="profile-wrapper"></div>
                                    <form data-testid="profile" className="profile" onSubmit={this.cardDetails}>
                                        <h1 className="profile__title">Профиль</h1>
                                        <p className="profile__subtitle">Введите платежные данные</p>
                                        <div className="profile__data">
                                            <div className="profile__column">
                                                <div className="profile__form">
                                                    <div className="form__row">
                                                        <Input name="cardName" type="text" placeholder="Введите имя" label="Имя владельца" change={cardName} />
                                                    </div>
                                                    <div className="form__row">
                                                        <Input name="cardNumber" type="text" placeholder="0000 0000 0000 0000" label="Номер карты" change={cardNumber} />
                                                    </div>
                                                    <div className="form__row">
                                                        <InputForProfile name="expiryDate" type="text" placeholder="00/00" label="MM/YY" change={expiryDate}/>
                                                        <InputForProfile name="cvc" type="text" placeholder="000" label="CVC"  change={cvc}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile__column">
                                                <div className="profile__card">
                                                    <div className="card__row">
                                                        <LogoSvg />
                                                        <span>00/00</span>
                                                    </div>
                                                    <div className="card__row">0000 0000 0000 0000</div>
                                                    <div className="card__row">
                                                        <ChipSvg />
                                                        <div className="circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile__button">
                                            <button className="btn btn--profile" type="submit">Сохранить</button>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>
                    )
                }
            </>
        )
    }
};

Profile.propTypes = {
    isSubmitted: PropTypes.bool,
}

export const ProfileWithConnect = connect(
    state => ({isSubmitted: state.profile.isSubmitted}),
    {cardDetails}
)(Profile)