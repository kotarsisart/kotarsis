"use client";

import "./_comparison.scss";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import { useI18n } from "@/data/I18nProvider";

interface ComparisonRow {
  parameter: string;
  concentrator: string;
  regular: string;
}

export default function Comparison() {
  const { t } = useI18n();

  const headers = t<string[]>("comparison.headers");
  const rows = t<ComparisonRow[]>("comparison.rows");

  return (
    <BlockWrapper>
      <section className="comparison">

        <h2 className="comparison__title fade-up delay-300">
          {t("comparison.title")}
        </h2>

        <div className="comparison__table-wrapper">

          <table className="comparison__table fade-up delay-800">

            <thead className="comparison__table-head">
              <tr>

                {headers.map((head, i) => (
                  <th
                    key={i}
                    className="comparison__table-titles"
                  >
                    {head}
                  </th>
                ))}

              </tr>
            </thead>

            <tbody className="comparison__table-body">

              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="comparison__table-line"
                >

                  <td className="comparison__table-values comparison--left">
                    <div className={`fade-left delay-${1000 + i * 400}`}>
                      {row.parameter}
                    </div>
                  </td>

                  <td className="comparison__table-values">
                    <div className={`fade-left delay-${1200 + i * 400}`}>
                      {row.concentrator}
                    </div>
                  </td>

                  <td className="comparison__table-values">
                    <div className={`fade-left delay-${1400 + i * 400}`}>
                      {row.regular}
                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>
    </BlockWrapper>
  );
}
