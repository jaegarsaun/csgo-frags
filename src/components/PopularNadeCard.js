import React from "react";
import '../style.css'
import { FaHeart } from "react-icons/fa";

// import chakra ui badge
import { Badge } from "@chakra-ui/react"

function PopularNadeCard(props) {
    let badge = null;
    if(props.tag === 'popular') {
        badge  = <Badge colorScheme="purple" variant='outline' style={styles.badge}>POPULAR</Badge>
    }else if(props.tag === 'new') {
        badge = <Badge colorScheme="green" variant='outline' style={styles.badge}>NEW</Badge>
    
    }else {
        badge = <Badge variant='outline'>VERIFIED</Badge>
    }
    const mapName = props.map.toLowerCase();
    const mapImage = require(`../images/MapImages/${mapName}-map.webp`);
    return(
    <div style={styles.PopularNadeCard} className="card">
        <div style= {styles.top}>
            <p style={styles.p} className="font-bold primary-text">
                {props.title}
            </p>
            <p style={styles.pBottom} className="font-reg secondary-text">
                {props.type}
            </p>
        </div>
        <div style={styles.middle}>
            <img src={mapImage} style={styles.img}/>
        </div>
        <div style={styles.bottom}>
            <div style={styles.left}>{badge}</div>
            <div style={styles.right}>
                <p style={styles.likes}>{props.likes}</p>
                <FaHeart color="white"/>
            </div>
            
        </div>
    </div>
    );
}

const styles = {
    PopularNadeCard: {
        height: '300px',

        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
    },
    top: {
        height: '67px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    
    },
    middle: {
        flexGrow: '1',
    },
    bottom: {
        height: '35px',
        backgroundColor: 'rgba(21, 24, 41, 0.47)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    img: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    p:{
        fontSize: '20px',
    },
    pBottom:{
        fontSize: '15px',
        display: 'flex',
    },
    
    left: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '10px',
        width: '50%'
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: '10px',
        width: '50%'
    },
    likes: {
        color: 'white',
        marginRight: '5px',
    }

        
}

export default PopularNadeCard;