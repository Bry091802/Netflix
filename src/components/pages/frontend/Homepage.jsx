import React from 'react'
import Header from './Header'
import Banner from './Banner'
import TopMovies from './TopMovies'
import KoreanDrama from './KoreanDrama'


const Homepage = () => {
  return (
    <>
    <Header/>
    <Banner
    img="chainsaw.webp"
    header="Chainsaw Man"
    subheader="After being left for dead, Denji turns into a devil-human hybrid with chainsaw powers, and gets recruited into a governmental devil hunting agency."
    cast="Starring: Kikunosuke Toya, Shiori Izawa, Tomori Kusunoki"
    />
    <TopMovies/>
    <KoreanDrama/>
    </>
  )
}

export default Homepage
