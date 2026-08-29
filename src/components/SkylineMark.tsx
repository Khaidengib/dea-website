type Props = {
  className?: string;
  variant?: "line" | "full";
};

/**
 * The site's signature device: an ascending skyline with a rising line through
 * it, echoing the arrow-through-Dallas-skyline in the DEA logo. Used small as
 * a section divider and large as ambient hero texture.
 */
export default function SkylineMark({ className = "", variant = "line" }: Props) {
  if (variant === "line") {
    return (
      <svg
        viewBox="0 0 400 40"
        className={className}
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 32 L60 32 L60 20 L75 20 L75 32 L110 32 L110 10 L120 10 L120 32 L160 32 L160 24 L172 24 L172 32 L210 32 L225 6 L240 32 L280 32 L280 16 L294 16 L294 32 L340 32 L340 22 L352 22 L352 32 L400 32"
          stroke="url(#skylineGradient)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="skylineGradient" x1="0" y1="0" x2="400" y2="0">
            <stop offset="0%" stopColor="#b9c1cf" stopOpacity="0" />
            <stop offset="15%" stopColor="#b9c1cf" />
            <stop offset="50%" stopColor="#f2f4f7" />
            <stop offset="85%" stopColor="#b9c1cf" />
            <stop offset="100%" stopColor="#b9c1cf" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 900 300"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMax slice"
    >
      <path
        d="M0 260 L80 260 L80 190 L120 190 L120 260 L180 260 L180 120 L210 120 L210 260 L270 260 L270 220 L300 220 L300 260 L360 260 L360 80 L390 80 L390 260 L440 260 L440 150 L480 150 L480 260 L560 260 L590 40 L620 260 L700 260 L700 170 L740 170 L740 260 L820 260 L820 110 L850 110 L850 260 L900 260"
        stroke="url(#skylineFullGradient)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M0 268 Q 220 300 460 250 T 900 220"
        stroke="url(#arcGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <defs>
        <linearGradient id="skylineFullGradient" x1="0" y1="0" x2="900" y2="0">
          <stop offset="0%" stopColor="#7c8798" />
          <stop offset="50%" stopColor="#e9ecf1" />
          <stop offset="100%" stopColor="#7c8798" />
        </linearGradient>
        <linearGradient id="arcGradient" x1="0" y1="0" x2="900" y2="0">
          <stop offset="0%" stopColor="#98a2b5" stopOpacity="0" />
          <stop offset="50%" stopColor="#f6f7f9" />
          <stop offset="100%" stopColor="#98a2b5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
