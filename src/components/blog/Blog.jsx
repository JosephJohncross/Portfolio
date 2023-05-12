import React from 'react'
import comingSoon from  "../../assets/images/coming soon.svg"

const Blog = () => {
  return (
    <>
        <div className='absolute bg-black flex justify-center items-center top-0 left-0 right-0 bottom-0 pr-16 ipad:pr-0'>
            <img src={comingSoon} alt=''/>
        </div>
    </>
  )
}

export default Blog