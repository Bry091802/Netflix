import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopMoviesItem from './TopMoviesItem';
import Slider from 'react-slick';

const TopMovies = () => {

 const topMoviesArray = [
    {
        img: "avengers.jpg"
    },
    {
        img: "dragon.jpg"
    },
    {
        img: "tybw.jpg"
    },
    {
        img: "solo-leveling.jpg"
    },
    {
        img: "hitman.jpg"
    },
    {
        img: "f&f.jpg"
    },
 ]

 var settings = {
    dots: false,
    infinite: true,
    autoplayspeed: 1500,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 3,
 };


  return (
    <div className='py-20 bg-secondary'>
        <div className="container">
        <div className='mb-8 ml-4 text-white'>
                <h2>Top Movies</h2>
        </div>
            <div className="movies-slider gap-5">
                    <Slider {...settings}>

                         {topMoviesArray.map((item, key) => (
                            <TopMoviesItem item={item} key={key}/>
                         ))}

                    </Slider>
            </div>
        </div>
    </div>
  )
}

export default TopMovies