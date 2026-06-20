"use client"

import "./_input-page.scss";
import '../../globals.css';

import { useI18n } from "@/data/I18nProvider";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

import { useTypewriterWarning } from "../../hooks/useTypeWriterWarning";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

import Preloader from "../Preloader/Preloader";
import AppLayout from "../AppLayout/AppLayout";

export default function InputPage() {
  const { t } = useI18n();
  const router = useRouter();

  const params = useParams<{ locale: string }>();

  const locale = params.locale;

  const [birthdayValue, setBirthdayValue] = useState<Dayjs | null>(null);

  const [generatedLink, setGeneratedLink] = useState("");
  const [paramsString, setParamsString] = useState("");

  const warningRef = useRef<HTMLDivElement | null>(null);

  const { showWarning } = useTypewriterWarning(
    "/projects/birthday/icons/form/fail.svg",
    t("input.error.failAlt")
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const age = formData.get("age")?.toString().trim();
    const birthday = birthdayValue
      ? birthdayValue.format("YYYY-MM-DD")
      : "";

    const parsedAge = age ? Number(age) : null;

    if (parsedAge !== null) {
      const isInvalidAge =
        isNaN(parsedAge) || parsedAge <= 0 || parsedAge > 120;

      if (isInvalidAge) {
        if (warningRef.current) {
          showWarning(warningRef.current, t("input.error.invalidAge"));
        }
        return;
      }
    }

    if (!age && !birthday) {
      if (warningRef.current) {
        showWarning(warningRef.current, t("input.error.required"));
      }
      return;
    }

    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      params.append(key, String(value));
    });

  if (birthday) {
    params.set("birthday", birthday);
  }

  const paramsStr = params.toString();

  const fullUrl =
    `${window.location.origin}/${locale}/birthday/view?${paramsStr}`;
    // for local
    // `${window.location.origin}/${locale}/view?${paramsStr}`;

    setGeneratedLink(fullUrl);
    setParamsString(paramsStr);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
    } catch {
      console.error("Copy failed");
    }
  };

  return (
    <>
    <Preloader />
    
    <AppLayout>
      <section className="inputpage">
        <div className="inputpage__inner">

          {/* WARNING */}

          {/* TITLE */}
          <h1 className="inputpage__title">
            {t("input.title")}
          </h1>

          <div className="inputpage__content">

            {/* FORM */}
            <form className="inputpage__form" onSubmit={handleSubmit}>

              <p className="inputpage__warning" ref={warningRef}></p>

              <label className="inputpage__data">
                <p className="inputpage__clue">{t("input.name")}</p>
                <input name="name" className="inputpage__input" />
              </label>

              <label className="inputpage__data">
                <p className="inputpage__clue">{t("input.from")}</p>
                <input name="from" className="inputpage__input" />
              </label>

              <label className="inputpage__data">
                <p className="inputpage__clue">{t("input.birthday")}</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                  
                    openTo="year"
                    format="DD.MM.YYYY"
                    views={["year", "month", "day"]}
                    value={birthdayValue}
                    onChange={(newValue) => setBirthdayValue(newValue)}
                    slotProps={{
                      textField: {
                        className: "mui-input",
                        fullWidth: true,
                      },
                    }}
                  />
                </LocalizationProvider>

              </label>

              <label className="inputpage__data">
                <p className="inputpage__clue">{t("input.age")}</p>
                <input
                  type="number"
                  name="age"
                  className="inputpage__input"
                />
              </label>

              <label className="inputpage__data">
                <p className="inputpage__clue">{t("input.message")}</p>
                <input name="message" className="inputpage__input" />
              </label>

              <button
                type="submit"
                className="inputpage__form-button"
              >
                {t("input.submit")}
              </button>

            </form>

            <div className="inputpage__divider"></div>

            {/* RESULT */}
            {generatedLink && (
              <div className="inputpage__result">

                <p className="inputpage__result-title">
                  {t("input.resultTitle")}
                </p>

                <div className="inputpage__result-link-container">

                  <input
                    value={generatedLink}
                    readOnly
                    className="inputpage__result-link"
                  />

                  <button
                    className="inputpage__result-button"
                    onClick={copyLink}
                  >
                    {t("input.copy")}
                  </button>

                </div>

                <span
                  role="button"
                  tabIndex={0}
                  className="inputpage__view"
                  // onClick={() => router.push(`/${locale}/view?${paramsString}`)}
                  onClick={() => router.push(`/${locale}/birthday/view?${paramsString}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      router.push(`/${locale}/birthday/view?${paramsString}`);
                    }
                  }}
                >
                  {t("input.preview")}
                </span>

              </div>
            )}

          </div>
        </div>
      </section>
    </AppLayout>
    </>
  );
}
