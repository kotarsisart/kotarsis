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
    <div
      className="
        group relative
        rounded-3xl
        bg-blue-900/80
        p-3 bp-md:p-8
        transition duration-300
        hover:-translate-y-2 hover:border-violet-200 hover:bg-slate-800 hover:shadow-2xl hover:shadow-violet-500/10
      "
    >
      <div
        className="
          mb-6
          flex h-12 w-12 items-center justify-center
          rounded-2xl
          bg-blue-300
          text-sm
          text-blue-800
          font-semibold tracking-widest
        "
      >
        {number}
      </div>

      <h3
        className="
          text-xl bp-md:text-2xl
          font-semibold
          tracking-tight wrap-break-word
          text-slate-200
        "
      >
        {title}
      </h3>

      <p 
        className="
          mt-4
          text-base bp-md:text-lg
          text-slate-300/90
        "
      >
        {description}
      </p>
    </div>
  );
};
