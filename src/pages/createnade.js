import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import '../style.css';

// Component imports
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import VideoInfoCard from '../components/videoInfoCard';
import NadeInfoCard from '../components/NadeInfoCard';
function CreateNade() {

    return (
        <ChakraProvider>
            <div className="App">
                <NavBar />


                <VideoInfoCard />
                <NadeInfoCard />
                <Footer />
            </div>

            <div className="app-background"></div>
        </ChakraProvider>

    );
}


export default CreateNade;
