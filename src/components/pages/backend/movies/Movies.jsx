import { Archive, ArchiveRestore, FilePenLine, FileVideo, Plus, Trash2 } from 'lucide-react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import Pills from '../partials/Pills';
import SearchBar from '../partials/SearchBar';
import SideNavigation from '../partials/SideNavigation';
import ModalDelete from '../partials/modals/ModalDelete';
import ModalConfirm from '../partials/modals/ModalConfirm';
import ModalValidation from '../partials/modals/ModalValidation';
import ModalError from '../partials/modals/ModalError';
import ToastSucess from '../partials/ToastSucess';
import LoadMore from '../partials/LoadMore';
import SpinnerWindow from '../partials/spinners/SpinnerWindow';
import SpinnerTable from '../partials/spinners/SpinnerTable';
import TableLoader from '../partials/TableLoader';
import IconNoData from '../partials/IconNoData';
import IconServerError from '../partials/IconServerError';
import ModalAddMovie from './ModalAddMovie';
import MoviesTable from './MoviesTable';
import ModalViewMovie from './ModalViewMovie';

const Movies = () => {
  return (
    <>
        <section className="layout-main">
            <div className="layout-div">
                    <SideNavigation />
                <main>

                    <Header />
                    <div className="p-8">
                        <div className="flex justify-between items-center">
                            <SearchBar/>
                            <button className="btn btn-add">
                            <Plus size={16}/>Add New    
                            </button>
                        </div>
                        <MoviesTable/>
                    </div>

                        <Footer />
                </main>
            </div>
        </section>
        {/* <ModalDelete/> */}
        {/* <ModalConfirm/> */}
        {/* <ModalValidation/> */}
        {/* <ModalError/> */}
        {/* <ToastSucess/> */}
        {/* <SpinnerWindow/> */}
        {/* <ModalAddMovie/> */}
        <ModalViewMovie/>
    </>
  );
};

export default Movies