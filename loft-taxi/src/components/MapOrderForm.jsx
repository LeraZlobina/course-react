import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button, makeStyles, FormControl, InputLabel } from "@material-ui/core/";
import { addressesSelector } from '../modules/addressList/reducer';
import { getCoordinates } from "../modules/route/actions";
import { Tariff } from "./Tariff";
import { MapSelect } from "./MapSelect";

const useFormStyles = makeStyles(() => ({
  formControl: {
    minWidth: "100%",
    position: 'relative',
    '&:first-child': {
      marginBottom: '8px'
    }
  },

  button: {
    border: "none",
    fontSize: "21px",
    borderRadius: "70px",
    backgroundColor: "#fdbf5a",
    cursor: "pointer",
    padding: "12px 125px",
    '&:hover': {
      backgroundColor: "#ffa842",
      transition: "background-color 0.2s",

    }
  }
}));

export const OrderFormWithConnect = (props) => {
  const classes = useFormStyles();
  
  const addresses = useSelector(addressesSelector);
  const dispatch = useDispatch();

  const [route, setRoute] = useState({ address1: "", address2: "" });

  const onChange = (event) => {
    let input = event.target;
    setRoute({ ...route, [input.name]: input.value });
  };

  const onButtonClick = () => {
    dispatch(getCoordinates(route));
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="from">Откуда</InputLabel>
        <MapSelect
          addressKey="address1"
          otherAddress={route.address2}
          onChange={onChange}
          route={route}
          values={addresses}
        >
        </MapSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="to">Куда</InputLabel>
        <MapSelect
          addressKey="address2"
          otherAddress={route.address1}
          onChange={onChange}
          route={route}
          values={addresses}
        >
        </MapSelect>
      </FormControl>
      <Tariff />
      <Button
        className={classes.button}
        onClick={onButtonClick}
      >
        Заказать
      </Button>
    </>
  )
}

