/**
 * indieLayers
 *
 * Defines core layers of the indie creator workflow.
 * Each layer contains:
 * – i18n keys for title/description
 * – a set of visual elements (icon + text)
 */
export const indieLayers = [
  {
    code: "management",
    titleKey: "indie.layers.management.title",
    descriptionKey: "indie.layers.management.description",
    elements: [
      { icon: "brain", textKey: "indie.layers.management.elements.0" },
      { icon: "light", textKey: "indie.layers.management.elements.1" }
    ]
  },
  {
    code: "design",
    titleKey: "indie.layers.design.title",
    descriptionKey: "indie.layers.design.description",
    elements: [
      { icon: "palette", textKey: "indie.layers.design.elements.0" },
      { icon: "pencil", textKey: "indie.layers.design.elements.1" }
    ]
  },
  {
    code: "development",
    titleKey: "indie.layers.development.title",
    descriptionKey: "indie.layers.development.description",
    elements: [
      { icon: "laptop", textKey: "indie.layers.development.elements.0" },
      { icon: "gear", textKey: "indie.layers.development.elements.1" },
      { icon: "instruments", textKey: "indie.layers.development.elements.2" }
    ]
  },
  {
    code: "infrastructure",
    titleKey: "indie.layers.infrastructure.title",
    descriptionKey: "indie.layers.infrastructure.description",
    elements: [
      { icon: "loop", textKey: "indie.layers.infrastructure.elements.0" },
      { icon: "world", textKey: "indie.layers.infrastructure.elements.1" }
    ]
  },
  {
    code: "meta",
    titleKey: "indie.layers.meta.title",
    descriptionKey: "indie.layers.meta.description",
    elements: [
      { icon: "dna", textKey: "indie.layers.meta.elements.0" },
      { icon: "hexa", textKey: "indie.layers.meta.elements.1" },
      { icon: "needle", textKey: "indie.layers.meta.elements.2" }
    ]
  }
];
