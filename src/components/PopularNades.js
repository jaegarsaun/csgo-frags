import React from "react";
import '../style.css'
import PopularNadeCard from './PopularNadeCard';
import { SimpleGrid } from "@chakra-ui/react"
function PopularNades() {

    // Example data
    const nades = [
        {
            map: 'inferno',
            type: 'smoke',
            title: 'CT Smoke',
            description: 'This is a smoke for CT',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '30520',
            comments: '5',
            id: '1',
            tag: 'popular'
        },
        {
            map: 'inferno',
            type: 'smoke',
            title: 'CT Smoke',
            description: 'This is a smoke for CT',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '1252',
            comments: '5',
            id: '2',
            tag: 'popular'
        },
        {
            map: 'inferno',
            type: 'smoke',
            title: 'CT Smoke',
            description: 'This is a smoke for CT',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '2402',
            comments: '5',
            id: '3',
            tag: 'popular'
        },
        {
            map: 'inferno',
            type: 'smoke',
            title: 'CT Smoke',
            description: 'This is a smoke for CT',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '1002',
            comments: '5',
            id: '4',
            tag: 'popular'
        },
        {
            map: 'inferno',
            type: 'smoke',
            title: 'CT Smoke',
            description: 'This is a smoke for CT',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '523',
            comments: '5',
            id: '5',
            tag: 'popular'
        },
        {
            map: 'inferno',
            type: 'smoke',
            title: 'CT Smoke',
            description: 'This is a smoke for CT',
            image: 'https://i.imgur.com/3Z0Qq8M.png',
            views: '100',
            likes: '230',
            comments: '5',
            id: '6',
            tag: 'popular'
        }
    ]
    return (
    <div style={styles.PopularNades} className="PopularNades">
        <p style={styles.title} className="p-tag">MOST POPULAR FRAGS</p>

        <SimpleGrid minChildWidth='300px' spacing="15px">
        {nades.map((nade) => (
            <PopularNadeCard key={nade.id} map={nade.map} title={nade.title} type={nade.type} likes={nade.likes} tag={nade.tag}/>
        ))}
        </SimpleGrid>
        

    </div>
    );
}

const styles = {
    PopularNades: {
        height: '50vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        
    },
    PopularNadesCont: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '15px',
    },
    title:{
        fontSize: '35px',
        color: 'white',
    }
}

export default PopularNades;

