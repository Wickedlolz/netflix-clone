const baseUrl = 'https://';

export const getMovies = () =>
    fetch(baseUrl, { credentials: 'include' }).then((res) => res.json());
