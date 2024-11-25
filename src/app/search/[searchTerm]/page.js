'use client';

import Results from "../../components/Results";
import { useState, useEffect } from "react";

const API_KEY = "76524c646e5fee3a1b1d217d809e2aa9";

export default function SearchPage({ params: paramsPromise }) {
  const [searchTerm, setSearchTerm] = useState(null); // State for unwrapped params
  const [results, setResults] = useState([]); // State for search results
  const [error, setError] = useState(null); // State for error handling

  // Unwrap params and set searchTerm
  useEffect(() => {
    paramsPromise
      .then(({ searchTerm }) => {
        setSearchTerm(searchTerm);
      })
      .catch((err) => {
        console.error("Failed to unwrap params:", err);
        setError("Failed to load search parameters.");
      });
  }, [paramsPromise]);

  // Fetch results based on searchTerm
  useEffect(() => {
    if (!searchTerm) return;

    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false;`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError("Failed to fetch search results. Please try again.");
      }
    };

    fetchResults();
  }, [searchTerm]);

  // Delete handler for removing items from results
  const handleDelete = (id) => {
    setResults((prevResults) => prevResults.filter((movie) => movie.id !== id));
  };

  if (error) {
    return <h1 className="text-center text-danger">{error}</h1>;
  }

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6 text-danger">No movies found! Please re-enter a right movie's name</h1>
      )}
      {results && results.length > 0 && (
        <Results results={results} onDelete={handleDelete} />
      )}
    </div>
  );
}