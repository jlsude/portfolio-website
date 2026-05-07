"use client";

import React, { useRef, type RefObject } from "react";
import data from "../_data/data.json";
import CategorySkillCard from "../../features/about/CategorySkillCard";
import type { CategorySkill } from "../../types/CategorySkill";
import type { WorkExperience } from "../../types/WorkExperience";
import ChevronHorizontalButtons from "../../components/ui/ChevronHorizontalButtons";
import WorkExperienceCard from "../../features/about/WorkExperienceCard";
import LookingForWorkCard from "@/features/about/LookingForWorkCard";

export default function Page() {
  const openToWork = true;

  const categorySkillScrollRef = useRef<HTMLDivElement>(null);
  const workExperienceScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (
    scrollRef: RefObject<HTMLDivElement | null> | null,
    querySelector: string,
    isNegative: boolean = false,
  ) => {
    const container = scrollRef?.current;
    if (container) {
      const card = container.querySelector(querySelector);
      if (card) {
        const cardWidth = (card as HTMLElement).offsetWidth;
        container.scrollBy({
          left: isNegative ? -1 * cardWidth : cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const categories: CategorySkill[] = Object.entries(data.skills).map(
    ([key, value]) => ({
      name: key,
      skills: value.items,
      icon: value.icon as CategorySkill["icon"],
    }),
  );

  const workExperiences: WorkExperience[] =
    data.experiences as WorkExperience[];

  return (
    <main className="grid-template-system bg-background relative min-h-screen w-screen">
      <div className="col-span-full row-span-3 row-start-1 flex flex-col">
        <div className="mb-4 flex w-auto flex-row space-x-4">
          <div className="bg-accent h-8 w-1" />
          <h3 className="">education and skills</h3>
        </div>

        <div className="my-6 flex flex-col">
          <div className="flex flex-row justify-between space-x-4">
            <h4>
              Bachelor of Science in Computer Engineering Major in Data Science
            </h4>
            <p className="min-w-20">2021-2025</p>
          </div>
          <p className="pt-1">
            Technological Institute of the Philippines - Manila (Magna Cum
            Laude)
          </p>
        </div>

        <ChevronHorizontalButtons
          onLeftClick={() =>
            scroll(categorySkillScrollRef, ".category-card", true)
          }
          onRightClick={() => scroll(categorySkillScrollRef, ".category-card")}
        />

        <div
          ref={categorySkillScrollRef}
          className="scrollbar-hide flex snap-x snap-proximity flex-row space-x-4 overflow-x-auto px-12 pb-8"
          style={{ scrollBehavior: "smooth" }}
        >
          {categories.map((item, index) => {
            return (
              <CategorySkillCard
                key={index}
                className={"category-card"}
                params={{ ...item }}
              />
            );
          })}
        </div>
      </div>

      <div className="col-span-full row-span-3 row-start-4 flex flex-col">
        <div className="mb-4 flex w-auto flex-row space-x-4">
          <div className="bg-accent h-8 w-1" />
          <h3 className="">career history</h3>
        </div>

        <ChevronHorizontalButtons
          onLeftClick={() =>
            scroll(workExperienceScrollRef, ".experience-card", true)
          }
          onRightClick={() =>
            scroll(workExperienceScrollRef, ".experience-card")
          }
        />
        <div
          ref={workExperienceScrollRef}
          className="scrollbar-hide flex snap-x flex-row space-x-4 overflow-x-auto px-12 pb-8"
          style={{ scrollBehavior: "smooth" }}
        >
          {openToWork && <LookingForWorkCard className="experience-card" />}
          {workExperiences
            .map((item, index) => {
              return (
                <WorkExperienceCard
                  key={index}
                  className="experience-card"
                  workExperience={item}
                />
              );
            })
            .reverse()}
        </div>
      </div>
    </main>
  );
}
