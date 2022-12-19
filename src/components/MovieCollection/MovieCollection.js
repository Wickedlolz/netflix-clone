import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Carousel from 'react-multi-carousel';

import styled from 'styled-components';
import Spinner from '../common/Spinner/Spinner';
import MovieItem from '../MovieItem/MovieItem';
import 'react-multi-carousel/lib/styles.css';

function MovieCollection({ fetchUrl, title }) {
    const navigation = useNavigate();
    const { isLoading, error, data } = useQuery(`${title}Data`, () =>
        fetch(fetchUrl).then((res) => res.json())
    );

    if (error) {
        // TODO!: Show error in notification
        return navigation('/');
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
                    {data.results.map((movie) => (
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
