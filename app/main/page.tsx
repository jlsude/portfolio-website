"use client";
import React from "react";
import Image from "next/image";
import TypeEffect from "../../features/main/TypeEffect";

import primaryWaves from "../../public/static/waves/primary-waves.svg";

export default function Main() {
  return (
    <main className="grid-template-system bg-background relative h-dvh w-screen">
      <div className="absolute h-[345px] w-screen">
        <Image
          src={primaryWaves}
          alt="primary waves"
          priority
          className="bg-background h-full w-full max-w-none object-cover sm:object-fill"
        />
      </div>
      <div className="col-span-4 row-span-2 row-start-5 md:col-span-6 md:col-start-2 md:row-span-1 md:row-start-4 xl:col-span-10 xl:col-start-2">
        <h3>Hello! I am</h3>
        <h1 className="text-accent font-bold">John Louie</h1>
        <h4>
          A computer engineering graduate with interest in&nbsp;
          <span className="text-accent inline-block font-bold">
            <TypeEffect />
          </span>
        </h4>
      </div>
    </main>
  );
}
