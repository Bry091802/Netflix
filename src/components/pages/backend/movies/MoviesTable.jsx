import React from 'react'
import TableLoader from '../partials/TableLoader'
import IconServerError from '../partials/IconServerError'
import Pills from '../partials/Pills'
import { Archive, ArchiveRestore, FilePenLine, FileVideo, Trash2 } from 'lucide-react'
import LoadMore from '../partials/LoadMore'
import IconNoData from '../partials/IconNoData'
import SpinnerTable from '../partials/spinners/SpinnerTable'

const MoviesTable = () => {
  return (
    <>
    <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
                            {/* <SpinnerTable/> */}
                        <div className="table-wrapper custom-scroll">
                            <TableLoader count={1} cols={4}/>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Status</th>
                                        <th className='w-[30%]'>Title</th>
                                        <th>Year</th>
                                        <th>Duration</th>
                                        <th>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={100}>
                                            <IconNoData/>
                                           
                                        </td>
                                    </tr>
                                    {/* <tr>
                                    <td colSpan={100}>
                                            
                                            <IconServerError/>
                                        </td>
                                    </tr> */}
                                {Array.from(Array(3).keys()).map((i) => (
                                <tr>
                                    <td>{i + 1}.</td>
                                    <td><Pills/></td>
                                    <td>Killer</td>
                                    <td>1998</td>
                                    <td>1hr 45mins</td>
                                    <td>
                                        <ul className="table-action">
                                            {true ? 
                                            (<>                                            
                                                <li><button className="tooltip" data-tooltip="View"><FileVideo /></button></li>
                                                <li><button className="tooltip" data-tooltip="Edit"><FilePenLine /></button></li>
                                                <li><button className="tooltip" data-tooltip="Archive"><Archive /></button></li>
                                            </>) : 
                                            (<>
                                            <li><button className="tooltip" data-tooltip="Restore"><ArchiveRestore /></button></li>
                                            <li><button className="tooltip" data-tooltip="Delete"><Trash2 /></button></li>
                                            </>)}
                                            

                                           


                                        </ul>
                                    </td> 
                                </tr>
                                ))}
                                    

                                </tbody>
                            </table>
                            <LoadMore/>
                        </div>
                        </div>
    </>
  )
}

export default MoviesTable