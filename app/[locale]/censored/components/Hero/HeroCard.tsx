type HeroCardProps = {
  title: string;
}

export default function HeroCard({
  title,
}: HeroCardProps) {
  return (
    <div className="flex gap-2">
      <div
        className="
          w-1
          rounded-full
          bg-gradient-to-b
          from-indigo-500
          to-cyan-400
        "
      />

      <h3
        className="
          text-sm bp-md:text-xl
          leading-tight
          font-semibold
          tracking-tight
          bg-linear-to-br from-indigo-600 to-cyan-600
          bg-clip-text text-transparent
        "
      >
        {title}
      </h3>

    </div>
  );
};
