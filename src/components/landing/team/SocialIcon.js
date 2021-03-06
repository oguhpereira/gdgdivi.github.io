import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  justify-content: center;
  opacity: 0.5;
  transition-property: opacity, transform;
  width: 2rem;
  will-change: opacity, transform;

  :hover {
    color: ${({ color }) => `${color}`};
    opacity: 1;
    transform: scale(0.86);
    transition: transform .5s;
  }

  :active {
    color: ${({ color }) => `${color}`};
    opacity: 1;
    transform: scale(0.71);
  }
`

export default function SocialIcon({ icon, url, color }) {
  return (
    <li>
      <Wrapper color={color} href={url} target="_blank">
        <i className={`fab ${icon}`} />
      </Wrapper>
    </li>
  )
}
