import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PortFolioMain from '../pages/PortFolioMain/PortFolioMain';

function HomeRoute(props) {
  return (
    <>
      <Routes>
        <Route path="/PortFolio" element={<PortFolioMain />} />
      </Routes>
    </>
  );
}

export default HomeRoute;
