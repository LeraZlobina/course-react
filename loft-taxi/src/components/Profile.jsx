import React from "react";
import { Input } from "./Input";
import { InputForProfile } from "./InputForProfile";
import { LogoSvg } from "./LogoSvg";
import { ChipSvg } from "./ChipSvg";


export const Profile = () => {
    return (
        <section className="profile-section">
            <div className="profile-section__wrapper">
                <div className="profile-wrapper"></div>
                <div className="profile">
                    <h1 className="profile__title">Профиль</h1>
                    <p className="profile__subtitle">Введите платежные данные</p>
                    <div className="profile__data">
                        <div className="profile__column">
                            <form className="profile__form">
                                <div className="form__row">
                                    <Input name="cardName" type="text" placeholder="Введите имя" label="Имя владельца" />
                                </div>
                                <div className="form__row">
                                    <Input name="cardNumber" type="text" placeholder="0000 0000 0000 0000" label="Номер карты" />
                                </div>
                                <div className="form__row">
                                    <InputForProfile name="cardValidityr" type="text" placeholder="00/00" label="MM/YY" />
                                    <InputForProfile name="cvc" type="text" placeholder="000" label="CVC" />
                                </div>
                            </form>
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
                </div>
            </div>
        </section>
        
    )
}