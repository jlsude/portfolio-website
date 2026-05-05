import Image from "next/image";
import React from "react";
import type { Project } from "../../types/Project";

export type ProjectCardProps = Project & { onClick: () => void };

export default function ProjectCard(props: ProjectCardProps) {
  const { onClick, projectName, platform, techStack, thumbnail } = props;
  return (
    <div
      onClick={onClick}
      className="colorTransition hover:bg-primary/10 relative flex h-full w-full flex-col rounded-2xl p-5 hover:cursor-pointer"
    >
      <div className="border-primary bg-primary/20 aspect-video h-auto w-full min-w-[200px] rounded-xl border">
        <Image
          src={`/static/thumbnails/${thumbnail}`}
          className="h-full w-full max-w-none object-cover"
          alt={projectName}
          width={100}
          height={100}
          loading="eager"
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
        Platform: {platform.map((item) => item).join(", ")}
      </p>
      <ul className="mt-2">
        {techStack.slice(0, 3).map((item: string, index: number) => {
          return (
            <li
              key={index}
              className="border-accent mx-1 my-0.5 inline-block rounded-full border-4 px-2 py-0.5 text-xs md:text-xs"
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
