"use client";
import React from "react";
import Image from "next/image";
import programmer from "../../public/static/programmergif.gif";
import github from "../../public/static/github.png";
import mail from "../../public/static/mail.svg";
import upwork from "../../public/static/upwork.svg";
import TypeEffect from "../components/TypeEffect";
import Link from "next/link";

import primaryWaves from "../../public/static/waves/primary-waves.svg";

export default function Mainpage() {
  return (
    <main className="grid-template-system relative h-dvh w-screen bg-background">
      <div className="absolute h-[345px] w-screen">
        <Image
          src={primaryWaves}
          alt="primary waves"
          priority
          className="h-full w-full max-w-none bg-background object-cover sm:object-fill"
        />
      </div>
      <div className="col-span-4 row-span-2 row-start-5 md:col-span-6 md:col-start-2 md:row-span-1 md:row-start-4 xl:col-span-10 xl:col-start-2">
        <h3>Hello! I am</h3>
        <h1 className="font-bold text-accent">John Louie</h1>
        <h4>
          A senior computer engineering student with an interest in&nbsp;
          <span className="inline-block font-bold text-accent">
            <TypeEffect />
          </span>
        </h4>
      </div>
    </main>
  );
}
