import { useSelector, useDispatch } from 'react-redux';
import { hide } from '../../../features/modal/modalSlice';

import TrailerModal from '../../TrailerModal/TrailerModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout({ children }) {
    const open = useSelector((state) => state.modal.open);
    const videos = useSelector((state) => state.modal.videos);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(hide());
    };

    return (
        <>
            <Header />
            <TrailerModal
                open={open}
                handleCloseModal={handleCloseModal}
                videos={videos}
            />
            {{ ...children }}
            <Footer />
        </>
    );
}

export default Layout;
