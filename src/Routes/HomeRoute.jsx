import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileMain from '../pages/ProfileMain/ProfileMain';
import Home from '../pages/Home/Home';
import Project from '../pages/Project/Project';

function HomeRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<ProfileMain />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </>
  );
}

export default HomeRoute;
