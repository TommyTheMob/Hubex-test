import React from 'react';
import styled from "styled-components";

import { ReactComponent as Telegram } from "../static/telegram.svg";
import { ReactComponent as Whatsapp } from "../static/whatsapp.svg";
import { ReactComponent as Viber } from "../static/viber.svg";
import { ReactComponent as Instagram } from "../static/instagram.svg";
import { ReactComponent as VK } from "../static/vk.svg";
import { ReactComponent as Facebook } from "../static/facebook.svg";
import { ReactComponent as YouTube } from "../static/youtube.svg";
import { ReactComponent as OK } from "../static/ok.svg";
import { ReactComponent as Dzen } from "../static/dzen.svg";
import { ReactComponent as TikTok } from "../static/tiktok.svg";
import { ReactComponent as LinkedIn } from "../static/linkedin.svg";

const Wrapper = styled.div`
  border-top: 1px solid #060606;
  min-height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Socials = ({ socials }) => {
  return (
      <Wrapper>
        <a href={`https://${socials?.telegram}`} rel="noreferrer" target='_blank'>
          <Telegram />
        </a>
        <a href={`https://${socials?.whatsapp}`} rel="noreferrer" target='_blank'>
          <Whatsapp />
        </a>
        <a href={`https://${socials?.viber}`} rel="noreferrer" target='_blank'>
          <Viber />
        </a>
        <a href={`https://${socials?.instagram}`} rel="noreferrer" target='_blank'>
          <Instagram />
        </a>
        <a href={`https://${socials?.vk}`} rel="noreferrer" target='_blank'>
          <VK />
        </a>
        <a href={`https://${socials?.facebook}`} rel="noreferrer" target='_blank'>
          <Facebook />
        </a>
        <a href={`https://${socials?.youtube}`} rel="noreferrer" target='_blank'>
          <YouTube />
        </a>
        <a href={`https://${socials?.odnoklassniki}`} rel="noreferrer" target='_blank'>
          <OK />
        </a>
        <a href={`https://${socials?.dzen}`} rel="noreferrer" target='_blank'>
          <Dzen />
        </a>
        <a href={`https://${socials?.tiktok}`} rel="noreferrer" target='_blank'>
          <TikTok />
        </a>
        <a href={`https://${socials?.linkedin}`} rel="noreferrer" target='_blank'>
          <LinkedIn />
        </a>
      </Wrapper>
  );
};

export default Socials;
