# Netflix Clone

### Technologies and libs:

-   <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react" width="12" heigth="12" /> [React](https://reactjs.org/)
-   <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" width="12" heigth="12" alt="redux" /> [Redux](https://redux.js.org/)
-   <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" width="12" heigth="12" alt="styled components" /> [Styled Components](https://styled-components.com/)
-   <img src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png" width="12" heigth="12" alt="react query" /> [React Query](https://react-query-v3.tanstack.com/)
-   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9Fvp8DY7d_F5_R4psAw2Nk_ks9PRVpOr_zMhPf4HVw&s" width="12" heigth="12" alt="react hook form" /> [react-hook-form](https://react-hook-form.com/)
-   <img src="https://i.imgur.com/c9pjXpW.jpeg" width="12" heigth="12" alt="react multi carousel" /> [react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)
-   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96UvaEAOHFysZ6Bm7yOC9ir12aQzNK20IWxWPZmSbdrtL09_lplIIHsRWsY1xygcL2BU&usqp=CAU" width="12" heigth="12" alt="react player" /> [react-player](https://www.npmjs.com/package/react-player)
-   <img src="https://mui.com/static/logo.png" width="12" heigth="12" alt="material ui" /> [Material UI](https://mui.com/)
-   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/2560px-Tmdb.new.logo.svg.png" width="12" heigth="12" alt="tmdb" /> [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
-   <img src="https://miro.medium.com/max/600/1*t4Em-3T6FZqHzZxxUH22wg.jpeg" width="12" heigth="12" alt="react helmet async" /> [React Helmet Async](https://github.com/staylor/react-helmet-async#readme)

### Responsive Design

-   Using Desktop first approach

## Descripiton

Application consuming entirely [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction). Every add to watchlist or mark as favourite affect to your real account, for example you add some movie in your watch list in application you will see it in My List page and in [TMDB Site](https://www.themoviedb.org/) where you logged with the same account you can see the same movie where you add in watchlist in this application.

If you don't have account in application when click sign up will redirect you to [TMDB Site](https://www.themoviedb.org/) to make account, after you finish registration back to application and sign in with your new account.

`NOTE: You can mark as favourite but cannot reverse, API not have endpoint for this action.`

## TODO

-   [ ] Finish responsive design
-   [ ] Add unit tests
-   [ ] Add CI for unit tests
-   [ ] Add search functionality
-   [x] Add mark as favourite for show

## Live [Demo](https://netflix-clone-taupe-one.vercel.app/)

## How to run it manually?

1.  Clone repo where you want.
2.  Go to root folder of repo and `npm install` or `yarn install` for installing all dependacyes.
3.  Run `npm start` to run application in dev mode, app will open automatically new tab in your browser.
