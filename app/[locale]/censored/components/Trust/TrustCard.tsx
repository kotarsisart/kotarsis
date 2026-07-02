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
        
        backdrop-blur-xl
        border border-white/10
        p-8
        transition-all duration-300

        ${
          highlighted
            ? "bg-white/8"
            : "bg-white/5"
        }
      `}
    >
        <p
          className="
            text-5xl font-semibold
            tracking-tight
            bg-linear-to-br
            from-violet-600
            to-indigo-600
            bg-clip-text
            text-transparent
          "
        >
        {value}
      </p>

      <p
        className={`
          mt-4
          text-sm font-medium
          ${highlighted
            ? "text-indigo-900"
            : "text-blue-900"}
        `}
      >
        {text}
      </p>
    </div>
  );
}
