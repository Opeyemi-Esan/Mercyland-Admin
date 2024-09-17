import React from 'react'
import HomeSlider from '../Homehelp/HomeSlider'
import OurEstate from '../Homehelp/OurEstate'
import VideoAds from '../Homehelp/VideoAds'
import FeaturedProp from '../Homehelp/FeaturedProp'
import OurServices from '../Homehelp/OurServices'
import ApiTest from "../Homehelp/ApiTest";

function Home() {
  return (
    <div className='flex flex-wrap gap-10 py-10'>
      <HomeSlider />
      <OurServices />
      <VideoAds />
      <FeaturedProp />
      <OurEstate />
      <ApiTest />
    </div>
  )
}

export default Home
