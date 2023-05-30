import React from "react";
import '../style.css'
import { useState } from 'react';

function Map({ mapName }) {
    const upperCaseMapName = mapName.toUpperCase();
    const mapImage = require(`../images/MapImages/${mapName}-map.webp`);

    function mouseOver(event) {
        const map = event.currentTarget.querySelector('.mapName');
        const mapImg = event.currentTarget.querySelector('.mapImg');
        mapImg.style.opacity = '1';
    }

    function mouseOut(event) {

        const mapImg = event.currentTarget.querySelector('.mapImg');
        const map = event.currentTarget.querySelector('.mapName');
        mapImg.style.opacity = '0.7';

    }

    return (
        <div
            style={styles.mapStyle}
            onMouseEnter={mouseOver}
            onMouseLeave={mouseOut}
            
        >
            <img src={mapImage} alt={mapName} style={styles.mapImg} className="mapImg" />
            <p style={styles.mapName} className="mapName">{upperCaseMapName}</p>
        </div>
    );

}

const styles = {
    mapStyle: {
        height: '15vh',
        width: '232px',
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        margin: '10px',
        flexShrink: '0',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',

    },
    mapName: {
        fontSize: '20px',
        color: 'white',
        zIndex: '2',
    },
    mapImg: {
        height: '100%',
        width: '100%',
        borderRadius: '8px',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '1',
        opacity: '0.7',
        transition: 'opacity 0.2s ease-in-out',
    },

};

export default Map;
