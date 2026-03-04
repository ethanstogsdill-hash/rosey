export interface Review {
  id: number;
  textKey: string;
  textDefault: string;
  authorKey: string;
  authorDefault: string;
  sourceKey: string;
  sourceDefault: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    textKey: "review-1",
    textDefault:
      "\u201CThe best barbershop in town. Every barber here is great \u2014 no matter who you get, you\u2019re walking out looking sharp. No wait times and always friendly.\u201D",
    authorKey: "review-author",
    authorDefault: "Verified Client",
    sourceKey: "review-source",
    sourceDefault: "Google Review",
  },
  {
    id: 2,
    textKey: "review-2",
    textDefault:
      "\u201CAbsolutely killed it. The attention to detail is next level. Plus they have a gaming area for kids \u2014 my son actually looks forward to getting his hair cut now.\u201D",
    authorKey: "review-author",
    authorDefault: "Verified Client",
    sourceKey: "review-source",
    sourceDefault: "Google Review",
  },
  {
    id: 3,
    textKey: "review-3",
    textDefault:
      "\u201CLa mejor barber\u00EDa! Excellent professionals. They take the time to understand exactly what you want and deliver every time. Highly recommend.\u201D",
    authorKey: "review-author",
    authorDefault: "Verified Client",
    sourceKey: "review-source",
    sourceDefault: "Google Review",
  },
];
