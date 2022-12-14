import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'


const kf = keyframes`
100% {
  opacity: 1;
  transform scale(1) rotateZ(0);
  }
`
const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(2) rotatez(180deg);
  animation: ${kf} 0.5s ease-in-out forwards:
  background-color: ${props => props.color ? props.color : 'initial'};
  p {
    color: ${props => props.theme.tertiaryColor};
  }
  h2 {
    color: ${props => props.theme.primaryColor};
  }
`
export default function Details(props) {
  const { friendId, close, color } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/friends/${friendId}?api_key=${API_KEY}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger })
  }, [])

  return (
    <StyledDetails color={dolor} className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <button onClick={close}>Close</button>
    </StyledDetails>
  )
}
