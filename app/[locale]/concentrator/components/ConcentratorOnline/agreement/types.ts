export type AgreementPage = {
  /** Stable across every translation. Example: 4.2.2 */
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export type AgreementSection = readonly AgreementPage[];

export type AgreementReference = {
  from: string;
  to: string;
};
