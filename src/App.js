import React from 'react';
import styled from 'styled-components';
import Nav from "./components/Nav";
import Employee from "./pages/Employee";
import Company from "./pages/Company";
import {Route, Routes} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import MobilePage from "./pages/MobilePage";

// Desktop
const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #292727;
  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
  width: 55%;
  padding: 50px 0 80px;
  display: flex;
  flex-direction: column;

  @media(max-width: 1200px) {
    width: 80%;
  }

  @media(max-width: 860px) {
    width: 95%;
  }
`

const Frame = styled.main`
  background: #F4F4F4;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`
// ====

// Mobile
const MobileWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eee;
`

const MobileFrame = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
// ====

const App = () => {
  const isMobile = useMediaQuery({query: '(max-width: 640px)'})
  const isDesktop = !isMobile

  if (isDesktop) return (
      <AppWrapper>
        <ContentWrapper>
          <Nav />
          <Frame>
            <Routes>
              <Route path={'Hubex-test/'} element={<Employee />} />
              <Route path={'Hubex-test/company'} element={<Company />} />
            </Routes>
          </Frame>
        </ContentWrapper>
      </AppWrapper>
  );

  if (isMobile) return (
      <MobileWrapper>
        <MobileFrame>
          <MobilePage />
        </MobileFrame>
      </MobileWrapper>
  )
};

export default App;
