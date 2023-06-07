// import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
// Import pages
import Home from './pages/home';
import CreateNade from './pages/createnade';



function App() {
  return (
    
      <div>
        <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/createnade' element={<CreateNade />} />

          </Routes>
        </BrowserRouter>
        </AuthProvider>
      </div>
    
  );
}


export default App;
