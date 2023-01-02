import { requests } from '../utils/requests';

export async function addToWatchlist(accountId, sessionId, showId) {
    const response = await fetch(
        requests.requestAddToWatchlist(accountId, sessionId),
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                media_type: 'tv',
                media_id: showId,
                watchlist: true,
            }),
        }
    );

    const data = await response.json();

    return data;
}
