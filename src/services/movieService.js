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
