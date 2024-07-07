// HomeRoute.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileMain from '../pages/ProfileMain/ProfileMain';
import Home from '../pages/Home/Home';
import Project from '../pages/Project/Project';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Layout from '../components/Layout/Layout';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import Header from '../components/Header/Header';

function HomeRoute(props) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <HomeHeader/>
            <HomeLayout>
              <Home />
            </HomeLayout>
            </>
          }
        />
        <Route
          path="/Profile"
          element={
            <>
            <Header />
            <Layout>
              <ProfileMain />
            </Layout>
            </>
          }
        />
        <Route
          path="/Project"
          element={
            <>
            <Header />
            <Layout>
              <Project />
            </Layout>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default HomeRoute;
