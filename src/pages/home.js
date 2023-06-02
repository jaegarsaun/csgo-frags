import {ChakraProvider, Switch} from '@chakra-ui/react';
import React from 'react';
import '../style.css';

// Component imports
import Header from '../components/Header';
import MapSelector from '../components/MapSelector';
import PopularNades from '../components/PopularNades';
import NavBar from '../components/NavBar'
import RecentBlogs from '../components/RecentBlogs';

function Home() {




  return (
    <ChakraProvider>
    <div className="App">
      <NavBar />
      <Header />
      <MapSelector />
      <PopularNades />
      <RecentBlogs />
    </div>
    
    <div className="app-background"></div>
  </ChakraProvider>

  );
}


export default Home;