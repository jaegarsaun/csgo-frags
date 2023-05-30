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


    return(
    <div style={styles.PopularNadeCard}>
        <div style= {styles.top}>
            <p style={styles.p} className="p-tag">
                {props.title}
            </p>
            <p style={styles.pBottom} className="p-tag">
                {props.type}
            </p>
        </div>
        <div style={styles.middle}>
            <img src="http://localhost:3000/static/media/inferno-map.04b6ec153599907c5589.webp" style={styles.img}/>
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

        backgroundColor: '#2A2A39',
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
    },
    top: {
        height: '67px',
        backgroundColor: 'rgba(21, 24, 41, 0.47)',
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
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    pBottom:{
        color: 'white',
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