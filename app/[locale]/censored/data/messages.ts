import en from "./locales/en.json";
// import pl from "./locales/pl.json";
// import uk from "./locales/uk.json";
import ru from "./locales/ru.json";
// import be from "./locales/be.json";
// import cs from "./locales/cs.json";
// import sk from "./locales/sk.json";
// import bg from "./locales/bg.json";
// import mk from "./locales/mk.json";
// import sr from "./locales/sr.json";
// import hr from "./locales/hr.json";
// import sl from "./locales/sl.json";

/*
|--------------------------------------------------------------------------
| Translation Messages
|--------------------------------------------------------------------------
|
| Every locale JSON is collected into a single object.
| Locale type is automatically inferred from available files.
|
*/

export const messages = {
  en,
  // pl,
  // uk,
  ru,
  // be,
  // cs,
  // sk,
  // bg,
  // mk,
  // sr,
  // hr,
  // sl,
};

export type Locale = keyof typeof messages;

export const locales = Object.keys(messages) as Locale[];
