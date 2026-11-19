// надо доработать, цвета, PDF и прочее
import type { AgreementSection } from "./types";

export type AgreementExportLabels = {
  title: string;
  publishedPages: string;
  printHint: string;
}

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364 362" fill="none" color="#000">
  <circle cx="182" cy="180" r="64.5" fill="currentColor" stroke="currentColor"/>
  <circle cx="329" cy="180" r="34.75" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
  <circle cx="294" cy="290" r="34.75" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
  <circle cx="294" cy="84" r="34.75" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
  <circle cx="182" cy="35" r="34.75" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
  <circle cx="182" cy="327" r="34.75" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
  <circle cx="70" cy="84" r="34.75" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
  <circle cx="70" cy="290" r="34.75" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
  <circle cx="35" cy="180" r="34.75" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
  <line x1="44.6387" y1="308.104" x2="304.713" y2="73.8788" stroke="currentColor" stroke-width="22"/>
  <line x1="7" y1="179" x2="357" y2="179" stroke="currentColor" stroke-width="22"/>
  <line x1="181" y1="358" x2="181" y2="8" stroke="currentColor" stroke-width="22"/>
  <line y1="-11" x2="350" y2="-11" transform="matrix(-0.74307 -0.669214 -0.669214 0.74307 312.075 316.277)" stroke="currentColor" stroke-width="22"/>
</svg>`;

const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    };
    return entities[char];
  });

export function buildPrintableHtml(
  pages: AgreementSection,
  locale: string,
  labels: AgreementExportLabels,
): string {
  const favicon = `data:image/svg+xml,${encodeURIComponent(LOGO_SVG)}`;
  const body = pages.map((item, index) => `
    <article class="agreement-page" id="page-${escapeHtml(item.id)}">
      <div class="page-meta">CONCENTRATOR™ / FORM C–001 <span>${index + 1} / ${pages.length}</span></div>
      <p class="clause">§ ${escapeHtml(item.id)}</p>
      <h2>${escapeHtml(item.title)}</h2>
      ${item.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n")}
    </article>`).join("\n");

  return `<!doctype html>
<html lang="${escapeHtml(locale)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Concentrator™ Online – ${escapeHtml(labels.title)}</title>
<link rel="icon" type="image/svg+xml" href="${favicon}">
<style>
  :root{font-family:Arial,Helvetica,sans-serif;color:#192b22;background:#e8ebe2}
  *{box-sizing:border-box}body{margin:0;padding:28px 16px}
  .cover,.agreement-page{max-width:800px;margin:0 auto 24px;padding:44px 52px;background:#fff;border:1px solid #c6cec3}
  .cover h1{font-size:30px;margin:12px 0}.cover p{color:#637268}
  .page-meta{display:flex;justify-content:space-between;font-size:10px;letter-spacing:.08em;color:#637268;border-bottom:1px solid #c6cec3;padding-bottom:12px}
  .clause{font-size:12px;font-weight:700;color:#244d39;margin-top:24px}
  h2{font-size:20px;line-height:1.3;margin:12px 0 22px}
  .agreement-page>p:not(.clause){font-size:13px;line-height:1.65;margin:0 0 15px}
  @page{size:A4;margin:16mm}
  @media print{
    body{padding:0;background:#fff}.cover,.agreement-page{max-width:none;border:0;margin:0;padding:0;box-shadow:none}
    .cover{break-after:page}.agreement-page{break-before:page;break-inside:avoid}
    .agreement-page>p{orphans:3;widows:3}
  }
</style></head><body>
<header class="cover">
  <p>CONCENTRATOR™ / LEGAL DOCUMENTATION</p>
  <h1>${escapeHtml(labels.title)}</h1>
  <p>Concentrator™ Online</p>
  <p>${escapeHtml(labels.publishedPages)}: ${pages.length}</p>
  <p>${escapeHtml(labels.printHint)}</p>
</header>
${body}
</body></html>`;
}

export function downloadAgreementHtml(
  pages: AgreementSection,
  locale: string,
  labels: AgreementExportLabels,
): void {
  if (!pages.length) return;

  const html = buildPrintableHtml(pages, locale, labels);

  const blob = new Blob([html], {
    type: "text/html;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = `Concentrator-Agreement-${locale}-${pages.length}-pages.html`;

  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 30_000);
}
