'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Results from './Results';
const API_KEY = "76524c646e5fee3a1b1d217d809e2aa9";

export default function Default() {
  const [results, setResults] = useState([]);
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre') || 'fetchTrending';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3${
          genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      setResults(data.results);
    };

    fetchData();
  }, [genre]);

  const handleDelete = (id) => {
    setResults((prevResults) => prevResults.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <Results results={results} onDelete={handleDelete} />
    </div>
  );
}


