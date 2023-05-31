// React component template
import React from 'react';
import '../style.css'


function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            <div className='left' style={styles.leftStyling}>
                <h1 style={styles.headingStyle}>CSGO<span style={styles.headingSpan} className='BoldHeader'>FRAGS</span></h1>

                <p style={styles.pStyle} className='headerText'>
                    Discover, learn, and share strategies for Counter-Strike Global
                    Offensive with our engaging gaming community.
                </p>
            </div>

            <img src={require('../images/csgonadeicon.png')} alt='CSGO Nade Icon' width={425} />
        </header>

    );
}

// Inline styles object
const styles = {
    headerStyle: {
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '15px'
    },
    headingStyle: {
        fontSize: 165,
        color: 'white',
    },
    headingSpan: {
        color: '#008AFF',
    },
    leftStyling: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    pStyle: {
        fontSize: 35,
        color: 'white',
    },

};

export default Header;





