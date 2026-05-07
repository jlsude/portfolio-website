import {
  Code,
  LibraryBig,
  SquareTerminal,
  Server,
  Database,
  BrainCircuit,
  LayoutDashboard,
  Bitcoin,
} from "lucide-react";

import type { CategorySkill } from "../../types/CategorySkill";
import type { JSX } from "react";
import SkillsFlair from "../../components/ui/SkillsFlair";

export default function CategorySkillCard(props: {
  className: string;
  params: CategorySkill;
}) {
  const { icon, name, skills } = props.params;

  const iconMap: Record<typeof icon, JSX.Element> = {
    code: <Code className="text-accent" />,
    developer_board: <LibraryBig className="text-accent" />,
    terminal: <SquareTerminal className="text-accent" />,
    server: <Server className="text-accent" />,
    database: <Database className="text-accent" />,
    brain_circuit: <BrainCircuit className="text-accent" />,
    layout: <LayoutDashboard className="text-accent" />,
    bitcoin: <Bitcoin className="text-accent" />,
  };

  return (
    <div
      className={`bg-text/5 flex min-h-40 min-w-80 snap-center flex-col rounded-xl p-4 ${props.className}`}
    >
      <div className="mt-4" />
      {iconMap[icon]}
      <p className="mt-1">{name}</p>

      <div className="mt-2" />
      <SkillsFlair skills={skills} />
    </div>
  );
}
