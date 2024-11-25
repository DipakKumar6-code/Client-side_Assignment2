"use client";

import Link from "next/link";
import React, {Suspense} from "react";
import { useSearchParams } from "next/navigation";


const HeaderItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`${
          genre === param
            ? 'text-underline-primary text-decoration-thickness-4 text-warning rounded'
            : ''
        } text-secondary fw-semibold fs-4`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default HeaderItem;


