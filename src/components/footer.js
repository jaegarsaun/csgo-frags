import React from "react";

function footer() {
  return (
    <footer style={styles.footer}>
        <div style={styles.wrapper}>
            <p className="font-reg secondary-text">Copyright © 2023 All Rights Reserved by <span className="font-reg primary-text" style={styles.logo}> CSGO<span className="font-bold primary-text logoSpan">FRAGS</span></span></p>
        </div>
    </footer>
  )
}

const styles = {
    footer:{
        padding: '15px',
        height: '100px',
        width: '100%',
        position: 'relative',  // Change 'absolute' to 'relative'
        marginTop: '10vh',
    },
    wrapper:{
        borderTop: '2px solid #3D4452', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },


}

export default footer;