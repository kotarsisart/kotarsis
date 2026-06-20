export const pricingPlans = [
  {
    id: "starter",
    price: "29$",
    isCustom: false,
    featuresKeys: [
      "tracking",
      "burnout",
      "summaries",
      "limitedSync",
    ],
  },

  {
    id: "growth",
    price: "149$",
    isCustom: false,
    highlighted: true,
    featuresKeys: [
      "monitoring",
      "moralePrediction",
      "aiNotifications",
      "departmentSync",
      "productivity"
    ],
  },

  {
    id: "enterprise",
    price: null,
    isCustom: true,
    featuresKeys: [
      "replacement",
      "prevention",
      "adaptiveSystems",
      "internalRestructuring",
      "scalability"
    ],
  },
];
