const API_KEY = process.env.REACT_APP_API_KEY;

export const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    requestMovieById: (movieId) =>
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
    requestMovieCredits: (movieId) =>
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    requestRecomendedMovies: (movieId) =>
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
    requestToken: `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`,
    requestLogin: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`,
    requestAccount: (token) =>
        `https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${token}`,
    requestSessionId: `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
    requestSignOut: `https://api.themoviedb.org/3/authentication/session?api_key=${API_KEY}`,
    requestAddToWatchlist: (accountId, sessionId) =>
        `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${API_KEY}&session_id=${sessionId}`,
    requestMarkAsFavorite: (accountId, sessionId) =>
        `https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`,
    requestMarvel: `https://api.themoviedb.org/3/list/1?api_key=${API_KEY}&language=en-US`,
    requestDisney: `https://api.themoviedb.org/3/list/5905?api_key=${API_KEY}&language=en-US`,
    requestUnexpectedHeroes: `https://api.themoviedb.org/3/list/7067606?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc`,
};
