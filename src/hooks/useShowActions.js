import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFirebaseContext } from 'src/context/FirebaseContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from 'src/firebase.config';
import { showService } from 'src/services';
import { notify } from 'src/store/slices/notificationSlice';

export const useShowActions = (show) => {
    const { user } = useFirebaseContext();
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    const [isInWatchList, setIsInWatchList] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'users', user.email), (doc) => {
            const isLiked = doc
                .data()
                ?.likedShows.find((mid) => mid === show?.id);
            const isInWatchList = doc
                .data()
                ?.watchLater.find((m) => m.id === show?.id);

            if (isLiked) {
                setIsLiked(true);
            } else {
                setIsLiked(false);
            }

            if (isInWatchList) {
                setIsInWatchList(true);
            } else {
                setIsInWatchList(false);
            }
        });

        return () => unsubscribe();
    }, [user, show]);

    const handleLikeUnlike = async () => {
        const liked = await showService.likeUnlike(user.email, show.id);

        if (liked) {
            dispatch(
                notify({
                    message: `Successfully like ${
                        show.name || show.original_name
                    }`,
                    type: 'success',
                })
            );
        } else {
            dispatch(
                notify({
                    message: `Successfully unlike ${
                        show.name || show.original_name
                    }`,
                    type: 'success',
                })
            );
        }
    };

    const handleAddToWatchlist = async () => {
        try {
            const isAdded = await showService.addToWatchlist(user.email, show);

            if (isAdded) {
                dispatch(
                    notify({
                        message: 'Successfully added to My List.',
                        type: 'success',
                    })
                );
            } else {
                dispatch(
                    notify({
                        message: 'Successfully removed from My List.',
                        type: 'success',
                    })
                );
            }
        } catch (error) {
            dispatch(
                notify({
                    message: error.message,
                    type: 'error',
                })
            );
        }
    };

    return { isLiked, isInWatchList, handleAddToWatchlist, handleLikeUnlike };
};
