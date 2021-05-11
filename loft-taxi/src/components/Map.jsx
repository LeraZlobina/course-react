import React, { Component, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MapContainer } from "./MapContainer";
import MapView from "./MapView";
import { getAddresses } from "../modules/addressList/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCoordinates } from "../modules/route/actions";
import { coordinatesSelector } from "../modules/route/reducer";

const MapWithConnect = () => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoordinates());
        dispatch(getAddresses());
    }, []);

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoibGVyYXpsb2JpbmEiLCJhIjoiY2ttcmphNzg5MDV4bTJwcG9ydTIwbTdsMyJ9.aZUPW1P2eyaNmYwo2X9RyQ"

        const newMap = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v10",
            center: [30.3056504, 59.9429126],
            zoom: 10
        });

        setMap(newMap);

        return () => {
            map.remove();
        }
    }, []);


    return (
        <>
            <MapContainer ref={mapContainer}>
                <MapView
                    map={map}
                />
            </MapContainer>
        </>
    )
};

export default MapWithConnect;
