import { useEffect, useState } from 'react';
import { requests } from 'src/utils/requests';

export const useIsMovieLiked = (accountId, sessionId, movieId) => {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        fetch(requests.requestFavouriteMovies(accountId, sessionId))
            .then((res) => res.json())
            .then((result) => {
                const movie = result?.results?.some(
                    (x) => x.id.toString() === movieId
                );

                if (movie) {
                    setIsLiked(true);
                    return;
                }

                setIsLiked(false);
            })
            .catch((error) => console.error(error));
    }, [accountId, sessionId, movieId]);

    return isLiked;
};
