import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/Mainpage/Main';
import Nav from './components/UI/Header/Nav';
import Devices from './components/pages/DevicesPage/Devices';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<Devices />} />
        <Route path="*" element={(<div>Nothing here</div>)} />
      </Routes>
    </>
  );
}

export default App;
