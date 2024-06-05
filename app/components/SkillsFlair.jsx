import React from "react";

export default function SkillsFlair({ data }) {
  return (
    <ul className="">
      {data.map((item, index) => {
        return (
          <li
            key={index}
            className={`border-4 ${
              {
                1: "!border-accent/20",
                2: "!border-accent/50",
                3: "!border-accent",
              }[item.confidenceLevel]
            }`}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
