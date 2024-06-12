import React from 'react';
import styled from "styled-components";
import MobileSocials from "./MobileSocials";

import {ReactComponent as CellPhone} from "../static/cell-phone.svg";
import {ReactComponent as Phone} from "../static/phone.svg";
import {ReactComponent as Mail} from "../static/mail.svg";
import {ReactComponent as LinkIcon} from "../static/link.svg";
import {ReactComponent as Location} from "../static/location.svg";
import {ReactComponent as Calendar} from "../static/calendar.svg";
import {ReactComponent as Person} from "../static/person.svg";

const Info = styled.div`
  background: #FEFEFE;
  width: 80%;
  border-radius: 8px;
`

const NamePos = styled.div`
  padding: 20px;
`

const Name = styled.span`
  display: inline-block;
  font-family: 'TT Firs Neue Bold', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
`

const Pos = styled.span`
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

const MobileEmployeeInfo = ({ data }) => {
  return (
      <Info>
        <NamePos>
          <Name>{data?.name}</Name>
          <br/>
          <Pos>{data?.position}</Pos>
        </NamePos>
        <Divider/>
        <StyledList>
          <a href={`tel:${data?.cellPhone}`}>
            <StyledItem>
              <CellPhone/>
              <span>{data?.cellPhone}</span>
            </StyledItem>
          </a>
          <a href={`tel:${data?.phone}`}>
            <StyledItem>
              <Phone/>
              <span>{data?.phone}</span>
            </StyledItem>
          </a>
          <a href={`tel:${data?.secondPhone}`}>
            <StyledItem>
              <Phone/>
              <span>{data?.secondPhone}</span>
            </StyledItem>
          </a>
          <a href={`mailto:${data?.email}`}>
            <StyledItem>
              <Mail/>
              <span>Почта</span>
            </StyledItem>
          </a>
          <a href={`https://${data?.website}`} rel="noreferrer" target='_blank'>
            <StyledItem>
              <LinkIcon style={{marginRight: 15}}/>
              <span>Личный сайт</span>
            </StyledItem>
          </a>
          <StyledItem>
            <Location/>
            <span>{data?.address}</span>
          </StyledItem>
          <StyledItem>
            <Calendar/>
            <span>{data?.birthDate}</span>
          </StyledItem>
          <StyledItem style={{marginBottom: 0}}>
            <Person/>
            <span>{data?.grade}</span>
          </StyledItem>
        </StyledList>
        <MobileSocials socials={data?.socials}/>
      </Info>
  );
};

export default MobileEmployeeInfo;
