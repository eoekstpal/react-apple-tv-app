import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components'
import axios from '../api/axios';
import requests from '../api/requests';
import "./Banner.css";

const Banner = () => {
    const [movie, setMovie] = useState(null);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        // 현재 상영중인 영화 정보를 가져오기 (여러영화)
        const response = await axios.get(requests.fetchNowPlaying);
        // 여러 영화 중 영화 하나의 ID 가져오기
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id

        // 특정 영화의 더 상세한 정보를 가져오기 (비디오 정보 포함)
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: {
                append_to_response: "videos"
            }
        })
        console.log(movieDetail);
        setMovie(movieDetail);
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + "..." : str
    }

    if (!movie) {
        return (
            <div>
                loading...
            </div>
        )
    }
    
    if (!isClicked) {
        return (
            <div
                className='banner'
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover'
                }}>
                <div className='banner_contents'>
                    <h1 className='banner_title'>
                        {movie.title || movie.name || movie.original_name}
                    </h1>
                    <div className='banner_buttons'>
                        {movie.videos?.results[0]?.key ?
                        <button
                            className='banner_button play'
                            onClick={() => setIsClicked(true)}>
                            Play
                        </button>
                        : null
                        }
                    </div>
                    <p className='banner_description'>
                        {truncate(movie.overview, 100)}
                    </p>
                </div>
                <div className='banner-fadeBottom' />
            </div>
        )
    }
        else {
        return(
            <>
                <Container>
                    <HomeContainer>
                        <Iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?control=0&autoplay=1&mute=1`}></Iframe>
                    </HomeContainer>
                </Container>
                <button onClick={() => setIsClicked(false)}>
                    Back
                </button>
            </>
        )
    }

}

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export default Banner