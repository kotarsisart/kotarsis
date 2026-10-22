type ArgumentProps = {
  icon: string;
  children: React.ReactNode;
};

import Image from "next/image"
import './_argument.scss'

export default function Argument({
  icon,
  children,
}: ArgumentProps) {
  return (
    <li className="argument">
      <Image
        className="argument__icon"
        src={icon}
        alt=""
        width={28}
        height={28}
      />

      <span className="argument__text">
        {children}
      </span>
    </li>
  );
}
