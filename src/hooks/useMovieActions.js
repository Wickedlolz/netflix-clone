import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFirebaseContext } from 'src/context/FirebaseContext';
import { db } from 'src/firebase.config';
import { movieService } from 'src/services';
import { notify } from 'src/store/slices/notificationSlice';

export const useMovieActions = (movie) => {
    const dispatch = useDispatch();
    const { user } = useFirebaseContext();
    const [isLiked, setIsLiked] = useState(false);
    const [isInWatchList, setIsInWatchList] = useState(false);

    useEffect(() => {
        onSnapshot(doc(db, 'users', user.email), (doc) => {
            const isLiked = doc
                .data()
                ?.likedShows.find((mid) => mid === movie.id);
            const isInWatchList = doc
                .data()
                ?.watchLater.find((m) => m.id === movie?.id);

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
    }, [user, movie]);

    const handleLikeUnlike = async () => {
        const liked = await movieService.likeUnlike(user.email, movie.id);

        if (liked) {
            dispatch(
                notify({
                    message: `Successfully like ${movie.title}`,
                    type: 'success',
                })
            );
        } else {
            dispatch(
                notify({
                    message: `Successfully unlike ${movie.title}`,
                    type: 'success',
                })
            );
        }
    };

    const handleAddToWatchlist = async () => {
        try {
            const added = await movieService.addToWatchlist(user.email, movie);

            if (added) {
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

    return { isLiked, isInWatchList, handleLikeUnlike, handleAddToWatchlist };
};
