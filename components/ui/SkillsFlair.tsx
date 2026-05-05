import React from "react";

export default function SkillsFlair({ data }: any) {
  return (
    <ul className="">
      {data.map((item: any, index: number) => {
        const level = item.confidenceLevel;

        const colorList: Record<number, string> = {
          1: "!border-accent/20",
          2: "!border-accent/50",
          3: "!border-accent",
        };

        return (
          <li key={index} className={`border-4 ${colorList[level]}`}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
