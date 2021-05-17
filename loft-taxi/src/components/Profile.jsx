import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from './Input';
import Header from './Header';
import { InputForProfile } from './InputForProfile';
import { LogoSvg } from './LogoSvg';
import { ChipSvg } from './ChipSvg';
import { Link } from 'react-router-dom';
import {
  updateCardDetails,
  setProfileSubmit,
  setCardUpdated,
} from '../modules/profile/actions';
import {
  cardDetailsSelector,
  cardLoadingSelector,
  cardUpdatedSelector,
  isSubmittedSelector,
} from '../modules/profile/reducer';
import { masks } from '../helpers/mask';
import { tokenSelector } from '../modules/auth/reducer';
import { CircularProgress } from '@material-ui/core';

const Profile = () => {
  const loading = useSelector(cardLoadingSelector);
  const cardDetails = useSelector(cardDetailsSelector);
  const token = useSelector(tokenSelector);
  const cardUpdated = useSelector(cardUpdatedSelector);
  const [currentDetails, setCurrentDetails] = useState(cardDetails);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const fn = masks[e.target.name];
    setCurrentDetails({
      ...currentDetails,
      [e.target.name]: fn(e.target.value),
    });
  };

  const sendCardDetails = (event) => {
    event.preventDefault();
    dispatch(updateCardDetails({ token, ...currentDetails }));
  };

  const onClick = () => {
    dispatch(setCardUpdated(false));
  };

  useEffect(() => {
    if (cardDetails) {
      const newDetails = {};
      Object.keys(cardDetails).forEach((k) => {
        console.log(k);
        newDetails[k] = masks[k](cardDetails[k]);
      });
      setCurrentDetails(newDetails);
    }
  }, [cardDetails]);

  if (cardUpdated) {
    return (
      <div className="wrapper">
        <Header />
        <section className="profile-section">
          <div className="profile-section__wrapper">
            <div className="profile-wrapper"></div>
            <div data-testid="profile" className="profile">
              <h1 className="profile__title">Профиль</h1>
              <p className="profile__subtitle">
                Платёжные данные обновлены. Теперь вы можете заказывать такси.
              </p>
              <div className="profile__button">
                <button className="btn btn--profile" onClick={onClick}>
                  <Link to="/map">Перейти на карту</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <Header />
      <section className="profile-section">
        <div className="profile-section__wrapper">
          <div className="profile-wrapper"></div>
          <form
            data-testid="profile"
            className="profile"
            onSubmit={sendCardDetails}
          >
            <h1 className="profile__title">Профиль</h1>
            <p className="profile__subtitle">Введите платежные данные</p>
            <div className="profile__data">
              <div className="profile__column">
                <div className="profile__form">
                  <div className="form__row">
                    <Input
                      name="cardName"
                      label="Имя владельца"
                      value={currentDetails.cardName}
                      type="text"
                      placeholder="Введите имя"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form__row">
                    <Input
                      name="cardNumber"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      label="Номер карты"
                      value={currentDetails.cardNumber}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form__row">
                    <InputForProfile
                      name="expiryDate"
                      type="text"
                      placeholder="00/00"
                      label="MM/YY"
                      value={currentDetails.expiryDate}
                      onChange={onChange}
                    />
                    <InputForProfile
                      name="cvc"
                      type="password"
                      placeholder="000"
                      label="CVC"
                      value={currentDetails.cvc}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="profile__column">
                <div className="profile__card">
                  <div className="card__row">
                    <LogoSvg />
                    <span>
                      {currentDetails.expiryDate &&
                        masks['expiryDate'](currentDetails.expiryDate)}
                    </span>
                  </div>
                  <div className="card__row">
                    {currentDetails.cardNumber &&
                      masks['cardNumber'](currentDetails.cardNumber)}
                  </div>
                  <div className="card__row">
                    <ChipSvg />
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__button">
              <button className="btn btn--profile" type="submit">
                {loading ? <CircularProgress /> : 'Сохранить'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
  
};

export default Profile;