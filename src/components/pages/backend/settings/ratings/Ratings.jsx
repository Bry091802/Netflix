import { Archive, ArchiveRestore, FilePenLine, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import TableLoader from '../../partials/TableLoader'
import IconNoData from '../../partials/IconNoData'
import Pills from '../../partials/Pills'
import { StoreContext } from '@/components/store/storeContext'
import { setIsAdd, setIsConfirm, setIsDelete } from '@/components/store/storeAction'
import ModalDelete from '../../partials/modals/ModalDelete'
import ModalConfirm from '../../partials/modals/ModalConfirm'

const Ratings = () => {
    const {store, dispatch} = React.useContext(StoreContext);

const handleDelete = () => {
    dispatch(setIsDelete(true));
};
const handleRestore = () => {
    dispatch(setIsConfirm(true));
};
const handleArchive = () => {
    dispatch(setIsConfirm(true));
};

const handleAdd = () => {
    dispatch(setIsAdd(true));
};
  return (
    <>
                       <div className="bg-secondary p-4 mt-5 border border-line rounded-md">
                       <button className="btn btn-add" onClick={() => handleAdd()}><Plus size={16}/>Add New</button>
                       <div className="table-wrapper custom-scroll mt-5">
                            {/* <TableLoader count={1} cols={4}/> */}
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Status</th>
                                        <th className='w-[30%]'>Ratings</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                        <td colSpan={100}>
                                            <IconNoData/>
                                           
                                        </td>
                                    </tr>
                                    <tr>
                                    <td colSpan={100}>
                                        <IconServerError/>
                                        </td>
                                    </tr> */}
                                {Array.from(Array(10).keys()).map((i) => (
                                <tr key={i}>
                                    <td>{i + 1}.</td>
                                    <td><Pills/></td>
                                    <td>Comedy</td>
                                    <td>
                                        <ul className="table-action">
                                            {true ? 
                                            (<>                                         
                                                <li><button className="tooltip" data-tooltip="Edit" onClick={() => handleAdd()}><FilePenLine /></button></li>
                                                <li><button className="tooltip" data-tooltip="Archive" onClick={() => handleArchive()}><Archive /></button></li>
                                            </>) : 
                                            (<>
                                            <li><button className="tooltip" data-tooltip="Restore"onClick={() => handleRestore()}><ArchiveRestore /></button></li>
                                            <li><button className="tooltip" data-tooltip="Delete" onClick={() => handleDelete()}><Trash2 /></button></li>
                                            </>)}
                                            

                                           


                                        </ul>
                                    </td> 
                                </tr>
                                ))}
                                    

                                </tbody>
                            </table>
                        </div>
                        </div>
                        {store.isDelete && <ModalDelete/>}
                        {store.isConfirm && <ModalConfirm/>}
    </>
  )
}

export default Ratings