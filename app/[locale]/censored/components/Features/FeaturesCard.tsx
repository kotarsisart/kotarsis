type FeaturesCardProps = {
  title: string;
  description: string;
}

export default function FeaturesCard({
  title,
  description,
}: FeaturesCardProps) {
  return (
    <div
      className="
        group
        rounded-3xl border border-zinc-200/60
        bg-blue-200/80
        p-4 bp-md:p-8
        transition duration-300
        hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10
      "
    >
      <div
        className="
          mb-6
          flex h-10 w-10 bp-md:h-14 bp-md:w-14 items-center justify-center
          rounded-2xl
          bg-blue-300 text-blue-600
        "
      >
        AI
      </div>

      <h3
        className="
          text-xl bp-md:text-2xl
          font-semibold tracking-tight
          text-sky-900
        "
      >
        {title}
      </h3>
      <p
        className="
          mt-4
          leading-relaxed text-sm bp-md:text-base
          text-sky-700
        "
      >
        {description}
      </p>
    </div>
  );
};
