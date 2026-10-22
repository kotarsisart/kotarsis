import Argument from "../Argument/Argument";
import { argumentsData } from "./arguments";

import { useI18n } from "@/data/I18nProvider";

import './_right-optimism.scss'

export default function RightOptimism() {
  const { t } = useI18n();

  return (
    <section className="face right optimism">

      <h2 className="optimism__title">
        {t("sides.right.title")}
      </h2>

      <ul className="pessimism__arguments">
        {argumentsData.map((argument) => (
          <Argument
            key={argument.key}
            icon={argument.icon}
          >
            {t(`sides.right.arguments.${argument.key}`)}
          </Argument>
        ))}
      </ul>

    </section>
  )
}
