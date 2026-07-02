type NotificationCardProps = {
  title: string;
  buttons: string[];
  onNext: () => void;
};

export default function NotificationCard({
  title,
  buttons,
  onNext
}: NotificationCardProps) {
  return (
    <div
      className="
        mt-4 bp-md:mt-10
        rounded-4xl border border-zinc-800
        bg-zinc-900
        p-4 bp-md:p-8
      "
    >
      
      <p
        className="
          text-sm bp-md:text-lg leading-relaxed text-zinc-200
        "
      >
        {title}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        {buttons.map((button) => (
          <button
            key={button}
            onClick={onNext}
            className="
              rounded-2xl border border-violet-500/20
              bg-violet-500/10
              px-3 py-1 bp-md:px-5 bp-md:py-3
              text-sm font-medium text-violet-200
              transition duration-300
              hover:bg-violet-500/20
              hover:scale-[1.02]
            "
          >
            {button}
          </button>
        ))}

      </div>

    </div>
  )
};