import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Socials from "../components/Socials";
import {fetchData} from "../utils/api";

import {ReactComponent as Phone} from "../static/phone.svg";
import {ReactComponent as Mail} from "../static/mail.svg";
import {ReactComponent as LinkIcon} from "../static/link.svg";
import {ReactComponent as Location} from "../static/location.svg";
import {ReactComponent as Calendar} from "../static/calendar.svg";
import {ReactComponent as Person} from "../static/person.svg";
import {ReactComponent as Fax} from "../static/fax.svg";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Data = styled.div`
  display: flex;
  height: 100%;
`

const Divider = styled.div`
  margin-top: 80px;
  border-top: 1px solid #060606;
`

const LogoDesc = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 30px;
  text-align: center;
`

const Logo = styled.img`
  object-fit: cover;
  max-width: 50%;
  max-height: 15%;
  margin-top: 20px;
  margin-bottom: 35px;
`

const Name = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-family: 'Abhaya Libre Extra Bold', serif;
  font-size: 20px;
  font-weight: 800;
`

const About = styled.div`
  width: 50%;
  margin-top: 20px;
`

const StyledList = styled.ul`
  margin-left: 10px;
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

const Company = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData().then(json => setData(json))
  }, [])

  return (
      <Wrapper>
        <Divider />
        <Data>
          <LogoDesc>
            <Logo src={data?.company?.logoUrl} alt='logo' />
            <div style={{textAlign: 'start'}}>
              <Name>{data?.company?.name}</Name>
              <br/>
              {data?.company?.desc}
            </div>
          </LogoDesc>
          <About>
            <StyledList>
              <a href={`tel:${data?.company?.phone}`}>
              <StyledItem>
                <Phone />
                <span>{data?.company?.phone}</span>
              </StyledItem>
              </a>
              <a href={`mailto:${data?.company?.email}`}>
              <StyledItem>
                <Mail />
                <span>Почта</span>
              </StyledItem>
              </a>
              <a href={`https://${data?.company?.website}`} rel="noreferrer" target='_blank'>
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
                <span>{data?.company?.foundingDate}</span>
              </StyledItem>
              <StyledItem>
                <Person />
                <div style={{width: '70%', display: 'flex', flexWrap: 'wrap'}}>
                  {data?.company?.clients.map(c => (
                      <span key={c} style={{marginRight: 5}}>{c}</span>
                  ))}
                </div>
              </StyledItem>
              <StyledItem>
                <Fax />
                <span>{data?.company?.fax}</span>
              </StyledItem>
            </StyledList>
          </About>
        </Data>
        <Socials socials={data?.employee?.socials} />
      </Wrapper>
  );
};

export default Company;
