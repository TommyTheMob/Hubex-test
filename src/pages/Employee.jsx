import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Socials from "../components/Socials";

import {fetchData} from "../utils/api";

import {ReactComponent as CellPhone} from "../static/cell-phone.svg";
import {ReactComponent as Phone} from "../static/phone.svg";
import {ReactComponent as Mail} from "../static/mail.svg";
import {ReactComponent as LinkIcon} from "../static/link.svg";
import {ReactComponent as Location} from "../static/location.svg";
import {ReactComponent as Calendar} from "../static/calendar.svg";
import {ReactComponent as Person} from "../static/person.svg";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Data = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 20px;
  height: 100%;
  
  @media(max-width: 1024px) {
    
  }
`

const Photo = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 30px;
`

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 90%;
  border-radius: 8px;
`

const StyledButton = styled.button`
  font-family: 'TT Firs Neue Bold', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: #FEFEFE;
  background: #060606;
  width: 100%;
  min-height: 50px;
  border: none;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  filter: drop-shadow(0px 3.91px 5.48px rgba(0, 0, 0, 0.03));
  transform: translateY(0);
  transition: transform .3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`

const Info = styled.div`
  width: 50%;
  text-align: center;
`

const Logo = styled.img`
  object-fit: cover;
  max-width: 50%;
  max-height: 15%;
  margin-bottom: 35px;
`

const Divider = styled.div`
  border-top: 1px solid #060606;
`

const StyledList = styled.ul`
  margin-top: 20px;
  margin-left: 35px;
  list-style: none;
  height: 55%; 
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
  
  span {
    font-size: 15px;
  }
`

const Name = styled.span`
  display: inline-block;
  font-family: 'TT Firs Neue Bold', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
`

const Position = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #455773;
`

const Employee = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData().then(json => setData(json))
  }, [])

  const onAddToContactsBtnClick = () => {
  }

  return (
      <Wrapper>
        <Data>
          <Photo>
            <StyledImg src={data?.employee?.photoUrl} alt="avatar"/>
            <StyledButton onClick={onAddToContactsBtnClick}>Добавить в контакты</StyledButton>
          </Photo>
          <Info>
            <Logo src={data?.company?.logoUrl} alt='Logo' />
            <Divider />
            <div style={{textAlign: 'start', marginLeft: 35, marginTop: 20}}>
              <Name>{data?.employee?.name}</Name>
              <br/>
              <Position>{data?.employee?.position}</Position>
            </div>
            <StyledList>
              <a href={`tel:${data?.employee?.cellPhone}`}>
              <StyledItem>
                <CellPhone />
                <span>{data?.employee?.cellPhone}</span>
              </StyledItem>
              </a>
              <a href={`tel:${data?.employee?.phone}`}>
              <StyledItem>
                <Phone />
                <span>{data?.employee?.phone}</span>
              </StyledItem>
              </a>
              <a href={`tel:${data?.employee?.secondPhone}`}>
              <StyledItem>
                <Phone />
                <span>{data?.employee?.secondPhone}</span>
              </StyledItem>
              </a>
              <a href={`mailto:${data?.employee?.email}`}>
              <StyledItem>
                <Mail />
                <span>Почта</span>
              </StyledItem>
              </a>
              <a href={`https://${data?.employee?.website}`} rel="noreferrer" target='_blank'>
              <StyledItem>
                <LinkIcon style={{marginRight: 15}} />
                <span>Личный сайт</span>
              </StyledItem>
              </a>
              <StyledItem>
                <Location />
                <span>{data?.employee?.address}</span>
              </StyledItem>
              <StyledItem>
                <Calendar />
                <span>{data?.employee?.birthDate}</span>
              </StyledItem>
              <StyledItem>
                <Person />
                <span>{data?.employee?.grade}</span>
              </StyledItem>
            </StyledList>
          </Info>
        </Data>
        <Socials socials={data?.employee?.socials} />
      </Wrapper>
  );
};

export default Employee;
