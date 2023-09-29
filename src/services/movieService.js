import {
    doc,
    updateDoc,
    arrayUnion,
    getDoc,
    arrayRemove,
} from 'firebase/firestore';
import { db } from 'src/firebase.config';

export const getAllWatchLater = async (userEmail) => {
    return await getDoc(doc(db, 'users', userEmail));
};

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
