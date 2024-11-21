import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'

const TopMoviesItem = ({item, key}) => {
  return (
    <div className="top-movies-card" key={key}>
        <div className="container">        
            <div>
                <img src={`${imgPath}/${item.img}`} alt="" className="h-[500px] w-[500px]"/>
            </div>
        </div>


    </div>
  )
}

export default TopMoviesItem