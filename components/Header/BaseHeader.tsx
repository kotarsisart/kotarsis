interface BaseHeaderProps {
  logo: React.ReactNode;
  center?: React.ReactNode;
  actions: React.ReactNode;
}

export default function BaseHeader({
  logo,
  center,
  actions,
}: BaseHeaderProps) {
  return (
    <header className="header">
      {logo}
      {center}
      {actions}
    </header>
  );
}