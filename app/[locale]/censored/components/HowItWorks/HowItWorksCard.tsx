type HowItWorksCardProps = {
  number: string;
  title: string;
  description: string;
}

export default function HowItWorksCard({
  number,
  title,
  description,
}: HowItWorksCardProps) {
  return (
    <div className="group relative rounded-3xl border border-zinc-200 bg-zinc-50 p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-2xl hover:shadow-violet-500/10">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-sm font-semibold tracking-widest text-violet-700">
        {number}
      </div>

      <h3 className="text-2xl font-semibold tracking-tight wrap-break-word text-zinc-950">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-500">
        {description}
      </p>
    </div>
  );
};
