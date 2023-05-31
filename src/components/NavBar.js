import React from "react";
import { useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { FaBars } from 'react-icons/fa';
import Line from './line'

import '../style.css';




function NavBar() {


    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };




    return (
        <nav style={styles.NavBar}>
            {/* Left side of the navbar where the hamburger is */}
            <button style={styles.sandwhichContainer} className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={handleClick}>
                <FaBars style={styles.sandwhich} className={`hamburger ${isOpen ? 'open' : ''}`}/>
            </button>

            {/* Menu */}
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-item">
                    <p className="font-reg primary-text">ACTIVE DUTY</p>
                    <Line/>
                    <ul style={styles.ul}>
                        <li className="font-bold secondary-text nav-link" style={styles.li}>Dust 2</li>
                        <li className="font-bold secondary-text nav-link" style={styles.li}>Inferno</li>
                        <li className="font-bold secondary-text nav-link" style={styles.li}>Mirage</li>
                        <li className="font-bold secondary-text nav-link" style={styles.li}>Nuke</li>
                        <li className="font-bold secondary-text nav-link" style={styles.li}>Overpass</li>
                        <li className="font-bold secondary-text nav-link" style={styles.li}>Train</li>
                        <li className="font-bold secondary-text nav-link" style={styles.li}>Vertigo</li>
                        
                    </ul>
                </div>
            </div>
            {/* Right side where the profile is */}
            <div className={`overlay ${isOpen ? 'open' : ''}`}></div>
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