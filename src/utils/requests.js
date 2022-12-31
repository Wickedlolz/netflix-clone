const API_KEY = process.env.REACT_APP_API_KEY;

const baseUrl = 'https://api.themoviedb.org/3';

export const requests = {
    requestPopular: `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestTrending: `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
    requestNowPlaying: `${baseUrl}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    requestUpcoming: `${baseUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    requestMovieById: (movieId) =>
        `${baseUrl}/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
    requestMovieCredits: (movieId) =>
        `${baseUrl}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    requestRecomendedMovies: (movieId) =>
        `${baseUrl}/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
    requestToken: `${baseUrl}/authentication/token/new?api_key=${API_KEY}`,
    requestLogin: `${baseUrl}/authentication/token/validate_with_login?api_key=${API_KEY}`,
    requestAccount: (token) =>
        `${baseUrl}/account?api_key=${API_KEY}&session_id=${token}`,
    requestSessionId: `${baseUrl}/authentication/session/new?api_key=${API_KEY}`,
    requestSignOut: `${baseUrl}/authentication/session?api_key=${API_KEY}`,
    requestAddToWatchlist: (accountId, sessionId) =>
        `${baseUrl}/account/${accountId}/watchlist?api_key=${API_KEY}&session_id=${sessionId}`,
    requestMarkAsFavorite: (accountId, sessionId) =>
        `${baseUrl}/account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`,
    requestMarvel: `${baseUrl}/list/1?api_key=${API_KEY}&language=en-US`,
    requestDisney: `${baseUrl}/list/5905?api_key=${API_KEY}&language=en-US`,
    requestUnexpectedHeroes: `${baseUrl}/list/7067606?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc`,
    requestPopularTvShows: `${baseUrl}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopRatedTvShows: `${baseUrl}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestOnTheAirTvShows: `${baseUrl}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
    requestAiringTodayTvShows: `${baseUrl}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    requestShowById: (showId) =>
        `${baseUrl}/tv/${showId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
    requestShowCredits: (showId) =>
        `${baseUrl}/tv/${showId}/credits?api_key=${API_KEY}&language=en-US`,
    requestRecomendedShows: (showId) =>
        `${baseUrl}/tv/${showId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
};
