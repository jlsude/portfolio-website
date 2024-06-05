import React from "react";
import Image from "next/image";
import secondaryWaves from "../../public/static/waves/secondary-waves.svg";

export default function SecondaryWaves() {
  return (
    <div className="h-[175px] w-screen">
      <Image
        src={secondaryWaves}
        alt="secondary waves"
        priority
        className="h-full w-full max-w-none bg-background object-cover sm:object-fill"
      />
    </div>
  );
}
