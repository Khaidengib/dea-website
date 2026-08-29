export default function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-lift rounded-md border border-silver-300/60 bg-white px-6 py-8 text-center shadow-sm">
      <p className="font-display text-4xl font-semibold text-navy-950 sm:text-5xl">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-600/70">
        {label}
      </p>
    </div>
  );
}
