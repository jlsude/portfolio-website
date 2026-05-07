import { Download, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function LookingForWorkCard(props: { className: string }) {
  return (
    <div className={`flex flex-row items-center ${props.className}`}>
      <div
        className={`bg-text/5 flex h-95 w-80 snap-center flex-col rounded-xl p-8`}
      >
        <div className="bg-background/30 my-4 flex aspect-square h-16 w-16 items-center justify-center place-self-center rounded-full">
          <Briefcase className="text-accent" />
        </div>

        <div className="flex flex-1 flex-col items-center text-center">
          <h4 className="text-accent mb-2 font-bold">Let's Work Together</h4>
          <p className="text-primary/80! mb-6 text-sm!">
            I'm open to roles and collaborations where I can contribute and
            grow. Got a project or role in mind? Download my resume and let's
            find out.
          </p>
        </div>

        <a
          href="/static/JohnLouieSudeResume.pdf"
          download
          aria-label="Download Resume"
        >
          <Button
            variant="outline"
            className="border-accent! text-accent! hover:bg-accent/10! w-full"
          >
            Download Resume <Download className="text-accent ml-2" size={20} />
          </Button>
        </a>
      </div>

      <div className="mr-2 ml-2 flex flex-row space-x-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-primary/40 h-2 w-2 rounded-full" />
        ))}
      </div>
    </div>
  );
}
