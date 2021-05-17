import React from "react";

export const MapContainer = React.forwardRef( ({children}, ref) => {
    return(
        <div className="map-wrapper">
            <div data-testid="map" className="map" ref={ref}/>
            {children}
        </div>
    )
})
