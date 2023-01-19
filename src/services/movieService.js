import { requests } from '../utils/requests';

export async function addToWatchlist(accountId, sessionId, movieId) {
    const response = await fetch(
        requests.requestAddToWatchlist(accountId, sessionId),
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                media_type: 'movie',
                media_id: movieId,
                watchlist: true,
            }),
        }
    );

    const data = await response.json();

    return data;
}

export async function markAsFavourite(accountId, session_id, movieId) {
    const response = await fetch(
        requests.requestMarkAsFavorite(accountId, session_id),
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                media_type: 'movie',
                media_id: movieId,
                favorite: true,
            }),
        }
    );

    const data = await response.json();

    return data;
}
