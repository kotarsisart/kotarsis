type TrustCardProps = {
  value: string;
  text: string;
  highlighted?: boolean;
};

export default function TrustCard({
  value,
  text,
  highlighted,
}: TrustCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border border-violet-100
        p-8
        transition-all duration-300
        hover:border-violet-300

        ${
          highlighted
            ? "bg-stone-50 hover:shadow-2xl shadow-indigo-400/50"
            : "bg-white"
        }
      `}
    >
        <p
          className="
            text-5xl font-semibold
            tracking-tight
            bg-linear-to-br
            from-violet-500
            to-indigo-700
            bg-clip-text
            text-transparent
          "
        >
        {value}
      </p>

      <p
        className={`
          mt-4 text-sm
          ${highlighted
            ? "text-blue-900"
            : "text-black"}
        `}
      >
        {text}
      </p>
    </div>
  );
}
