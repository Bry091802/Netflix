import React from 'react'
import ModalWrapper from '../partials/modals/ModalWrapper'
import { imgPath } from '@/components/helpers/functions-general'
import { Play, Plus, ThumbsUp, X } from 'lucide-react'

const ModalViewMovie = () => {
  return (
    <>
        <ModalWrapper>
        <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 max-w-[800px] w-full rounded-md border border-line">

            <div className="modal-banner relative">
                <img src={`${imgPath}/fight.avif`} alt="" className='h-[350px] w-full object-cover'/>
                <div className="absolute bottom-6 left-6 z-40">
                    <h3 className='mb-3'>Chainsaw Man</h3>
                    <ul className="flex gap-2">
                        <li><button className="flex gap bg-dark px-4 py-1.5 rounded-md text-light font-bold"><Play fill='text-light'/>Play</button></li>
                        <li><button className='size-[40px] center-all rounded-full border-[1px] border-dark bg-light bg-opacity-40'><Plus size={18} strokeWidth='2'/></button></li>
                        <li><button className='size-[40px] center-all rounded-full border-[1px] border-dark bg-light bg-opacity-40'><ThumbsUp size={18} strokeWidth='2'/></button></li>
                    </ul>
                </div>
                <div className="tint absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black to-transparent"></div>
                <button className='absolute top-3 right-3 size-[35px] center-all text-dark bg-light rounded-full'><X/></button>
            </div>

            <div className="modal-body p-4">
                <div className='grid grid-cols-[1fr_,250px] gap-5'>
                    <div>
                        <ul className='flex gap-3 items-center text-xs mb-3'>
                            <li>2023</li>
                            <li>1hr 50mins</li>
                            <li className='border-[1px] border-dark py-[0.5px] px-1.5 text-[9px]'>HD</li>
                        </ul>
                        <p className='text-xs leading-relaxed'>
                        After being left for dead, Denji turns into a devil-human hybrid with chainsaw powers, and gets recruited into a governmental devil hunting agency.
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <p className='text-xs leading-relaxed'><span className='opacity-60'>Cast:</span> Kikunosuke Toya, Shiori Izawa, Tomori Kusunoki</p>
                        <p className='text-xs leading-relaxed'><span className='opacity-60'>Genre:</span> Anime</p>
                    </div>
                </div>
            </div>

            <div className="modal-more p-4">
                <div className="grid grid-cols-3 gap-5">
                    {Array.from(Array(3).keys()).map((i)=>(                    
                        <div className="card relative rounded-md overflow-hidden">
                        <div className='relatve'>
                        <img src={`${imgPath}/hitman.jpg`} alt="" className="w-full object-cover h-[120px]"/>
                        <div className="tint bg-gradient-to-b from-[rgba(0,0,0,0.7)] to bg-transparent absolute top-0 left-0 w-full h-full"></div>
                        <p className='absolute top-3 right-3 z-40'>1h 50mins</p>
                        </div>
                        <div className='p-4 bg-secondary'>
                            <div className='flex justify-between items-center mb-5'>
                        <ul className='flex gap-3 items-center text-xs'>
                            <li>2023</li>
                            <li className='border-[1px] border-dark py-[0.5px] px-1.5 text-[9px]'>HD</li>
                        </ul>
                        <button className='size-[50px] rounded-full border-[1px] border-dark center-all'><Plus/></button>
                        </div>
                        <p className='text-xs leading-relaxed text-balance'>Professional killer Gary Johnson breaks protocol to help a desperate woman 
                        trying to flee an abusive husband and finds himself falling for her.</p>
                        </div>
                    </div>
                ))}

                </div>
            </div>
        </div>
        </ModalWrapper>
    </>
  )
}

export default ModalViewMovie