"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeEffect() {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "data science.",
            "software engineering.",
            "machine learning.",
            "full stack development.",
            "artificial intelligence.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}
