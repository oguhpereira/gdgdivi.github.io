import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import BaseInnerContent from './../inner-content'
import logo from "./logo.svg";

const Content = styled.section`
  background-color: #F7F7F7;
`

const InnerContent = BaseInnerContent.extend`
  display: flex;

  @media screen and (max-width: 799px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const LogoContainer = styled.aside`
  @media screen and (min-width: 800px) {
    flex-grow: 0;
    flex-shrink: 0;
    order: 2;
  }
`

const DescriptionContainer = styled.div.attrs({ className: 'description' })`
  color: #676C71;
  font-size: 1.5rem;

  @media screen and (max-width: 799px) {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    align-items: center;
    margin-right: 3.5rem;
  }
`

const Intro = () => (
  <Content>
    <InnerContent>
      <LogoContainer>
        <figure>
          <img src={logo} alt="Logo of Google Developer Group" width="183" height="292" />
        </figure>
      </LogoContainer>
      <DescriptionContainer>
        <p>O Google Developers Group Divinópolis, tem como objetivo reunir pessoas com interesse em tecnologias da Google e trocar conhecimentos através de encontros, reuniões e eventos. Além de servir como ponte entre empreendedores e desenvolvedores.</p>
      </DescriptionContainer>
    </InnerContent>
  </Content>
)

export default Intro