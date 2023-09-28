import { useQuery } from 'react-query';
import { requests } from 'src/utils/requests';

export const useMovieDetails = (movieId) => {
    const {
        isLoading,
        error,
        data: movie,
    } = useQuery(['movieDetails', movieId], () => {
        return fetch(requests.requestMovieById(movieId)).then((res) =>
            res.json()
        );
    });

    const movieCredits = useQuery(['movieCredits', movieId], () => {
        return fetch(requests.requestMovieCredits(movieId)).then((res) =>
            res.json()
        );
    });

    const recomemndedMovies = useQuery(['recomemndedMovies', movieId], () => {
        return fetch(requests.requestRecomendedMovies(movieId)).then((res) =>
            res.json()
        );
    });

    return {
        isLoading,
        error,
        movie,
        movieCredits,
        recomemndedMovies,
    };
};
