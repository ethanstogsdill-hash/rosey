export interface Service {
  id: number;
  nameKey: string;
  nameDefault: string;
  price: string;
  duration: string;
  descKey: string;
  descDefault: string;
  category: "haircuts" | "combos" | "additional";
}

export const services: Service[] = [
  // Haircuts
  {
    id: 1,
    nameKey: "svc-1-name",
    nameDefault: "Haircuts for Men",
    price: "$30",
    duration: "30 min",
    descKey: "svc-1-desc",
    descDefault:
      "Expert fade, taper, or scissor cut tailored to your style. Includes consultation and styled finish.",
    category: "haircuts",
  },
  {
    id: 2,
    nameKey: "svc-2-name",
    nameDefault: "Kid's Haircut (until 10 years)",
    price: "$25",
    duration: "30 min",
    descKey: "svc-2-desc",
    descDefault:
      "Patient, friendly service for the little ones. Kid-friendly gaming area to keep them comfortable.",
    category: "haircuts",
  },
  {
    id: 3,
    nameKey: "svc-3-name",
    nameDefault: "Kid's Haircut + Line",
    price: "$30",
    duration: "30 min",
    descKey: "svc-3-desc",
    descDefault:
      "Kids cut with a clean, sharp line-up for a polished finish.",
    category: "haircuts",
  },
  {
    id: 4,
    nameKey: "svc-4-name",
    nameDefault: "Men Haircut with Line",
    price: "$35",
    duration: "30 min",
    descKey: "svc-4-desc",
    descDefault:
      "Full haircut plus a crisp razor line-up for extra sharpness.",
    category: "haircuts",
  },
  // Combos
  {
    id: 5,
    nameKey: "svc-5-name",
    nameDefault: "#1 Haircut + Beard",
    price: "$40",
    duration: "40 min",
    descKey: "svc-5-desc",
    descDefault:
      "Full haircut paired with a detailed beard trim, shape-up, and clean finish.",
    category: "combos",
  },
  {
    id: 6,
    nameKey: "svc-6-name",
    nameDefault: "#2 Haircut + Eyebrows",
    price: "$35",
    duration: "30 min",
    descKey: "svc-6-desc",
    descDefault:
      "Precision haircut with eyebrow cleanup for a polished look.",
    category: "combos",
  },
  {
    id: 7,
    nameKey: "svc-7-name",
    nameDefault: "#3 Haircut + Beard + Eyebrows",
    price: "$45",
    duration: "40 min",
    descKey: "svc-7-desc",
    descDefault:
      "The full package — precision cut, beard sculpt, and eyebrow cleanup all in one visit.",
    category: "combos",
  },
  {
    id: 8,
    nameKey: "svc-8-name",
    nameDefault: "Haircut + Eyebrows + Line",
    price: "$40",
    duration: "30 min",
    descKey: "svc-8-desc",
    descDefault: "Haircut with eyebrow cleanup and razor line-up.",
    category: "combos",
  },
  {
    id: 9,
    nameKey: "svc-9-name",
    nameDefault: "Haircut + Beard + Eyebrows + Line",
    price: "$50",
    duration: "45 min",
    descKey: "svc-9-desc",
    descDefault:
      "The ultimate package — everything in one visit.",
    category: "combos",
  },
  {
    id: 10,
    nameKey: "svc-10-name",
    nameDefault: "#5 Haircut + Designs",
    price: "$45+",
    duration: "45 min",
    descKey: "svc-10-desc",
    descDefault:
      "Custom haircut with artistic designs carved in. Price varies by complexity.",
    category: "combos",
  },
  // Additional
  {
    id: 11,
    nameKey: "svc-11-name",
    nameDefault: "Beard Maintenance",
    price: "$17",
    duration: "25 min",
    descKey: "svc-11-desc",
    descDefault:
      "Clean lines and sculpted edges. Keep your beard looking sharp between cuts.",
    category: "additional",
  },
  {
    id: 12,
    nameKey: "svc-12-name",
    nameDefault: "Beard Trim",
    price: "$17",
    duration: "15 min",
    descKey: "svc-12-desc",
    descDefault: "Quick beard trim for shape and neatness.",
    category: "additional",
  },
  {
    id: 13,
    nameKey: "svc-13-name",
    nameDefault: "Shaving of a Beard",
    price: "$15",
    duration: "15 min",
    descKey: "svc-13-desc",
    descDefault: "Full beard shave for a clean, smooth finish.",
    category: "additional",
  },
  {
    id: 14,
    nameKey: "svc-14-name",
    nameDefault: "Eyebrows",
    price: "$10",
    duration: "15 min",
    descKey: "svc-14-desc",
    descDefault:
      "Quick eyebrow cleanup and shaping for a polished, put-together look.",
    category: "additional",
  },
  {
    id: 15,
    nameKey: "svc-15-name",
    nameDefault: "Edge (Line Up)",
    price: "$17",
    duration: "20 min",
    descKey: "svc-15-desc",
    descDefault: "Sharp razor line-up around the hairline and edges.",
    category: "additional",
  },
];
