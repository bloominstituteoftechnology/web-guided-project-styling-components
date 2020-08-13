import React from 'react'

export default function Friend({ info, action }) {
  return (
    <div className='friend'>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </div>
  )
}
