import React from 'react'
import { Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { imgPath } from '@/components/helpers/functions-general'

const Header = () => {
  return (
    <header className="bg-primary">
        <div className="container max-w-[1565px]">        
            <nav className="flex justify-between py-4 items-center text-white">
            <div className="flex gap-8 items-center">
                <img src={`${imgPath}/logo.png`} alt="" className="w-[100px] mx-auto"/>
                <ul className="flex gap-4">
                    <li><NavLink>TV Shows</NavLink></li>
                    <li><NavLink>Movies</NavLink></li>
                    <li><NavLink>Recently Added</NavLink></li>
                    <li><NavLink>My List</NavLink></li>
                </ul>
            </div>
            <div>
             <button><Search/></button>   
            </div>
        </nav>
        </div>

    </header>
  )
}

export default Header