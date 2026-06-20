import "./_logo-switcher.scss";

import Image from "next/image";

interface BrandLogo {
  short: string;
  long: string;
  alt?: string;
}

interface LogoSwitcherProps {
  main: BrandLogo;
  alt: BrandLogo;
  className?: string;
}

export default function LogoSwitcher({
  main,
  alt,
  className = "",
}: LogoSwitcherProps) {
  return (
    <div className={`kts-logo ${className}`}>
      {/* MAIN (Redacted) */}
      <div className="kts-logo__version kts-logo__version--main">
        <Image
          src={main.short}
          className="kts-logo__img kts-logo__img--short"
          width={40}
          height={40}
          alt={main.alt ?? "Redacted"}
        />
        <Image
          src={main.long}
          className="kts-logo__img kts-logo__img--long"
          width={40}
          height={40}
          alt={main.alt ?? "Redacted"}
        />
      </div>

      {/* ALT (kotarsis) */}
      <div className="kts-logo__version kts-logo__version--alt">
        <Image
          src={alt.short}
          className="kts-logo__img kts-logo__img--short"
          width={40}
          height={40}
          alt={alt.alt ?? "kotarsis"}
        />
        <Image
          src={alt.long}
          className="kts-logo__img kts-logo__img--long"
          width={40}
          height={40}
          alt={alt.alt ?? "kotarsis"}
        />
      </div>
    </div>
  );
}
