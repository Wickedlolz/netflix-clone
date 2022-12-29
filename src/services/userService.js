import { requests } from '../utils/requests';

export const getAccount = async (sessionId) => {
    const res = await fetch(requests.requestAccount(sessionId));
    const user = await res.json();
    return user;
};

export const createSession = async (requestToken) => {
    const res = await fetch(requests.requestSessionId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ request_token: requestToken }),
    });

    const data = await res.json();

    if (data.failure) {
        throw new Error(data.status_message);
    }

    return data.session_id;
};

export const signOut = async (sessionToken) => {
    const response = await fetch(requests.requestSignOut, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: sessionToken }),
    });

    return await response.json();
};
