import React, { useEffect } from "react";
import { useState } from "react";

import { FaBars, FaRegUserCircle, FaSignOutAlt } from 'react-icons/fa';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons'
import Line from './line'
import ProfileDropdown from "./ProfileDropdown";

import '../style.css';


import { useAuth } from '../contexts/AuthContext';


function NavBar() {
    const { signInWithGoogle, signOut, currentUser } = useAuth();
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
            name: 'Dust II',
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
        const mapName = mapInfo.name;
        return (
            <li className="font-reg secondary-text nav-link" style={styles.li} >
                <a href="#" tabIndex={0}>{mapName}</a>
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
                    <p className="font-bold primary-text" tabIndex={0}>ACTIVE DUTY MAPS</p>
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
            <div className="profile-container">
                {currentUser ? (
                    <ProfileDropdown />
                ) : (
                    <button className="primary-button font-reg secondary-text primary-highlight" onClick={signInWithGoogle}>Sign In With Google</button>
                )}
            </div>


            {/* Menu Overlay */}
            <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={handleClick}></div>
        </nav>

    );
}

const styles = {
    NavBar: {
        height: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#0D1520',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '100',
        // padding left & right 15px
        paddingLeft: '15px',
        paddingRight: '15px',
    },
    sandwhichContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25px',
        width: '25px',
        zIndex: '101',
    },
    sandwhich: {
        width: '100%',
        height: '100%',
    },
    ul: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    menu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '15px',
        paddingRight: '15px',
    },
    profilecont: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',


    },
    profile: {
        marginRight: '5px',
    },
    dropdownmenu: {
        backgroundColor: '#121927',
        border: '2px solid #3D4452',
    },
    dropdownItem: {
        backgroundColor: 'transparent',
        color: '#BBC1C8',
        border: '1.5px solid transparent',
        transition: 'all 0.2s ease-in-out',
    },
    menuDivider: {
        border: '1px solid #3D4452'
    },
    dropdownItemHover: {
        backgroundColor: '#262C35',
        border: '1.5px solid #3D4452',
        transition: 'all 0.2s ease-in-out',
    },

}

export default NavBar;