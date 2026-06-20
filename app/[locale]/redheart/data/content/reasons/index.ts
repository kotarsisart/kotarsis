import en from "./en.json";
import uk from "./uk.json";
import be from "./be.json";
import ru from "./ru.json";
import pl from "./pl.json";
import cs from "./cs.json";
import sk from "./sk.json";
import bg from "./bg.json";
import mk from "./mk.json";
import sr from "./sr.json";
import hr from "./hr.json";
import sl from "./sl.json";

export const reasonsMessages = {
  en,
  uk,
  be,
  ru,
  pl,
  cs,
  sk,
  bg,
  mk,
  sr,
  hr,
  sl,
} as const;

export type ReasonsLocale = keyof typeof reasonsMessages;