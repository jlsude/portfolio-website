import React, { type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../types/Project";

export type ProjectModalProps = Project & {
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
};

export default function ProjectModal(props: ProjectModalProps) {
  const {
    setDisplayModal,
    projectName,
    description,
    techStack,
    platform,
    status,
    thumbnail,
    demoLink,
    online,
    github,
    isPrivate,
  } = props;

  return (
    <div
      className={`grid-template-system absolute z-10 h-screen w-screen items-center justify-center`}
    >
      <div
        onClick={() => {
          setDisplayModal(false);
        }}
        className="bg-background/70 absolute -z-10 h-screen w-screen"
      />

      <div className="scrollBar bg-background relative col-span-full row-span-5 row-start-2 overflow-y-auto rounded-tl-3xl md:col-span-6 md:col-start-2 md:row-span-4 md:row-start-2 xl:col-span-10 xl:col-start-2">
        <div className="border-primary bg-primary/20 flex h-[250px] w-full justify-center rounded-tl-3xl border md:h-[300px] xl:h-[350px]">
          <Image
            src={`/static/thumbnails/${thumbnail}`}
            className="h-auto w-9/12 max-w-none object-cover"
            alt={projectName}
            sizes="100vw"
            width={0}
            height={0}
          />
        </div>

        <div className="h-auto w-full px-12 pt-8 pb-12 md:px-16 lg:px-28 xl:px-44">
          <h1 className="text-left">{projectName}</h1>
          <div className="mt-2 flex w-full items-center justify-between">
            <p className="p-small !text-text/80">
              Platform: {platform.map((item) => item).join(", ")}
            </p>

            <div className="p-small flex flex-row">
              {online ? (
                <Link
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-small cursor-pointer hover:underline"
                >
                  Demo
                </Link>
              ) : null}
              {isPrivate === false && online ? <p>&nbsp;|&nbsp;</p> : null}
              {isPrivate ? null : (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-small cursor-pointer hover:underline"
                >
                  Repo
                </Link>
              )}
            </div>
          </div>

          <p className="mt-5 text-justify indent-5">{description}</p>

          <p className="p-small mt-12">Status: {status}</p>
          <ul className="skills mt-4">
            {techStack.map((item: string, index: number) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="from-background sticky -bottom-1 z-20 h-[50px] w-full bg-gradient-to-t" />
      </div>
    </div>
  );
}
