import React from "react";
import { useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { FaBars } from 'react-icons/fa';
import Line from './line'

import '../style.css';
import { click } from "@testing-library/user-event/dist/click";




function NavBar() {


    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const activeDutyMapCollection = [
        {
            name: 'Ancient',
            numOfNades: 15,
            id: 1,
            activeDuty: true
        },
        {
            name: 'Anubis',
            numOfNades: 4,
            id: 2,
            activeDuty: true
        },
        {
            name: 'Inferno',
            numOfNades: 24,
            id: 3,
            activeDuty: true
        },
        {
            name: 'Mirage',
            numOfNades: 2,
            id: 4,
            activeDuty: true
        },
        {
            name: 'Nuke',
            numOfNades: 42,
            id: 5,
            activeDuty: true

        },
        {
            name: 'Overpass',
            numOfNades: 12,
            id: 6,
            activeDuty: true
        },
        {
            name: 'Vertigo',
            numOfNades: 15,
            id: 7,
            activeDuty: true
        },
        {
            name: 'Cache',
            numOfNades: 13,
            id: 8,
            activeDuty: false
        },
        {
            name: 'Dust ii',
            numOfNades: 19,
            id: 9,
            activeDuty: false
        },
        {
            name: 'Train',
            numOfNades: 23,
            id: 10,
            activeDuty: false
        },
        {
            name: 'Tuscan',
            numOfNades: 8,
            id: 11,
            activeDuty: false
        },
    ]


    function NavLink({ mapInfo }) {
        const mapName = mapInfo.name.toUpperCase();
        return (
            <li className="font-bold secondary-text nav-link" style={styles.li} >
                <a tabIndex={0}>{mapName}</a>
                <div>
                    <p className="font-reg secondary-text">{mapInfo.numOfNades}</p>
                </div>
            </li>
        )
    }

    return (
        <nav style={styles.NavBar}>
            {/* Left side of the navbar where the hamburger is */}
            <button style={styles.sandwhichContainer} className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={handleClick}>
                <FaBars style={styles.sandwhich} className={`hamburger ${isOpen ? 'open' : ''}`} />
            </button>

            {/* Menu */}
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-item">
                    <p className="font-reg primary-text" tabIndex={0}>ACTIVE DUTY MAPS</p>
                    <Line />
                    <ul style={styles.ul}>
                        {activeDutyMapCollection
                            .filter((mapInfo) => mapInfo.activeDuty) // Filter the array to include only objects with activeDuty set to true
                            .map((mapInfo) => (
                                <NavLink mapInfo={mapInfo} key={mapInfo.id} />
                            ))}

                    </ul>
                </div>
                <div className="menu-item">
                    <p className="font-reg primary-text" tabIndex={0}>RESERVE MAPS</p>
                    <Line />
                    <ul style={styles.ul}>
                        {activeDutyMapCollection
                            .filter((mapInfo) => !mapInfo.activeDuty) // Filter the array to include only objects with activeDuty set to true
                            .map((mapInfo) => (
                                <NavLink mapInfo={mapInfo} key={mapInfo.id} />
                            ))}
                    </ul>
                </div>
            </div>
            {/* Right side where the profile is */}
            <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={handleClick}></div>
        </nav>

    );
}

const styles = {
    NavBar: {
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '100',
    },
    sandwhichContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '50px',
        zIndex: '101',
    },
    sandwhich: {
        fontSize: '20px',
    },
    ul: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },

}

export default NavBar;