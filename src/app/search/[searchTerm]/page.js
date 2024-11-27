
// "use client";

// import Results from "../../components/Results";
// import { useState, useEffect } from "react";

// const API_KEY = "76524c646e5fee3a1b1d217d809e2aa9";

// export default function SearchPage({ params: paramsPromise }) {
//   const [searchTerm, setSearchTerm] = useState(null); // State for unwrapped params
//   const [results, setResults] = useState([]); // State for search results
//   const [error, setError] = useState(null); // State for error handling

//   // Unwrap params and set searchTerm
//   useEffect(() => {
//     let isMounted = true; // To prevent state updates on unmounted component

//     paramsPromise
//       .then(({ searchTerm }) => {
//         if (isMounted) setSearchTerm(searchTerm);
//       })
//       .catch((err) => {
//         console.error("Failed to unwrap params:", err);
//         if (isMounted) setError("Failed to load search parameters.");
//       });

//     return () => {
//       isMounted = false;
//     };
//   }, [paramsPromise]);

//   // Fetch results based on searchTerm
//   useEffect(() => {
//     if (!searchTerm) return;

//     const fetchResults = async () => {
//       try {
//         const res = await fetch(
//           `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
//             searchTerm
//           )}&language=en-US&page=1&include_adult=false`
//         );
//         if (!res.ok) throw new Error("Failed to fetch data");
//         const data = await res.json();
//         setResults(data.results || []);
//       } catch (err) {
//         console.error("Error fetching search results:", err);
//         setError("Failed to fetch search results. Please try again later.");
//       }
//     };

//     fetchResults();
//   }, [searchTerm]);

//   // Delete handler for removing items from results
//   const handleDelete = (id) => {
//     setResults((prevResults) => prevResults.filter((movie) => movie.id !== id));
//   };

//   if (error) {
//     return <h1 className="text-center text-danger">{error}</h1>;
//   }

//   return (
//     <div>
//       {!results.length && !error && (
//         <h1 className="text-center pt-6 text-danger">
//           No movies found! Please check your input and try again.
//         </h1>
//       )}
//       {results.length > 0 && (
//         <Results results={results} onDelete={handleDelete} />
//       )}
//     </div>
//   );
// }

"use client";

import Results from "../../components/Results";
import { useState, useEffect } from "react";

const API_KEY = "76524c646e5fee3a1b1d217d809e2aa9";

export default function SearchPage({ params: paramsPromise }) {
  const [searchTerm, setSearchTerm] = useState(null); // State for unwrapped params
  const [results, setResults] = useState([]); // State for search results
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Unwrap params and set searchTerm
  useEffect(() => {
    let isMounted = true; // To prevent state updates on unmounted component

    paramsPromise
      .then(({ searchTerm }) => {
        if (isMounted) setSearchTerm(searchTerm);
      })
      .catch((err) => {
        console.error("Failed to unwrap params:", err);
        if (isMounted) setError("Failed to load search parameters.");
      });

    return () => {
      isMounted = false;
    };
  }, [paramsPromise]);

  // Fetch results based on searchTerm
  useEffect(() => {
    if (!searchTerm) return;

    const fetchResults = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            searchTerm
          )}&language=en-US&page=1&include_adult=false`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setResults(data.results || []);
      } catch (err) {
        console.error("Error fetching search results:", err);
        setError("Failed to fetch search results. Please try again later.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchResults();
  }, [searchTerm]);

  // Delete handler for removing items from results
  const handleDelete = (id) => {
    setResults((prevResults) => prevResults.filter((movie) => movie.id !== id));
  };

  // Render error message if any
  if (error) {
    return <h1 className="text-center text-danger">{error}</h1>;
  }

  // Render loading spinner while fetching data
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Render results or "No movies found!" message
  return (
    <div>
      {results.length > 0 ? (
        <Results results={results} onDelete={handleDelete} />
      ) : (
        <h1 className="text-center pt-6 text-danger">
          No movies found! Please check your input and try again.
        </h1>
      )}
    </div>
  );
}
