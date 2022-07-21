import React from 'react'
import styled from "styled-components";

/**
 * .friend {
      width: 60%;
      display: flex;
      justify-content: space-between;
    }
 */

const StyledFriend = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 2px solid white;

    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.white};

    @media ${pr => pr.theme.breakpointMobile} {
      width: 100%;
    }

    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${pr => pr.theme.secondaryColor};
    }

    &::before {
      content: "${pr => pr.besty ? '💚' : '😀'}";
    }
`

export default function Friend({ info, action, besty }) {
  return (
    <StyledFriend className='friend' besty={besty}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
