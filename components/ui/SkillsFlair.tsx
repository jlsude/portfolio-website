import React from "react";

export default function SkillsFlair({
  skills,
  className,
}: {
  skills: string[];
  className?: string;
}) {
  return (
    <ul className="">
      {skills.map((item: string, index: number) => {
        return (
          <li
            key={index}
            className={`border-accent mr-1 mb-1 rounded-full border-3 px-2 py-0.5 text-xs`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
