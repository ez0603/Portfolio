import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import ProfileMain from '../pages/ProfileMain/ProfileMain';
import Home from '../pages/Home/Home';
import Project from '../pages/Project/Project';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Layout from '../components/Layout/Layout';
import '../App.css'; // CSS 파일 임포트
import Profile from '../pages/Profile/Profile';
import Layout2 from '../components/Layout2/Layout2';
import AboutMe from '../pages/AboutMe/AboutMe';

function HomeRoute() {
  const bookRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (bookRef.current) {
      console.log('useEffect 호출됨');
      const flipInstance = bookRef.current.pageFlip();
      if (flipInstance) {
        console.log('페이지 수:', flipInstance.getPageCount());
      } else {
        console.log('pageFlip 인스턴스를 사용할 수 없음');
      }
    } else {
      console.log('bookRef.current가 null입니다.');
    }
  }, []);

  return (
    <div>
      <div className="flipbook-container">
        <HTMLFlipBook
          width={isExpanded ? 90 * window.innerWidth / 100 : 45 * window.innerWidth / 100}
          height={95 * window.innerHeight / 100}
          size="stretch"
          minWidth={315}
          maxWidth={2200}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.3}
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
              <Profile />
            </Layout>
          </div>
          <div className="demoPage inner-page">
            <Layout2>
              <ProfileMain />
            </Layout2>
          </div>
          <div className="demoPage inner-page">
            <Layout>
              <AboutMe />
            </Layout>
          </div>
          <div className="demoPage inner-page">
            <Layout2>
              <Project />
            </Layout2>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default HomeRoute;
