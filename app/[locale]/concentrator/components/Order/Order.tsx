"use client";

import { useState } from "react";

import "./_order.scss";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import { useI18n } from "@/data/I18nProvider";

type MessageType = "success" | "error" | "";

export default function Order() {
  const { t } = useI18n();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [isSending, setIsSending] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [message, setMessage] = useState<{
    type: MessageType;
    text: string;
    icon: string;
    show: boolean;
  }>({
    type: "",
    text: "",
    icon: "",
    show: false,
  });

  const icons = {
    success: `
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="green"
      >
        <path
          d="M5 13L9 17L19 7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `,
    error: `
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="red"
      >
        <path
          d="M6 18L18 6M6 6l12 12"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `,
  };

  function showMessage(
    type: "success" | "error",
    text: string
  ) {
    setMessage({
      type,
      text,
      icon: icons[type],
      show: true,
    });

    setTimeout(() => {
      setMessage(prev => ({
        ...prev,
        show: false,
      }));
    }, 4000);
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setIsSending(true);

    if (!name.trim()) {
      setNameError(true);

      showMessage(
        "error",
        t("order.form.messages.nameRequired")
      );

      setIsSending(false);
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError(true);

      showMessage(
        "error",
        t("order.form.messages.validEmail")
      );

      setIsSending(false);
      return;
    }

    if (/\d/.test(name)) {
      setNameError(true);

      showMessage(
        "error",
        t("order.form.messages.noNumbers")
      );

      setIsSending(false);
      return;
    }

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message: comment,
        }),
      });

      showMessage(
        "success",
        t("order.form.messages.success")
      );

      setName("");
      setEmail("");
      setComment("");
    } catch (err) {
      console.error(err);

      showMessage(
        "error",
        "Failed to send message"
      );
    } finally {
      setIsSending(false);
    }
  }

  type DeliveryStep = {
    title: string;
    description: string;
  }

  const deliverySteps =
    t("order.delivery.steps") as DeliveryStep[];

  return (
    <BlockWrapper>
      <section
        className="order"
        id="order"
      >
        <div className="order-form">

          <h2 className="order-form__title fade-up delay-300">
            {t("order.form.title")}
          </h2>

          <form
            className="order-form__body fade-up delay-800"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className={`order-form__input ${
                nameError ? "error" : ""
              }`}
              placeholder={t(
                "order.form.placeholders.name"
              )}
            />

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className={`order-form__input ${
                emailError ? "error" : ""
              }`}
              placeholder="Example@gmail.com"
            />

            <textarea
              value={comment}
              onChange={(e) =>
                setComment(e.target.value)
              }
              className="
                order-form__input
                order-form__textarea
              "
              placeholder={t(
                "order.form.placeholders.comment"
              )}
            />

            <button
              type="submit"
              className="order-form__button"
            >
              {isSending
                ? t(
                    "order.form.labels.sending"
                  )
                : t(
                    "order.form.labels.submit"
                  )}
            </button>

          </form>

          <div
            className={`
              order-form__message
              ${message.type}
              ${message.show ? "show" : ""}
            `}
          >
            <span
              className="form-message__icon"
              dangerouslySetInnerHTML={{
                __html: message.icon,
              }}
            />

            <span>
              {message.text}
            </span>
          </div>

        </div>

        <div className="order-delivery">

          <h2 className="order-delivery__title fade-up delay-1200">
            {t("order.delivery.title")}
          </h2>

          <div className="order-delivery__container">

            <div className="order-delivery__steps fade-up delay-1600">

              {deliverySteps.map(
                (step, i) => (
                  <div
                    key={i}
                    className={`order-delivery__step order-delivery__step--${i + 1}`}
                  >
                    <h3 className="order-delivery__step-title">
                      {step.title}
                    </h3>

                    <p className="order-delivery__step-description">
                      {step.description}
                    </p>
                  </div>
                )
              )}

            </div>

          </div>

        </div>
      </section>
    </BlockWrapper>
  );
}
