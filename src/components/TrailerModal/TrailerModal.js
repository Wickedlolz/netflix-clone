import { useState } from 'react';
import MuiModal from '@mui/material/Modal';
import ReactPlayer from 'react-player/lazy';

import styled from 'styled-components';

function TrailerModal({ open, handleCloseModal, videos }) {
    const [play, setPlay] = useState(true);
    const [muted, setMuted] = useState(true);

    const index = videos?.results?.findIndex((x) => x.type === 'Trailer');

    const handlePlayClick = () => setPlay(true);
    const handlePauseClick = () => setPlay(false);

    const handleMuteClick = () => setMuted(true);
    const handleUnMuteClick = () => setMuted(false);

    return (
        <MuiModal open={open} onClose={handleCloseModal}>
            <Container>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videos.results[index]?.key}`}
                    // url={'https://www.youtube.com/watch?v=_Z3QKkl1WyM'}
                    playing={play}
                    width="100%"
                    height="100%"
                    muted={muted}
                />
                <CloseButton onClick={handleCloseModal}>
                    <i className="fa-solid fa-xmark"></i>
                </CloseButton>
                <Actions>
                    {play ? (
                        <PlayPauseButton onClick={handlePauseClick}>
                            <i className="fa-solid fa-pause"></i>
                        </PlayPauseButton>
                    ) : (
                        <PlayPauseButton onClick={handlePlayClick}>
                            <i className="fa-solid fa-play"></i>
                        </PlayPauseButton>
                    )}

                    {muted ? (
                        <VolumeButton onClick={handleUnMuteClick}>
                            <i className="fa-solid fa-volume-high"></i>
                        </VolumeButton>
                    ) : (
                        <VolumeButton onClick={handleMuteClick}>
                            <i className="fa-solid fa-volume-xmark"></i>
                        </VolumeButton>
                    )}
                </Actions>
            </Container>
        </MuiModal>
    );
}

export default TrailerModal;

const Container = styled.section`
    position: relative;
    width: 70%;
    height: 600px;
    margin: 100px auto;
    border-radius: 14px;
    overflow: hidden;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    border-radius: 50%;
    padding: 5px 13px;
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    font-size: 18px;
    cursor: pointer;
`;

const Actions = styled.div`
    position: absolute;
    left: 40px;
    bottom: 20px;
`;

const PlayPauseButton = styled.button`
    padding: 5px 40px;
    font-size: 18px;
    border-radius: 14px;
    cursor: pointer;
`;

const VolumeButton = styled.button`
    padding: 5px 35px;
    margin-left: 10px;
    font-size: 18px;
    border-radius: 14px;
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    cursor: pointer;
`;
