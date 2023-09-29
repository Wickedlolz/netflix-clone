import { useQuery } from 'react-query';
import { requests } from 'src/utils/requests';

export const useShowDetails = (showId) => {
    const showData = useQuery(['showDetails', showId], () => {
        return fetch(requests.requestShowById(showId)).then((res) =>
            res.json()
        );
    });

    const showCredits = useQuery(['showCredits', showId], () => {
        return fetch(requests.requestShowCredits(showId)).then((res) =>
            res.json()
        );
    });

    const recomemndedShows = useQuery(['recomemndedShows', showId], () => {
        return fetch(requests.requestRecomendedShows(showId)).then((res) =>
            res.json()
        );
    });

    return { showData, showCredits, recomemndedShows };
};
