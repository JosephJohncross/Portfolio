import React from 'react'

export const Tooltip = ({text}) => {
  return (
    <span className='absolute -bottom-1 right-3 rounded-md p-2 bg-black/25 text-pgreen'>
        {text}
    </span>
  )
}
