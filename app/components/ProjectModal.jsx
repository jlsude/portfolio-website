import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectModal(props) {
  const {
    className,
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
  console.log(projectName);
  return (
    <div
      className={`${className} grid-template-system h-screen w-screen items-center justify-center`}
    >
      <div
        onClick={() => {
          setDisplayModal(false);
        }}
        className="absolute -z-10 h-screen w-screen bg-background/70"
      />

      <div className="scrollBar relative col-span-full row-span-5 row-start-2 overflow-y-auto rounded-tl-3xl bg-background md:col-span-6 md:col-start-2 md:row-span-4 md:row-start-2 xl:col-span-10 xl:col-start-2">
        <div className="flex h-[250px] w-full justify-center rounded-tl-3xl border border-primary bg-primary/20 md:h-[300px] xl:h-[350px]">
          <Image
            src={`/static/thumbnails/${thumbnail}`}
            className="h-auto w-9/12 max-w-none object-cover"
            alt={projectName}
            sizes="100vw"
            width={0}
            height={0}
          />
        </div>

        <div className="h-auto w-full px-12 pb-12 pt-8 md:px-16 lg:px-28 xl:px-44">
          <h1 className="text-left">{projectName}</h1>
          <div className="mt-2 flex w-full items-center justify-between">
            <p className="p-small !text-text/80">
              Platform:{" "}
              {platform.map((item, index, array) => {
                return index < array.length - 1 ? `${item}, ` : item;
              })}
            </p>

            <div className="p-small flex flex-row">
              {isPrivate ? null : (
                <Link
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-small cursor-pointer hover:underline"
                >
                  Demo
                </Link>
              )}
              {!isPrivate === online ? <p>&nbsp;|&nbsp;</p> : null}
              {online ? (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-small cursor-pointer hover:underline"
                >
                  Repo
                </Link>
              ) : null}
            </div>
          </div>

          <p className="mt-5 text-justify indent-5">{description}</p>

          <p className="p-small mt-12">Status: {status}</p>
          <ul className="skills mt-4">
            {techStack.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="sticky -bottom-1 z-20 h-[50px] w-full bg-gradient-to-t from-background" />
      </div>
    </div>
  );
}
