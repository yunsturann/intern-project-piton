import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-bold">404 Not Found </h1>
      <Link
        href="/"
        className=" text-3xl font-bold underline hover:text-rose-500 transition duration-300"
      >
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFound;
