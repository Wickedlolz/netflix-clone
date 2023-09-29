import {
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    updateDoc,
} from 'firebase/firestore';
import { db } from 'src/firebase.config';

export async function addToWatchlist(userEmail, showData) {
    const user = await getDoc(doc(db, 'users', userEmail));
    const isAdded = user.data().watchLater.find((m) => m.id === showData.id);

    if (isAdded) {
        const updatedList = user
            .data()
            .watchLater.filter((m) => m.id !== showData.id);

        await updateDoc(doc(db, 'users', userEmail), {
            watchLater: updatedList,
        });

        return false;
    } else {
        await updateDoc(doc(db, 'users', userEmail), {
            watchLater: arrayUnion(showData),
        });

        return true;
    }
}

export async function likeUnlike(userEmail, showId) {
    const user = await getDoc(doc(db, 'users', userEmail));
    const isLiked = user.data().likedShows.find((mid) => mid === showId);

    if (isLiked) {
        await updateDoc(doc(db, 'users', userEmail), {
            likedShows: arrayRemove(showId),
        });

        return false;
    } else {
        await updateDoc(doc(db, 'users', userEmail), {
            likedShows: arrayUnion(showId),
        });

        return true;
    }
}
