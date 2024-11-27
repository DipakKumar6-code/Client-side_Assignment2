'use client';

import Link from "next/link";

import React from "react";
import { useSearch } from "../context/context";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { search, setSearch } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    router.push(`/search/${search}`);


    // const searchInput = e.target.elements["default-search"].value;
    // setSearch(searchInput);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-secondary bg-success">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand fs-4 fw-bold">
          Cineplex-Movies
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/contact"} className="nav-link">
                Contact 
              </Link>
            </li>
            <li onClick={console.log("clicked")} className="nav-item">
              <Link href={"/about"} className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/terms&conditions"} className="nav-link">
                Terms & Conditions 
              </Link>
            </li>
            
          </ul>
          <form className="d-flex ms-auto"  onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search movies"
              aria-label="Search"
              name="default-search"

              value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
