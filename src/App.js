import {ChakraProvider} from '@chakra-ui/react';
import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default App;
