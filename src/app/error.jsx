"use client";

import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="mt-10 text-center">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
