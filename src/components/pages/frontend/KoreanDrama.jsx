import React from 'react'
import Slider from 'react-slick';
import TopMoviesItem from './TopMoviesItem';

const KoreanDrama = () => {

    const koreanDramaArray = [
        {
            img: "k-1.jpg"
        },
        {
            img: "k2.jpg"
        },
        {
            img: "k-3.jpg"
        },
        {
            img: "k-4.jpg"
        },
        {
            img: "k-5.jpg"
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
                    <h2>Korean Drama</h2>
            </div>
                <div className="movies-slider">
                        <Slider {...settings}>
    
                             {koreanDramaArray.map((item, key) => (
                                <TopMoviesItem item={item} key={key}/>
                             ))}
    
                        </Slider>
                </div>
            </div>
        </div>
      )
}

export default KoreanDrama