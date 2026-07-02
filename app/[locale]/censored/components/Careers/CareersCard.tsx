type CarrerBenefitCardProps = {
  title: string;
  description: string;
};

export default function CarrerBenefitCard({
  title,
  description,
}: CarrerBenefitCardProps) {
  return (
    <div
      className="
        rounded-3xl border border-zinc-700
        bg-zinc-900/40
        p-3 bp-md:p-6 bp-lg:p-8
        backdrop-blur
      "
    >

      <h3
        className="
          text-xl bp-md:text-2xl
          font-semibold tracking-tight
          text-slate-300
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4
          text-sm bp-md:text-lg
          leading-relaxed
          text-slate-400/50
        "
      >
        {description}
      </p>
    </div>
  );
};
