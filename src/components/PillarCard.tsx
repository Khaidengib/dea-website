import Link from "next/link";
import {
  LineChart,
  Rocket,
  Users,
  Lightbulb,
  PiggyBank,
  Network,
  type LucideIcon,
  ArrowUpRight,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  economics: LineChart,
  entrepreneurship: Rocket,
  leadership: Users,
  innovation: Lightbulb,
  "financial-literacy": PiggyBank,
  community: Network,
};

export default function PillarCard({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}) {
  const Icon = icons[slug] ?? Lightbulb;
  return (
    <Link
      href={`/what-we-do#${slug}`}
      className="card-lift group flex flex-col justify-between rounded-md border border-silver-300/60 bg-white p-7"
    >
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy-950 text-silver-200 transition-colors group-hover:bg-navy-800">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-navy-950">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{description}</p>
      </div>
      <div className="mt-6 flex items-center gap-1 text-sm font-medium text-navy-800 opacity-70 transition-all group-hover:opacity-100 group-hover:gap-2">
        Explore <ArrowUpRight size={16} />
      </div>
    </Link>
  );
}
