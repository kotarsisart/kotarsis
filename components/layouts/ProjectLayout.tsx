import {
  I18nProvider,
  type Messages,
} from "@/data/I18nProvider";

import ScrollRevealProvider from "@/utils/animations/ScrollRevealProvider";

interface ProjectLayoutProps {
  locale: string;
  messages: Messages;
  children: React.ReactNode;
  withScrollReveal?: boolean;
}

export default function ProjectLayout({
  locale,
  messages,
  children,
  withScrollReveal = false,
}: ProjectLayoutProps) {
  return (
    <I18nProvider
      initialLocale={locale}
      messages={messages}
    >
      {withScrollReveal && <ScrollRevealProvider />}
      {children}
    </I18nProvider>
  );
}
