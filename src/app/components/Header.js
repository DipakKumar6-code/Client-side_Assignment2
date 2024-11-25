
import React, { Suspense } from "react";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="d-flex p-4 justify-content-center gap-3" style={{ background: "#1b2631" }}>
        <HeaderItem title="Trending" param="fetchTrending" />
        <div className="d-flex flex-column align-items-center">
          <div style={{ height: "18px", borderLeft: "2px solid white", marginTop: "4px"}}></div>
          <div style={{ height: "18px", borderLeft: "2px solid white" }}></div>
        </div>

        {/* <small className="text-white fs-200" style={{lineHeight: "3rem"}}> | </small> */}
        <HeaderItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}
