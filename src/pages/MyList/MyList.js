import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFirebaseContext } from 'src/context/FirebaseContext';
import { useQuery } from 'react-query';
import { movieService } from 'src/services';
import { notify } from 'src/store/slices/notificationSlice';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import Billboard from '../../components/Billboard/Billboard';
import Spinner from 'src/components/common/Spinner/Spinner';
import Carousel from 'react-multi-carousel';
import { SMALL_IMAGE_URL } from 'src/utils/constants';

function MyList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useFirebaseContext();
    const { isLoading, error, data } = useQuery({
        queryKey: 'myList',
        queryFn: async () =>
            (await movieService.getAllWatchLater(user.email)).data().watchLater,
    });

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        dispatch(notify({ message: error.message, type: 'error' }));
        navigate('/home');
    }

    return (
        <Container>
            <Helmet>
                <title>My List | Netflix</title>
            </Helmet>
            <Billboard title="My List" />
            {!isLoading && (
                <Carousel
                    arrows
                    containerClass="carousel-container"
                    draggable
                    infinite
                    centerMode={true}
                    itemClass="carousel-item"
                    keyBoardControl
                    minimumTouchDrag={80}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024,
                            },
                            items: 4,
                            partialVisibilityGutter: 40,
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0,
                            },
                            items: 1,
                            partialVisibilityGutter: 30,
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464,
                            },
                            items: 2,
                            partialVisibilityGutter: 30,
                        },
                    }}
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                >
                    {data &&
                        data.map((movie) => (
                            <CardContainer
                                to={`/${movie.title ? 'movie' : 'show'}/${
                                    movie.id
                                }`}
                            >
                                <CardImage
                                    loading="lazy"
                                    src={`${SMALL_IMAGE_URL}${
                                        movie?.backdrop_path ||
                                        movie?.poster_path
                                    }`}
                                    alt={movie?.title || movie?.original_title}
                                />
                                <CardTitle>
                                    {movie?.title ||
                                        movie?.original_title ||
                                        movie.name}
                                </CardTitle>
                            </CardContainer>
                        ))}
                </Carousel>
            )}
        </Container>
    );
}

export default MyList;

const Container = styled.section`
    color: #fff;
`;

const CardContainer = styled(Link)`
    color: #fff;
    text-decoration: none;
    width: 100%;

    &:hover {
        div,
        h3 {
            opacity: 1;
        }
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
`;

const CardTitle = styled.h3`
    text-align: center;
    font-size: 1rem;
    overflow: hidden;
`;
