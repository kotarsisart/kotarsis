import { useRef } from "react";

type Options = {
  typingSpeed?: number;
  showDuration?: number;
};

export function useTypewriterWarning(
  iconSrc: string,
  iconAlt: string,
  options?: Options
) {
  const {
    typingSpeed = 25,
    showDuration = 4000,
  } = options || {};

  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);


  function clearTimers() {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (typeTimeout.current) clearTimeout(typeTimeout.current);
  }

  function typeLine(element: HTMLElement, text: string, cb?: () => void) {
    let i = 0;

    function tick() {
      element.textContent += text[i];
      i++;

      if (i < text.length) {
        typeTimeout.current = setTimeout(tick, typingSpeed);
      } else {
        cb?.();
      }
    }

    tick();
  }

  function showWarning(box: HTMLDivElement, text: string) {
    clearTimers();

    box.classList.remove("hide");
    box.classList.remove("show");
    box.style.pointerEvents = "auto";

    box.innerHTML = "";

    const icon = document.createElement("img");
    icon.src = iconSrc;
    icon.alt = iconAlt;
    icon.className = "form__warning-icon";

    // TEXT WRAPPER
    const textWrap = document.createElement("div");
    textWrap.className = "form__warning-text";

    const line = document.createElement("div");
    line.className = "form__warning-line";

    textWrap.appendChild(line);
    box.appendChild(icon);
    box.appendChild(textWrap);

    // ANIMATION
    requestAnimationFrame(() => {
      box.classList.add("show");
    });

    typeLine(line, text);

    hideTimeout.current = setTimeout(
      () => hideWarning(box),
      showDuration + text.length * typingSpeed
    );
  }

  function hideWarning(box: HTMLDivElement) {
    box.classList.remove("show");
    box.classList.add("hide");

    hideTimeout.current = setTimeout(() => {
      box.innerHTML = "";
      box.style.pointerEvents = "none";
    }, 500);
  }

  return { showWarning, hideWarning };
}
