import React from 'react'
import Hero from '../Components/Hero/Hero'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Features from '../Components/Features/Features'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Features/>

     
      {/* <Popular/>
      <Offers/>
      <NewCollections/> */}
      
      <NewsLetter/>
    </div>
  )
}

export default Shop
