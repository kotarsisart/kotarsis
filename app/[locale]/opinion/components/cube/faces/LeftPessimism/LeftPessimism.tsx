import Argument from "../Argument/Argument";
import { argumentsData } from "./arguments";

import { useI18n } from "@/data/I18nProvider";

import './_left-pessimism.scss'

export default function LeftPessimism() {
  const { t } = useI18n();

  return (
    <section className="face left pessimism">

      <h2 className="pessimism__title">
        {t("sides.left.title")}
      </h2>

      <ul className="pessimism__arguments">
        {argumentsData.map((argument) => (
          <Argument
            key={argument.key}
            icon={argument.icon}
          >
            {t(`sides.left.arguments.${argument.key}`)}
          </Argument>
        ))}
      </ul>
    </section>
  );
}
