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
        border border-zinc-800
        bg-zinc-900
        p-6
        transition duration-200
        hover:-translate-y-1
      "
    >

      <p 
        className="
          text-xs
          uppercase
          tracking-widest
          text-zinc-500
        "
      >
        {title}
      </p>

      <p 
        className="
          mt-6
          text-5xl
          font-black
          text-white
        "
      >
        {value}
      </p>

      <p 
        className="
          mt-4 
          text-zinc-400
        "
      >
        {description}
      </p>

    </div>
  );
};
