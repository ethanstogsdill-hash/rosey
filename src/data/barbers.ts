export interface Barber {
  id: number;
  displayName: string;
  roleKey: string;
  roleDefault: string;
  descKey: string;
  descDefault: string;
  image: string;
  unsplashFallback: string;
}

export const barbers: Barber[] = [
  {
    id: 1,
    displayName: "Alirio",
    roleKey: "barber-1-role",
    roleDefault: "Owner & Lead Barber",
    descKey: "barber-1-desc",
    descDefault:
      "The man behind AJ23. Over a decade of experience and a passion for precision that sets the standard for the whole shop.",
    image: "/images/barbers/alirio.jpg",
    unsplashFallback:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=580&fit=crop&crop=face",
  },
  {
    id: 2,
    displayName: "Alex",
    roleKey: "barber-2-role",
    roleDefault: "Barber",
    descKey: "barber-2-desc",
    descDefault:
      "Sharp eye and steady hands. Delivers clean, detailed cuts that clients keep coming back for.",
    image: "/images/barbers/alex.jpg",
    unsplashFallback:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=580&fit=crop&crop=face",
  },
  {
    id: 3,
    displayName: "Luis",
    roleKey: "barber-3-role",
    roleDefault: "Barber",
    descKey: "barber-3-desc",
    descDefault:
      "Versatile with every style — from classic cuts to modern fades. Consistent quality every visit.",
    image: "/images/barbers/luis.jpg",
    unsplashFallback:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=580&fit=crop&crop=face",
  },
  {
    id: 4,
    displayName: "Brayan",
    roleKey: "barber-4-role",
    roleDefault: "Barber",
    descKey: "barber-4-desc",
    descDefault:
      "Precision is in his DNA. Known for flawless fades and a friendly, welcoming approach.",
    image: "/images/barbers/brayan.jpg",
    unsplashFallback:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=580&fit=crop&crop=face",
  },
  {
    id: 5,
    displayName: "Jose",
    roleKey: "barber-5-role",
    roleDefault: "Barber",
    descKey: "barber-5-desc",
    descDefault:
      "Great with every style and every client. Skilled, professional, and always delivers.",
    image: "/images/barbers/jose.jpg",
    unsplashFallback:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=580&fit=crop&crop=face",
  },
  {
    id: 6,
    displayName: "Eduard",
    roleKey: "barber-6-role",
    roleDefault: "Barber",
    descKey: "barber-6-desc",
    descDefault:
      "Detail-oriented and dependable. Brings his A-game to every cut, every time.",
    image: "/images/barbers/eduard.jpg",
    unsplashFallback:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&h=580&fit=crop&crop=face",
  },
  {
    id: 7,
    displayName: "Ender",
    roleKey: "barber-7-role",
    roleDefault: "Barber",
    descKey: "barber-7-desc",
    descDefault:
      "Smooth technique and an eye for clean lines. Makes every client look and feel their best.",
    image: "/images/barbers/ender.jpg",
    unsplashFallback:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&h=580&fit=crop&crop=face",
  },
  {
    id: 8,
    displayName: "Cristopher",
    roleKey: "barber-8-role",
    roleDefault: "Barber",
    descKey: "barber-8-desc",
    descDefault:
      "Fresh talent with serious skill. Brings modern style and sharp execution to every appointment.",
    image: "/images/barbers/cristopher.jpg",
    unsplashFallback:
      "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=500&h=580&fit=crop&crop=face",
  },
];
