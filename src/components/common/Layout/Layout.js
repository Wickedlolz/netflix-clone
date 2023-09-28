import { useSelector, useDispatch } from 'react-redux';
import { hide } from '../../../store/slices/modalSlice';

import TrailerModal from '../../TrailerModal/TrailerModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notification from '../Notification/Notification';

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
            <main>{{ ...children }}</main>
            <Notification />
            <Footer />
        </>
    );
}

export default Layout;
