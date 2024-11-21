import { imgPath } from '@/components/helpers/functions-general'
import { PlayIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Banner = ({img, header, subheader, cast}) => {
  return (
    <section>
        <div className="relative">
            <img src={`${imgPath}/${img}`} alt="" className="w-full max-h-[calc(100vh-74px)] object-cover"/>
            <div className="absolute top-[35%] left-[11%] text-white max-w-[350px]">
                <ul className="flex gap-2 items-center">
                    <li>2022</li>
                    <li>Anime</li>
                    <li>2h 45min</li>
                    <small className="text-[10px] border border-gray-500 py-[1px] px-[5px]">HD</small>
                </ul>
                <h1 className="my-4  whitespace-nowrap">{header}</h1>
                <p className="mb-4">{subheader}</p>
                <p className="mb-4">{cast}</p>
                <div className="flex gap-4">                
                <Link to="/" className="absolute bg-alert flex gap-3 py-1.5 px-3 rounded-md text-white items-center">
                    <PlayIcon fill='white' size={15}/> Play
                </Link>
                <Link to="/" className="absolute left-[30%] bg-gray-500 bg-opacity-20 flex gap-3 py-1.5 px-3 rounded-md text-white items-center">
                    More Info
                </Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Banner