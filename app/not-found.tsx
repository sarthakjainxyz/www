"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [code, setCode] = useState("404");

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setCode(
        Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join("")
      );
      
      if (++iteration >= 10) {
        clearInterval(interval);
        setCode("404");
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="grid min-h-screen place-items-center px-4 sm:px-6">
      <div className="text-center">
        <h1 className="font-mono text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          {`{ error: ${code} }`}
        </h1>

        <div className="mt-6 sm:mt-8">
          <p className="font-mono mb-4 text-base sm:mb-6 sm:text-lg md:text-xl">
            Ooops! Page not found
          </p>

          <Link
            href="/"
            className="inline-block rounded-xl border px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background sm:text-base"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}