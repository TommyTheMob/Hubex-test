import React from 'react';
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";

import {ReactComponent as Arrow} from '../static/arrow.svg'

const StyledNav = styled.nav`
  margin-bottom: 10px;
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
`

const StyledItem = styled.li`
  color: #FEFEFE;
  opacity: ${props => props.inactive && '50%'};
  cursor: ${props => !props.inactive && 'pointer'};
  font-family: ${props => !props.inactive && 'TT Firs Neue Medium, sans-serif'};
  transform: translateX(0);
  transition: transform .3s ease;
  
  &:hover {
    transform: ${props => props.inactive ? 'translateX(0)' : `translateX(${props.flip ? '': '-'}10px)`};
  }
`

const StyledArrow = styled(Arrow)`
  fill: #FEFEFE;
  transform: ${props => props.flip && 'scale(-1, -1)'};
`

const Nav = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const onEmployeeBtnClick = () => {
    if (pathname.includes('company')) navigate('Hubex-test/')
  }

  const onCompanyBtnClick = () => {
    if (!pathname.includes('company')) navigate('Hubex-test/company')
  }

  return (
      <StyledNav>
        <StyledList>
          <StyledItem onClick={onEmployeeBtnClick} inactive={!pathname.includes('company') ? 'true' : undefined}>
              <StyledArrow style={{marginRight: '20px'}} />
              о сотруднике
          </StyledItem>
          <StyledItem onClick={onCompanyBtnClick} inactive={pathname.includes('company') ? 'true' : undefined} flip={'true'}>
            о компании
            <StyledArrow style={{marginLeft: '20px'}} flip={'true'} />
          </StyledItem>
        </StyledList>
      </StyledNav>
  );
};

export default Nav;
