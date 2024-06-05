import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ProjectCard(props) {
  const { onClick, projectName, platform, techStack, thumbnail } = props;
  return (
    <div
      onClick={onClick}
      className="colorTransition relative flex h-full w-full flex-col rounded-2xl p-5 hover:cursor-pointer hover:bg-primary/10"
    >
      <div className="aspect-video h-auto w-full min-w-[200px] rounded-xl border border-primary bg-primary/20">
        <Image
          src={`/static/thumbnails/${thumbnail}`}
          className="h-full w-full max-w-none object-cover"
          alt={projectName}
          priority
          sizes="100vw"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="mt-3 flex items-end justify-between">
        <h4>{projectName}</h4>
      </div>
      <p className="p-small !text-text/80">
        Platform:{" "}
        {platform.map((item, index, array) => {
          return index < array.length - 1 ? `${item}, ` : item;
        })}
      </p>
      <ul className="mt-2">
        {techStack.slice(0, 3).map((item, index) => {
          return (
            <li
              key={index}
              className="mx-1 my-0.5 inline-block rounded-full border-4 border-accent px-2 py-0.5 text-xs md:text-xs"
            >
              <small>{item}</small>
            </li>
          );
        })}
        {techStack.length > 3 ? <small> + {techStack.length - 3}</small> : null}
      </ul>
    </div>
  );
}
