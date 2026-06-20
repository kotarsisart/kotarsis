type CarrerBenefitCardProps = {
  title: string;
  description: string;
};

export default function CarrerBenefitCard({
  title,
  description,
}: CarrerBenefitCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/600 p-8 backdrop-blur">

      <h3 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-400">
        {description}
      </p>
    </div>
  );
};
