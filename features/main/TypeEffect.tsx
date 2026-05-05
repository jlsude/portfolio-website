"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeEffect() {
  const interest = [
    "data science.",
    "software engineering.",
    "machine learning.",
    "full stack development.",
    "artificial intelligence.",
  ];

  return (
    <>
      <Typewriter
        options={{
          strings: interest,
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}
