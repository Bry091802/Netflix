import { imgPath } from '@/components/helpers/functions-general'
import { Bell, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener('scroll', () => setScrollPosition(window.scrollY));
    return window.removeEventListener('scroll', () => setScrollPosition(window.scrollY));
  }, [])

  console.log(scrollPosition);


  return (
  
                  <header className={`${scrollPosition > 200 ? "bg-black z-[999999999]" : "" } w-full bg-gradient-to-b from-black to-transparent py-5 px-10 
                  fixed top-0 left-0 transition-all`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-10">
                    <img src={`${imgPath}/logo.png`} alt="" className="w-[120px]"/>
                    <ul className="flex gap-5 text-white">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">TV Shows</Link></li>
                        <li><Link to="/">Movies</Link></li>
                        <li><Link to="/">News & Popular</Link></li>
                        <li><Link to="/">My List</Link></li>
                        <li><Link to="/">Browse By Language</Link></li>
                    </ul>
                    </div>
                    <ul className="flex items-center gap-5 text-white">
                        <li><Search/></li>
                        <li>Kids</li>
                        <li><Bell/></li>
                        <li  className="size-[30px] rounded-md bg-accent center-all text-white">BM</li>
                    </ul>
                </div>
            </header>
  
  )
}

export default Header