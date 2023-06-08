"use client"
import React, { useEffect, useState } from 'react';
import styles from "../../../styles/fullmovie.module.css"
import Loading from '../../../loading';
// import st from "../../../styles/movie.module.css"

const Page = ({ params }) => {
  const { id } = params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
      const BASE_URL = 'https://api.themoviedb.org/3';
      const API_URL = `${BASE_URL}/movie/${id}?${API_KEY}`;
      const response = await fetch(API_URL);
      const movieData = await response.json();
      setMovie(movieData);
    };

    fetchMovie();
  }, [id]);


  const handleImageLoad = () => {
    setLoading(false);
  };

  if (!movie) {
    return <Loading/>
  }

  const { title, poster_path, vote_average, overview, genres, tagline, revenue, production_countries, release_date, spoken_languages } = movie;

  return (
    <div className={styles['movies-container']}>
      <div className={styles['movie-card']}>
        {loading ? (
          <img
            src={'https://via.placeholder.com/335x500'}
            alt="Loading..."
            className={styles.img}
            onLoad={()=>handleImageLoad()}
          />
        ) : (
          <img
            src={'https://image.tmdb.org/t/p/w500' + poster_path}
            alt={title}
            className={styles.img}
          />
        )}
        <div className={styles['movie-details']}>
          <h1 className={styles.h1 + ' ' + styles.SHINE}>{title}</h1>
          {tagline && <p>{tagline}</p>}
          <p className={styles.p1}>⭐ {vote_average}</p> &nbsp;
          <p className={styles.p1}>📅 {release_date}</p>
          <ul className={styles.ul}>
            {genres.map((genre, index) => (
              <li className={styles.li} key={index}>
                🔹{genre.name}
              </li>
            ))}
          </ul>
          <div className={styles.revenue}>
            <div className={styles.hm + ' ' + styles.SHINE}>Revenue : </div>
            <span>${revenue.toLocaleString('en-US')}</span>
          </div>
          <div className={styles.lang}>
            <div className={styles.hm + ' ' + styles.SHINE}>Languages : </div> {spoken_languages.map((language, index) => (
              <React.Fragment key={index}>
                {language.english_name}
                {index !== spoken_languages.length - 1 ? ',' : null}
              </React.Fragment>
            ))}
          </div>
          <div className={styles.cont}>
            <div className={styles.hm + ' ' + styles.SHINE}>Production Countries : </div>{production_countries.map((country, index) => (
              <React.Fragment key={country.iso_3166_1}>
                {country.name}
                {index !== production_countries.length - 1 ? ',' : null}
              </React.Fragment>
            ))}
          </div>
          <div className={styles.hm + ' ' + styles.SHINE}>
            Description :
          </div>  <p className={styles.over}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
