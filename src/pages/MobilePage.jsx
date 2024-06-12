import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {fetchData} from "../utils/api";
import MobileEmployeeInfo from "../components/MobileEmployeeInfo";
import MobileCompanyInfo from "../components/MobileCompanyInfo";

import {ReactComponent as Download} from "../static/download.svg";
import {ReactComponent as Call} from "../static/call.svg";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Logo = styled.img`
  object-fit: cover;
  max-width: 20%;
`

const PhotoWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 370px;
  overflow: hidden;
`

const Photo = styled.img`
  object-fit: cover;
  width: 70%;
  height: 100%;
  transform: scale(1.3) translateY(35px);
`

const Buttons = styled.div`
  width: 100%;
  position: absolute;
  bottom: -25px;
  display: flex;
  justify-content: space-around;
  padding: 0 8%;
`

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FEFEFE;
  width: 45%;
  min-height: 60px;
  filter: drop-shadow(0px 4.05px 5.68px rgba(0, 0, 0, 0.03));
  border: none;
  border-radius: 8px;
  transform: translateY(0);
  transition: transform .3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  span {
    display: inline-block;
    width: 60%;
    text-align: start;
    color: #313131;
    font-family: 'TT Firs Neue Bold', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    padding-left: 10%;

    @media (max-width: 500px) {
      display: none;
    }
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`

const MobilePage = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData().then(json => setData(json))
  }, [])

  const onCallBtnClick = () => {
    window.location.replace(`tel:${data?.employee?.secondPhone}`)
  }

  return (
      <Wrapper>
        <div style={{textAlign: 'center', padding: '10px 0'}}>
          <Logo src={data?.company?.logoUrl} alt='Logo'/>
        </div>
        <div style={{position: 'relative'}}>
          <PhotoWrapper>
            <Photo src={data?.employee?.photoUrl} alt="avatar"/>
          </PhotoWrapper>
          <Buttons>
            <Btn>
              <Download/>
              <span>Сохранить визитку</span>
            </Btn>
            <Btn onClick={onCallBtnClick}>
              <Call/>
              <span>Позвонить</span>
            </Btn>
          </Buttons>
        </div>
        <InfoWrapper>
          <MobileEmployeeInfo data={data?.employee} />
          <MobileCompanyInfo data={data?.company} />
        </InfoWrapper>
      </Wrapper>
  );
};

export default MobilePage;
