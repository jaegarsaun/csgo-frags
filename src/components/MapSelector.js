import React from "react";
import Map from './Map';
import '../style.css'



function MapSelector() {

    const maps = ['ancient', 'anubis', 'nuke', 'inferno', 'mirage', 'overpass', 'vertigo'];
    return (
        <div style={styles.MapSelector} className="MapSelector">
            
            {maps.map((map) => (
                <Map key={map} mapName={map} />
            ))}

            
        </div>
    );
}

const styles = {
    MapSelector: {
        width: '100vw',
        display: 'flex',
        overflowY: 'hidden',
        overflowX: 'auto',
        padding: '5px',
    },
   
}

export default MapSelector;