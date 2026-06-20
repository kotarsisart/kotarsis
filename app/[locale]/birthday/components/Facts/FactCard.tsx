type FactCardProps = {
  title: string;
  value: string | number;
  outro?: string;
};

export default function FactCard({
  title,
  value,
  outro,
}: FactCardProps) {
  return (
    <div className="facts__card">
      <h3 className="facts__card-title zoom zoom-in delay-300">
        {title}
      </h3>

      <p className="facts__card-number letters-wide delay-600">
        {value}
      </p>

      {outro && (
        <p className="facts__card-outro fade fade-up delay-800">
          {outro}
        </p>
      )}
    </div>
  );
}