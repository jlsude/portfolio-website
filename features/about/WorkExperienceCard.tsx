import { useState } from "react";
import { ArrowRight, Terminal } from "lucide-react";
import type { WorkExperience } from "../../types/WorkExperience";
import { formatDate } from "@/lib/date";
import SkillsFlair from "@/components/ui/SkillsFlair";
import Image from "next/image";

export default function WorkExperienceCard(props: {
  className: string;
  workExperience: WorkExperience;
}) {
  const [open, setOpen] = useState(false);
  const {
    companyName,
    duration,
    employmentType,
    logo,
    position,
    techStack,
    shortDescription,
    longDescription,
  } = props.workExperience;

  const { startDate, endDate } = duration;
  const startDateLabel = formatDate(startDate);
  const endDateLabel = formatDate(endDate);

  function EmploymentTypeBadge() {
    return (
      <div className="bg-accent/5 text-accent flex w-fit flex-row place-self-end rounded-full px-3 py-1 text-xs font-semibold">
        {employmentType.toUpperCase()}
      </div>
    );
  }

  return (
    <>
      <div
        className={`bg-text/5 flex h-95 w-80 min-w-80 snap-center flex-col rounded-xl p-8 ${props.className}`}
      >
        <EmploymentTypeBadge />

        <div className="border-primary/40 bg-text/10 my-4 flex h-12 w-12 items-center justify-center overflow-clip rounded-full border-2">
          {logo ? (
            <Image
              width={100}
              height={100}
              alt={companyName}
              src={`/static/companies/${logo}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <Terminal className="text-accent" />
          )}
        </div>

        <div>
          <p className="text-accent! text-xs! font-semibold uppercase">
            {companyName}
          </p>
          <h3 className="font-bold">{position}</h3>

          <p className="text-primary/80! my-2 text-xs!">{shortDescription}</p>
          <p className="text-primary/80! my-4">
            {startDateLabel} - {endDateLabel}
          </p>
        </div>
        <button
          className="text-accent! mt-auto flex flex-row items-center space-x-4 bg-none! text-start text-sm hover:bg-none!"
          onClick={() => setOpen(true)}
        >
          VIEW DETAILS <ArrowRight className="text-accent ml-2" size={"16"} />
        </button>
      </div>

      {/* Basic Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div className="bg-background relative mx-4 max-h-120 w-full max-w-2xl overflow-y-auto rounded-xl p-12 shadow-lg">
            <EmploymentTypeBadge />

            <p className="text-accent! text-xs! font-semibold uppercase">
              {companyName}
            </p>

            <h2 className="text-accent mb-2 text-lg font-bold">{position}</h2>
            <p className="text-primary/80! mb-4 text-xs">
              {startDateLabel} - {endDateLabel}
            </p>

            <SkillsFlair skills={techStack} />

            {longDescription ? (
              <ul className="text-text my-8 list-disc space-y-2 pl-5">
                {longDescription
                  .split("\n")
                  .filter((line) => line.trim().length > 0)
                  .map((line, idx) => (
                    <li key={idx} className="text-justify">
                      {line}
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="text-text my-8">
                {longDescription || "No additional details provided."}
              </p>
            )}

            <div className="from-background sticky -bottom-16 z-20 h-20 w-full bg-linear-to-t" />
          </div>
        </div>
      )}
    </>
  );
}
