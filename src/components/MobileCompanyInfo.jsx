import React from 'react';
import styled from "styled-components";
import MobileSocials from "./MobileSocials";

import {ReactComponent as Phone} from "../static/phone.svg";
import {ReactComponent as Mail} from "../static/mail.svg";
import {ReactComponent as LinkIcon} from "../static/link.svg";
import {ReactComponent as Location} from "../static/location.svg";
import {ReactComponent as Calendar} from "../static/calendar.svg";
import {ReactComponent as Person} from "../static/person.svg";
import {ReactComponent as Fax} from "../static/fax.svg";


const Info = styled.div`
  background: #FEFEFE;
  width: 80%;
  border-radius: 8px;
  margin-top: 20px;
`

const CompanyName = styled.span`
  font-size: 18px;
  font-weight: 800;
  font-family: 'Abhaya Libre ExtraBold', serif;
  display: inline-block;
  margin-bottom: 10px;
`

const NameDesc = styled.div`
  padding: 20px;
`

const Desc = styled.span`
  font-size: 14px;
  color: #455773;
`

const Divider = styled.div`
  border-top: 1px solid #060606;
`

const StyledList = styled.ul`
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  svg {
    margin-right: 10px;
  }
  
  span {
    font-size: 15px;
  }
`

const MobileCompanyInfo = ({ data }) => {
  return (
      <Info>
        <NameDesc>
          <CompanyName>{data?.name}</CompanyName>
          <br/>
          <Desc>{data?.desc}</Desc>
        </NameDesc>
        <Divider/>
        <StyledList>
          <a href={`tel:${data?.phone}`}>
            <StyledItem>
              <Phone />
              <span>{data?.phone}</span>
            </StyledItem>
          </a>
          <a href={`mailto:${data?.email}`}>
            <StyledItem>
              <Mail />
              <span>Почта</span>
            </StyledItem>
          </a>
          <a href={`https://${data?.website}`} rel="noreferrer" target='_blank'>
            <StyledItem>
              <LinkIcon style={{marginRight: 15}} />
              <span>Личный сайт</span>
            </StyledItem>
          </a>
          <StyledItem>
            <Location />
            <span>{data?.address}</span>
          </StyledItem>
          <StyledItem>
            <Calendar />
            <span>{data?.foundingDate}</span>
          </StyledItem>
          <StyledItem>
            <Person />
            <div style={{width: '70%', display: 'flex', flexWrap: 'wrap'}}>
              {data?.clients.map(c => (
                  <span key={c} style={{marginRight: 5}}>{c}</span>
              ))}
            </div>
          </StyledItem>
          <StyledItem>
            <Fax />
            <span>{data?.fax}</span>
          </StyledItem>
        </StyledList>
        <MobileSocials socials={data?.socials}/>
      </Info>
  );
};

export default MobileCompanyInfo;
