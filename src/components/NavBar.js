import React from "react";
import { useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { FaBars } from 'react-icons/fa';

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
                    
                </div>
            </div>
            {/* Right side where the profile is */}
        </nav>
    );
}

const styles = {
    NavBar: {
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
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
    }
}

export default NavBar;