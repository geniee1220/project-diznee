import { useState, useEffect, useCallback } from 'react';
import instance from '../../api/axios';

import MovieModal from '../Modal/MovieModal';

import './Row.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function Row({ title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  // 영화 데이터 가져오기
  const fetchMovieData = useCallback(async () => {
    const response = await instance.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleModalClick = (movie) => {
    setIsModalOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div
          className="slider__arrow-left"
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <span className="arrow">
            <RiArrowLeftSLine />
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => {
                handleModalClick(movie);
              }}
            />
          ))}
        </div>
        <div
          className="slider__arrow-right"
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <span className="arrow">
            <RiArrowRightSLine />
          </span>
        </div>
      </div>
      {isModalOpen && (
        <MovieModal {...selectedMovie} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default Row;
