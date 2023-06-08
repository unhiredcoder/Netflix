import React from 'react'
import Herosection from './component/Herosection'
import imageUrl from "../public/about1.svg"

const page = () => {
  return (
    <Herosection title={"Let\'s Watch movie together"} imageUrl={imageUrl}/>
  )
}

export default page