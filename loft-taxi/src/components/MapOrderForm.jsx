import React, {Component, useEffect} from "react";
import {connect} from "react-redux";
import { Button, makeStyles, FormControl, InputLabel} from "@material-ui/core/";
import { getAddresses } from "../modules/addressList/actions";
import {getCoordinates} from "../modules/route/actions";
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
        '&:hover':{
            backgroundColor: "#ffa842",
            transition: "background-color 0.2s",
            
        }
    }
}));



export const OrderForm = (props) => {
    const classes = useFormStyles();

    useEffect(
        ()=>{ 
            props.getAddresses();
            props.getCoordinates();
        }, []
    );

    const [route, setRoute] = React.useState({from: "", to: ""});

    const onChange = (event) => {
        let input = event.target
        setRoute({...route, [input.name]: input.value});
    };

    const onClick = () => {
        getCoordinates(route);
    };

    return(
        <>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="from">Откуда</InputLabel>
                <MapSelect 
                    addressKey="from"
                    otherAddress={route.to}
                    onChange={onChange}
                    route={route}
                    values={props.addresses}
                >
                </MapSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="to">Куда</InputLabel>
                <MapSelect 
                    addressKey="to"
                    otherAddress={route.from}
                    onChange={onChange}
                    route={route}
                    values={props.addresses}
                >
                </MapSelect>
            </FormControl>
            <Tariff />
            <Button 
                className={classes.button}
                onClick={onClick}
            >
                Заказать
            </Button>
        </>
    )
}

export const OrderFormWithConnect = connect(
    state => ({addresses: state.addressList.addresses}),
    {getCoordinates, getAddresses}
)(OrderForm)



/*export class OrderForm extends Component {
    componentDidMount(){
        const {getAddresses} = this.props;
        getAddresses();
        const {getCoordinates} = this.props;
        getCoordinates();
    };

    render(){
        return(
            <OrderFormWithConnect />
        )
    }
}

export const OrderFormWrapper = (props) => {
    const classes = useFormStyles();

    const [route, setRoute] = React.useState({from: "", to: ""});

    const onChange = (event) => {
        let input = event.target
        setRoute({...route, [input.name]: input.value});
    };

    const onClick = () => {
        getCoordinates(route);
    };

    return(
        <>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="from">Откуда</InputLabel>
                <MapSelect 
                    addressKey="from"
                    otherAddress={route.to}
                    onChange={onChange}
                    route={route}
                    values={props.addresses}
                >
                </MapSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="to">Куда</InputLabel>
                <MapSelect 
                    addressKey="to"
                    otherAddress={route.from}
                    onChange={onChange}
                    route={route}
                    values={props.addresses}
                >
                </MapSelect>
            </FormControl>
            <Tariff />
            <ButtonWrapper 
                onClick={onClick}
            />
        </>
    )
}

const ButtonWrapper = ({onClick}) => {
    const classes = useFormStyles();

    return(
        <Button 
            className={classes.button}
            onClick={onClick}
        >
            Заказать
        </Button>
    )
}

export const OrderFormWithConnect = connect(
    state => ({addresses: state.addressList.addresses}),
    {getCoordinates}
)(OrderFormWrapper)*/