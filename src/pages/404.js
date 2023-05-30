import {ChakraProvider, Switch} from '@chakra-ui/react';
import React from 'react';
import '../style.css';

// Component imports
import Header from '../components/Header';
import MapSelector from '../components/MapSelector';
import PopularNades from '../components/PopularNades';



function Home() {
  return (
    <ChakraProvider>
    <div className="App">
      <Header />
      <MapSelector />
      <PopularNades />
    </div>
    <div className="app-background"></div>
  </ChakraProvider>

  );
}


export default Home;