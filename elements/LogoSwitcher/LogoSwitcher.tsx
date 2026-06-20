import { ReactNode } from "react";

import "./_logo-switcher.scss";

interface LogoVersion {
  icon: ReactNode;
  text: string;
}

interface LogoSwitcherProps {
  versions: [LogoVersion, LogoVersion];
  className?: string;
}

export default function LogoSwitcher({
  versions,
  className = "",
}: LogoSwitcherProps) {

const renderVersion = (version: LogoVersion) => (
  <>
    <div className="kts-logo__icon">
      {version.icon}
    </div>

    <span className="kts-logo__text">
      {version.text}
    </span>
  </>
);

  return (
    <div className={`kts-logo ${className}`}>

      {/* Hidden size calculator */}
      <div className="kts-logo__sizer">

        <div className="kts-logo__sizer-row">
          {renderVersion(versions[0])}
        </div>

        <div className="kts-logo__sizer-row">
          {renderVersion(versions[1])}
        </div>

      </div>

      <div className="kts-logo__version kts-logo__version--main">
        {renderVersion(versions[0])}
      </div>

      <div className="kts-logo__version kts-logo__version--alt">
        {renderVersion(versions[1])}
      </div>

    </div>
  );
}
