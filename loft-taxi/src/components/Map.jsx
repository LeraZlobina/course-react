import React, {Component} from "react";
import mapboxgl from "mapbox-gl";
import {HeaderWithAuth} from "./Header"

export class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = "pk.eyJ1IjoibGVyYXpsb2JpbmEiLCJhIjoiY2ttcmphNzg5MDV4bTJwcG9ydTIwbTdsMyJ9.aZUPW1P2eyaNmYwo2X9RyQ"
    
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/light-v10",
            center: [30.3056504, 59.9429126],
            zoom: 10
        })
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return(
            <>
                <HeaderWithAuth />
                <div className="map-wrapper">
                    <div data-testid="map" className="map" ref={this.mapContainer}></div>
                </div>
            </>
            
        )
    }
}