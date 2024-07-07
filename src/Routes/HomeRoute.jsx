import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import ProfileMain from '../pages/ProfileMain/ProfileMain';
import Home from '../pages/Home/Home';
import Project from '../pages/Project/Project';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Layout from '../components/Layout/Layout';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import '../App.css'; // CSS 파일 임포트

function HomeRoute() {
  const bookRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavigation = (page) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(page);
      setIsExpanded(page !== 0);
    }
  };

  return (
    <div>
      <HomeHeader onNavigate={handleNavigation} />
      <div className="flipbook-container">
        <HTMLFlipBook
          width={isExpanded ? 90 * window.innerWidth / 100 : 45 * window.innerWidth / 100}  // 가로 크기 변경
          height={95 * window.innerHeight / 100}  // 세로 크기 변경
          size="stretch"
          minWidth={315}
          maxWidth={2200}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="book"
          ref={bookRef}
        >
          <div className="demoPage cover">
            <HomeLayout>
              <Home />
            </HomeLayout>
          </div>
          <div className="demoPage inner-page">
            <Layout>
              <ProfileMain />
            </Layout>
          </div>
          <div className="demoPage inner-page">
            <Layout>
              <ProfileMain />
            </Layout>
          </div>
          <div className="demoPage inner-page">
            <Layout>
              <Project />
            </Layout>
          </div>
          <div className="demoPage inner-page">
            <Layout>
              <Project />
            </Layout>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default HomeRoute;
