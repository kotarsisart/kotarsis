type FeaturesCardProps = {
  title: string;
  description: string;
}

export default function FeaturesCard({
  title,
  description,
}: FeaturesCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        AI
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
        {title}
      </h3>
      <p className="mt-4 leading-relaxed text-zinc-500">
        {description}
      </p>
    </div>
  );
};
