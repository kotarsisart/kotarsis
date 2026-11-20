import { 
  useEffect, useMemo, useRef, useState 
} from "react";

import type {
CSSProperties,
FormEvent,
KeyboardEvent,
ReactNode,
} from "react";

import { downloadAgreementHtml } from "../agreement/export";
import { agreementReferences } from "../agreement/references";
import { createPortal } from "react-dom";
import { useParams } from "next/navigation";
import { useI18n } from "@/data/I18nProvider";

import {
loadPublishedAgreement,
resolveAgreementLocale,
} from "../agreement/loader";

import type { AgreementSection } from "../agreement/types";

import "./_agreement-modal.scss";

type AgreementLoadState = {
  locale: string;
  retry: number;
  pages: AgreementSection;
  error: boolean;
};

const EMPTY_PAGES: AgreementSection = [];

type AgreementModalProps = {
onClose: () => void;
onAccept: () => void;
};

const formatPage = (value: number) => String(value).padStart(2, "0");
export default function AgreementModal({
  onClose,
  onAccept,
}: AgreementModalProps) {
  const { t } = useI18n();

  const params = useParams<{ locale: string }>();
  const locale = resolveAgreementLocale(params.locale ?? "en");

  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pageInputRef = useRef<HTMLInputElement>(null);

  const [referenceHistory, setReferenceHistory] = useState<number[]>([]);
  const [page, setPage] = useState(0);

  const [loadState, setLoadState] = useState<AgreementLoadState | null>(null);

  const [retry, setRetry] = useState(0);

  const loading =
    loadState?.locale !== locale || loadState?.retry !== retry;

  const error = !loading && Boolean(loadState?.error);

  const pages: AgreementSection =
    !loading && !error && loadState
      ? loadState.pages
      : EMPTY_PAGES;

  const [pageInput, setPageInput] = useState("1");
  const [pageInputError, setPageInputError] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const totalPages = pages.length;
  const currentPage = pages[page];
  const progress = totalPages ? ((page + 1) / totalPages) * 100 : 0;

  const pageIndexById = useMemo(
  () => new Map(pages.map((item, index) => [item.id, index])),
  [pages],
);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    loadPublishedAgreement(locale)
      .then((result) => {
        if (cancelled) return;

        setLoadState({
          locale,
          retry,
          pages: result,
          error: false,
        });

        setPage(0);
        setPageInput("1");
        setPageInputError(false);
        setReferenceHistory([]);
      })
      .catch(() => {
        if (cancelled) return;

        setLoadState({
          locale,
          retry,
          pages: [],
          error: true,
        });
      });

    return () => {
      cancelled = true;
    };
  }, [locale, retry]);

  const changePage = (next: number) => {
    if (
    !Number.isInteger(next) ||
    next < 0 ||
    next >= totalPages ||
    loading ||
    error
  ) return;
    setPage(next);
    setPageInput(String(next + 1));
    setPageInputError(false);
    contentRef.current?.scrollTo({ top: 0, behavior: "instant" });
  };

  const submitPage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/^\d+$/.test(pageInput)) {
      setPageInputError(true);
      return;
    }
    const requested = Number(pageInput);
    if (!Number.isSafeInteger(requested) || requested < 1 || requested > totalPages) {
      setPageInputError(true);
      return;
    }
    changePage(requested - 1);
    pageInputRef.current?.blur();
  };

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    const target = event.target;
    if (
    target instanceof HTMLElement &&
    target.closest("input, button, textarea, select, [contenteditable='true']")
  ) return;
    if (event.key === "ArrowLeft") {
    event.preventDefault();
    changePage(page - 1);
  }
    if (event.key === "ArrowRight") {
    event.preventDefault();
    changePage(page + 1);
  }
  };

  const downloadAgreement = () => {
    if (loading || error || !totalPages || downloading) return;
    setDownloading(true);
    try {
      downloadAgreementHtml(pages, locale, {
        title: t("agreementModal.export.title"),
        publishedPages: t("agreementModal.export.publishedPages"),
        printHint: t("agreementModal.export.printHint"),
      });
    } finally {
      setDownloading(false);
    }
  };

  // Cross-references are identified by stable IDs, regardless of language.
  // Only editorially approved links from the current clause are clickable.
  const renderParagraph = (paragraph: string): ReactNode[] => {
    if (!currentPage) return [paragraph];

    const allowedTargets = new Set<string>(
      agreementReferences
        .filter((reference) => reference.from === currentPage.id)
        .map((reference) => reference.to),
    );

    const parts: ReactNode[] = [];
    const clauseIdPattern = /(^|[^\d.])(\d{1,2}\.\d+\.\d+)(?![\d.])/g;
    let cursor = 0;
    for (const match of paragraph.matchAll(clauseIdPattern)) {
      const id = match[2];
      const start = match.index! + match[1].length;
      const destination = pageIndexById.get(id);
      if (!allowedTargets.has(id) || destination === undefined) continue;
      parts.push(paragraph.slice(cursor, start));
      parts.push(
        <button
          key={`${start}-${id}`}
          type="button"
          className="agreement-modal__clause-link"
          onClick={() => followReference(destination)}
          title={`${t("agreementModal.pageInfo.goToClause")} § ${id}`}
        >
          {id}
        </button>,
      );
      cursor = start + id.length;
    }
    parts.push(paragraph.slice(cursor));
    return parts;
  };

  const followReference = (destination: number) => {
    setReferenceHistory((history) => [...history, page]);
    changePage(destination);
  };

  const returnToReference = () => {
    const previous = referenceHistory.at(-1);
    if (previous === undefined) return;
    setReferenceHistory((history) => history.slice(0, -1));
    changePage(previous);
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      className="agreement-modal"
      aria-labelledby="agreement-modal-title"
      aria-describedby="agreement-modal-description"
      onKeyDown={handleDialogKeyDown}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
    >
      <div className="agreement-modal__container">
        <header className="agreement-modal__header">
          <div className="agreement-modal__identity">
            <div
              className="agreement-modal__emblem"
              aria-hidden="true"
            >
              <span className="agreement-modal__emblem-core" />
            </div>
            <div className="agreement-modal__identity-text">
              <span className="agreement-modal__brand">
                Concentrator™
              </span>
              <span className="agreement-modal__department">
                DEPARTMENT OF COGNITIVE CONTROL
              </span>
            </div>
          </div>
          <div className="agreement-modal__header-actions">
            <button
              type="button"
              className="agreement-modal__download"
              onClick={downloadAgreement}
              disabled={loading || error || !totalPages || downloading}
              title={t("agreementModal.pageInfo.downloadTitle")}
            >
              <span aria-hidden="true">↓</span>
              <span
                className="agreement-modal__download-label"
              >
                HTML
              </span>
            </button>
            <span className="agreement-modal__document-code">
              FORM C–001
            </span>
            <button 
              type="button"
              className="agreement-modal__close"
              onClick={onClose}
              aria-label={t("agreementModal.closeAriaLabel")}
            >
              ×
            </button>
          </div>
        </header>

        <div className="agreement-modal__introduction">
          <span className="agreement-modal__eyebrow">
            CONCENTRATOR™ / LEGAL DOCUMENTATION
          </span>
          <h3
            className="agreement-modal__title"
            id="agreement-modal-title"
          >
            {t("agreementModal.title")}
          </h3>
          <p
            className="agreement-modal__description"
            id="agreement-modal-description">
            {t("agreementModal.description")}
          </p>
        </div>

        <div className="agreement-modal__document-meta">
          <span className="agreement-modal__page-info">
            {t("agreementModal.pageInfo.prefix")} {formatPage(totalPages ? page + 1 : 0)} / {formatPage(totalPages)}
          </span>
          <span className="agreement-modal__document-status">
            C–001 / {formatPage(totalPages ? page + 1 : 0)}
          </span>
        </div>

        <div className="agreement-modal__progress-control">
          <input
            type="range"
            className="agreement-modal__progress-slider"
            min={1}
            max={Math.max(1, totalPages)}
            value={totalPages ? page + 1 : 1}
            onChange={(event) => changePage(Number(event.target.value) - 1)}
            disabled={loading || error || totalPages < 2}
            style={{ "--progress": `${progress}%` } as CSSProperties}
            aria-label={t("agreementModal.pageInfo.loadingProgress")}
            aria-valuetext={`${t("agreementModal.pageInfo.page")} ${page + 1}
            ${t("agreementModal.pageInfo.of")} ${totalPages}`} 
          />
        </div>

        <div
          ref={contentRef}
          className="agreement-modal__content"
          tabIndex={0}
          aria-busy={loading}>
          <div className="agreement-modal__content-heading">
            <span className="agreement-modal__section-code">
              § {currentPage?.id ?? "–"}
            </span>
            <span className="agreement-modal__section-reference">
              C–001
            </span>
          </div>
          {loading ? (
            <p role="status">
              {t("agreementModal.pageInfo.loading")}
            </p>
          ) : error || !currentPage ? (
            <div role="alert">
              <p>
                {t("agreementModal.pageInfo.loadingFailed")}
              </p>
              <button 
                type="button"
                onClick={() => setRetry((value) => value + 1)}
              >
                {t("agreementModal.pageInfo.retry")}
              </button>
            </div>
          ) : (
            <>
              <h4>{currentPage.title}</h4>
              {referenceHistory.length > 0 && (
              <button
                type="button"
                className="agreement-modal__return"
                onClick={returnToReference}
              >
                ← {t("agreementModal.pageInfo.returnToClause")}{" "}
                {pages[referenceHistory.at(-1)!]?.id}
              </button>
            )}
              <div className="agreement-modal__paragraphs">
                {currentPage.paragraphs.map((paragraph, index) => (
                <p key={index}>{renderParagraph(paragraph)}</p>
              ))}
              </div>
            </>
          )}
        </div>

        <nav
          className="agreement-modal__navigation"
          aria-label={t("agreementModal.navigation.ariaLabel")}
        >
          <button
            type="button"
            disabled={loading || error || page === 0}
            onClick={() => changePage(page - 1)}>
            <span aria-hidden="true">←</span>
            {t("agreementModal.navigation.previous")}
          </button>

          <form className="agreement-modal__jump" onSubmit={submitPage}>
            <input
              ref={pageInputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={pageInput} onChange={(event) => {
                const value = event.target.value;
                if (/^\d*$/.test(value)) {
                setPageInput(value);
                setPageInputError(false);
              }
              }}
              aria-label={t("agreementModal.pageInfo.pageNumber")}
              aria-invalid={pageInputError}
              title={`${t("agreementModal.pageInfo.enterPage")} 1–${totalPages}`}
              disabled={loading || error || !totalPages}
            />
            <span aria-hidden="true">/ {formatPage(totalPages)}</span>
            <button
              type="submit"
              className="agreement-modal__jump-submit"
              disabled={loading || error || !totalPages}
              aria-label={t("agreementModal.pageInfo.goToPage")}
              title={t("agreementModal.pageInfo.goToPage")}
            >
              ↵
            </button>
          </form>

          <button
            type="button"
            disabled={loading || error || page >= totalPages - 1}
            onClick={() => changePage(page + 1)}>
            {t("agreementModal.navigation.next")}
            <span aria-hidden="true">→</span>
          </button>
        </nav>

        <footer className="agreement-modal__footer">
          <div className="agreement-modal__actions">
            <button
              type="button"
              className="agreement-modal__accept"
              onClick={onAccept}
            >
              {t("agreementModal.actions.accept")}
            </button>
            <button
              type="button"
              className="agreement-modal__skip"
              onClick={onAccept}
            >
              {t("agreementModal.actions.skip")}
            </button>
          </div>
          <p className="agreement-modal__disclaimer">
            {t("agreementModal.disclaimer")}
          </p>
        </footer>

      </div>
    </dialog>,
    document.body,
  );
};
