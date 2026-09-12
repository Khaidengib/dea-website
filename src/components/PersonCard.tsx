import Image from "next/image";

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-4a2 2 0 0 1 4 0v4" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function PersonCard({
  name,
  position,
  meta,
  bio,
  linkedin,
  photo,
}: {
  name: string;
  position: string;
  meta?: string;
  bio: string;
  linkedin?: string;
  photo?: string;
}) {
  return (
    <div className="card-lift flex flex-col rounded-md border border-silver-300/60 bg-white p-6">
      <div className="flex items-center gap-4">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-navy-800 to-navy-950 font-display text-lg font-semibold text-silver-200">
            {initials(name)}
          </div>
        )}
        <div>
          <h3 className="font-display text-base font-semibold text-navy-950">{name}</h3>
          <p className="text-sm text-navy-700/80">{position}</p>
          {meta && <p className="text-xs text-navy-600/60">{meta}</p>}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-navy-800/75">{bio}</p>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy-700 hover:text-navy-950"
        >
          <LinkedinIcon size={14} /> LinkedIn
        </a>
      )}
    </div>
  );
}
