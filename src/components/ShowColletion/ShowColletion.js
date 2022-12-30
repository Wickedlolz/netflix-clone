import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import Carousel from 'react-multi-carousel';
import Spinner from '../common/Spinner/Spinner';
import ShowItem from '../ShowItem/ShowItem';
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';

function ShowColletion({ fetchUrl, title }) {
    const navigation = useNavigate();
    const { isLoading, error, data } = useQuery(`${title}Data`, () => {
        return fetch(fetchUrl).then((res) => res.json());
    });

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
                    {data.results &&
                        data.results.map((show) => (
                            <ShowItem key={show.id} show={show} />
                        ))}
                    {data.items &&
                        data.items.map((show) => (
                            <ShowItem key={show.id} show={show} />
                        ))}
                </Carousel>
            )}
        </Container>
    );
}

export default ShowColletion;

const Container = styled.article``;

const Title = styled.h3`
    padding-left: 20px;
`;
