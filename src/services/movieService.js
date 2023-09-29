import {
    doc,
    updateDoc,
    arrayUnion,
    getDoc,
    arrayRemove,
} from 'firebase/firestore';
import { requests } from '../utils/requests';
import { db } from 'src/firebase.config';

export async function addToWatchlist(userEmail, movieData) {
    const user = await getDoc(doc(db, 'users', userEmail));
    const isAdded = user.data().watchLater.find((m) => m.id === movieData.id);

    if (isAdded) {
        const updatedList = user
            .data()
            .watchLater.filter((m) => m.id !== movieData.id);

        await updateDoc(doc(db, 'users', userEmail), {
            watchLater: updatedList,
        });

        return false;
    } else {
        await updateDoc(doc(db, 'users', userEmail), {
            watchLater: arrayUnion(movieData),
        });

        return true;
    }
}

export async function likeUnlike(userEmail, movieId) {
    const user = await getDoc(doc(db, 'users', userEmail));
    const isLiked = user.data().likedShows.find((mid) => mid === movieId);

    if (isLiked) {
        await updateDoc(doc(db, 'users', userEmail), {
            likedShows: arrayRemove(movieId),
        });

        return false;
    } else {
        await updateDoc(doc(db, 'users', userEmail), {
            likedShows: arrayUnion(movieId),
        });

        return true;
    }
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
