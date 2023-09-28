import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { notify } from '../../store/slices/notificationSlice';
import Carousel from 'react-multi-carousel';

import styled from 'styled-components';
import Spinner from '../common/Spinner/Spinner';
import MovieItem from '../MovieItem/MovieItem';
import 'react-multi-carousel/lib/styles.css';

function MovieCollection({ fetchUrl, title }) {
    const dispatch = useDispatch();
    const { isLoading, error, data } = useQuery(`${title}Data`, () =>
        fetch(fetchUrl).then((res) => res.json())
    );

    if (error) {
        dispatch(
            notify({
                message: error.message,
                type: 'error',
            })
        );
    }

    return (
        <Container>
            {isLoading && <Spinner />}
            <Title>{title}</Title>
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
                    {data.results &&
                        data.results.map((movie) => (
                            <MovieItem key={movie.id} movie={movie} />
                        ))}
                    {data.items &&
                        data.items.map((movie) => (
                            <MovieItem key={movie.id} movie={movie} />
                        ))}
                </Carousel>
            )}
        </Container>
    );
}

export default MovieCollection;

const Container = styled.article``;

const Title = styled.h3`
    padding-left: 20px;
`;
