import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const StyledFriend = styled.div`
  // --------- pulled from CSS file and misc
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;

  // --------- pulling data from the theme
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white};

  // --------- using media queries and the theme
  @media ${pr => pr.theme.breakpointMobile} {
    width: initial;
  }
  
  // --------- using ampersand, pseudo-classes and transition
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${pr => pr.theme.secondaryColor};
  }

  // --------- using pseudo-elements
  &::before {
    content: "${pr => pr.besty ? '💚' : '😀'}";
  }

  // --------- nesting rules
  button {
    background-color: ${pr => pr.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
    }
  }

  // --------- transitions and animations
  transform: scale(2); // start of animation
  opacity: 0; // start of animation
  animation: ${kf} 0.3s ease-in-out forwards;
`

export default function Friend({ info, action, besty}) {
  return (
    <StyledFriend besty={besty}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
