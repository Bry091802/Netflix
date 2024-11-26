import React from 'react'
import Banner from './Banner'
import SliderMovie from './SliderMovie'
import filter from './../../../../../node_modules/lodash-es/filter';

const Homepage = () => {
  return (
    <div>
        <Banner />
        <div className="py-24 mt-20 bg-dark">
        <SliderMovie title="Anime" filter="Anime"/>
        <SliderMovie title="Internaional" filter="International"/>
        <SliderMovie title="KDrama" filter="KDrama"/>
        </div>


    </div>
  )
}

export default Homepage