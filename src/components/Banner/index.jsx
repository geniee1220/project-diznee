import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../../api/request';

import * as S from './Banner.styles';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);

    console.log(response);
    // 이미지 배너 랜덤 출력
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: {
        append_to_response: 'videos',
      },
    });
    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  if (isClicked) {
    return (
      <>
        <S.Container>
          <S.HomeContainer>
            <S.Iframe
              src={`https://www.youtube.com/embed/${movie?.videos?.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie?.videos?.results[0].key}`}
              allow="autoplay"
            ></S.Iframe>
          </S.HomeContainer>
          <button onClick={() => setIsClicked(false)}>X</button>
        </S.Container>
      </>
    );
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div style={{ fontSize: 10 }} className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className="banner__buttons">
            {movie?.videos?.results[0]?.key && (
              <button
                className="banner__button play"
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
            )}
          </div>
          <p className="banner__description">{truncate(movie.overview, 150)}</p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  }
}

export default Banner;
