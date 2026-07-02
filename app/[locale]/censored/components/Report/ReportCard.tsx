type ReportCardProps = {
  title: string;
  value?: string;
  valueKey?: string;
  description: string;
};

export default function ReportCard({
  title,
  value,
  description,
}: ReportCardProps) {
  return (
    <div 
      className="
        rounded-3xl
        border border-zinc-700
        bg-zinc-900
        p-3 bp-md:p-6
        transition duration-200
        hover:-translate-y-1
      "
    >

      <p 
        className="
          text-xs bp-md:text-sm
          uppercase
          tracking-widest
          text-slate-400
        "
      >
        {title}
      </p>

      <p 
        className="
          mt-3 bp-md:mt-6
          text-2xl bp-md:text-5xl
          font-black
          text-slate-300
        "
      >
        {value}
      </p>

      <p 
        className="
          mt-2 bp-md:mt-4
          text-sm bp-md:text-lg
          text-zinc-600
        "
      >
        {description}
      </p>

    </div>
  );
};
