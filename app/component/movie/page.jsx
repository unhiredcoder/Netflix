"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styles from "../../styles/movie.module.css"
const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(Math.floor(Math.random() * 10) + 1);
  const [loading, setLoading] = useState();

  const fetchMovies = async (pageNumber) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const API_KEY = '1cf50e6248dc270629e802686245c2c8';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${pageNumber}`;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (response.ok) {
        return data.results;
      } else {
        console.log('Error:', data.status_message);
        return [];
      }
    } catch (error) {
      console.log('Error fetching movies:', error);
      return [];
    }
  };

  const fetchAdditionalMovies = async () => {
    if (loading) return;
    setLoading(true);

    const additionalMovies = await fetchMovies(currentPage);
    setMovies((prevMovies) => [...prevMovies, ...additionalMovies]);
    setCurrentPage((prevPage) => prevPage + 1);

    setLoading(false);
  };

  useEffect(() => {
    fetchAdditionalMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      if (scrollBottom >= documentHeight) {
        fetchAdditionalMovies();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchAdditionalMovies]);
  console.log(movies);
  return (
    <>
      <div className={styles['movies-container']}>
        {movies.map((movie) => (
          <div className={styles['movie-card']} key={movie.id}>
            {loading ? (
              <div className={styles['i']}></div>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                onLoad={() => {
                  setLoading(false);
                }}
                onError={() => {
                  setLoading(false);
                }}
                className={styles.img}
              />
            )}

            <div className={styles['movie-details']}>
              <h3>{movie.title}</h3>
              <p className={styles['p1']}>⭐ {movie.vote_average}</p>
              <p className={styles['p0']}>{movie.overview.slice(0, 200)}...</p>
              <div className={styles['stage']}>
                <Link href={`/component/movie/${movie.id}`} className={styles.a}>Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
            <path d="M 50,50 L 33,60.5 a 20 20 -210 1 1 34,0 z" fill="#fff">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.2s" repeatCount="indefinite" />
            </path>
            <circle cx="50" cy="50" r="16" fill="#343434"></circle>
          </svg>
        </div>
      )}
    </>
  );
};

export default Movie;
