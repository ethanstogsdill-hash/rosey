export type TranslationKey = string;
export type Translations = Record<TranslationKey, string>;

export const es: Translations = {
  // Nav
  "nav-about": "Nosotros",
  "nav-services": "Servicios",
  "nav-gallery": "Galería",
  "nav-barbers": "Barberos",
  "nav-reviews": "Reseñas",
  "nav-findus": "Ubicación",
  "nav-book": "Reservar",

  // Hero
  "hero-badge": "★ 4.9 Estrellas · 550+ Reseñas",
  "hero-heading":
    'Donde Cada Corte Es una <em>Obra Maestra</em>',
  "hero-sub":
    "La barbería premier de Gainesville. Degradados de precisión, lineups perfectos y más de 10 años de experiencia en la silla.",
  "hero-cta-book": "Reserva Tu Corte",
  "hero-cta-services": "Ver Servicios",

  // About
  "about-label": "EL AMBIENTE",
  "about-heading": "Arte y Precisión",
  "about-text":
    'En AJ23 Barbershop, cada visita es más que un corte de pelo — es una experiencia construida sobre <strong>más de una década de experiencia</strong> y un amor genuino por el oficio. Nuestro equipo bilingüe trata cada degradado, lineup y arreglo de barba como una obra de arte. Hemos creado un espacio donde <strong>la cultura clásica de barbería se encuentra con el estilo moderno</strong> — con un área de juegos para niños y un ambiente acogedor para toda la familia. Ya seas un cliente habitual o sea tu primera vez en la silla, sentirás la diferencia desde el primer corte.',

  // Services
  "svc-label": "EL MENÚ",
  "svc-heading": "Servicios y Precios",
  "svc-1-name": "Cortes para Hombres",
  "svc-1-desc":
    "Degradado, taper o corte a tijera experto adaptado a tu estilo. Incluye consulta y acabado con estilo.",
  "svc-2-name": "Corte para Niños (hasta 10 años)",
  "svc-2-desc":
    "Servicio paciente y amigable para los más pequeños. Área de juegos para que estén cómodos.",
  "svc-3-name": "Corte para Niños + Línea",
  "svc-3-desc":
    "Corte para niños con un lineup limpio y afilado para un acabado pulido.",
  "svc-4-name": "Corte para Hombres con Línea",
  "svc-4-desc":
    "Corte completo más un lineup de navaja nítido para mayor definición.",
  "svc-5-name": "#1 Corte + Barba",
  "svc-5-desc":
    "Corte completo combinado con un arreglo de barba detallado, perfilado y acabado limpio.",
  "svc-6-name": "#2 Corte + Cejas",
  "svc-6-desc":
    "Corte de precisión con limpieza de cejas para un look pulido.",
  "svc-7-name": "#3 Corte + Barba + Cejas",
  "svc-7-desc":
    "El paquete completo — corte de precisión, escultura de barba y limpieza de cejas en una sola visita.",
  "svc-8-name": "Corte + Cejas + Línea",
  "svc-8-desc":
    "Corte con limpieza de cejas y lineup de navaja.",
  "svc-9-name": "Corte + Barba + Cejas + Línea",
  "svc-9-desc":
    "El paquete definitivo — todo en una sola visita.",
  "svc-10-name": "#5 Corte + Diseños",
  "svc-10-desc":
    "Corte personalizado con diseños artísticos tallados. El precio varía según la complejidad.",
  "svc-11-name": "Mantenimiento de Barba",
  "svc-11-desc":
    "Líneas limpias y bordes esculpidos. Mantén tu barba impecable entre cortes.",
  "svc-12-name": "Recorte de Barba",
  "svc-12-desc": "Recorte rápido de barba para forma y prolijidad.",
  "svc-13-name": "Afeitado de Barba",
  "svc-13-desc": "Afeitado completo de barba para un acabado limpio y suave.",
  "svc-14-name": "Cejas",
  "svc-14-desc":
    "Limpieza y perfilado rápido de cejas para un look pulido y bien cuidado.",
  "svc-15-name": "Borde (Lineup)",
  "svc-15-desc":
    "Lineup de navaja afilado alrededor de la línea del cabello y bordes.",

  // Gallery
  "gallery-label": "NUESTRO TRABAJO",
  "gallery-heading": "El Portafolio",

  // Before & After
  "ba-label": "TRANSFORMACIONES",
  "ba-heading": "Antes y Después",

  // Barbers
  "barbers-label": "EL EQUIPO",
  "barbers-heading": "Conoce a Tus Barberos",
  "barber-1-role": "Dueño y Barbero Principal",
  "barber-1-desc":
    "El hombre detrás de AJ23. Más de una década de experiencia y una pasión por la precisión que marca el estándar de toda la barbería.",
  "barber-2-role": "Barbero",
  "barber-2-desc":
    "Ojo agudo y manos firmes. Entrega cortes limpios y detallados por los que los clientes siempre regresan.",
  "barber-3-role": "Barbero",
  "barber-3-desc":
    "Versátil con cada estilo — desde cortes clásicos hasta degradados modernos. Calidad consistente en cada visita.",
  "barber-4-role": "Barbero",
  "barber-4-desc":
    "La precisión está en su ADN. Conocido por degradados impecables y un trato amigable y acogedor.",
  "barber-5-role": "Barbero",
  "barber-5-desc":
    "Excelente con cada estilo y cada cliente. Hábil, profesional y siempre cumple.",
  "barber-6-role": "Barbero",
  "barber-6-desc":
    "Detallista y confiable. Da lo mejor de sí en cada corte, cada vez.",
  "barber-7-role": "Barbero",
  "barber-7-desc":
    "Técnica suave y ojo para líneas limpias. Hace que cada cliente se vea y se sienta mejor.",
  "barber-8-role": "Barbero",
  "barber-8-desc":
    "Talento fresco con habilidad seria. Trae estilo moderno y ejecución precisa a cada cita.",

  // Reviews
  "reviews-label": "LA GENTE HA HABLADO",
  "reviews-heading": "Lo Que Dicen Nuestros Clientes",
  "reviews-rating": "4.9/5 · 550+ Reseñas",
  "review-1":
    "\u201CLa mejor barbería de la ciudad. Todos los barberos son excelentes — no importa a quién te toque, sales viéndote increíble. Sin tiempos de espera y siempre amigables.\u201D",
  "review-2":
    "\u201CQuedó increíble. La atención al detalle es de otro nivel. Además tienen un área de juegos para niños — mi hijo ahora espera con ganas ir a cortarse el pelo.\u201D",
  "review-3":
    "\u201C¡La mejor barbería! Profesionales excelentes. Se toman el tiempo para entender exactamente lo que quieres y cumplen cada vez. Altamente recomendado.\u201D",
  "review-author": "Cliente Verificado",
  "review-source": "Reseña de Google",

  // Social
  "social-label": "MANTENTE CONECTADO",
  "social-heading": "Síguenos en Instagram",
  "social-text":
    "Mantente al día con cortes frescos, nuevos estilos, novedades de la barbería y contenido detrás de cámaras. Únete a la comunidad AJ23.",

  // Booking
  "booking-label": "RESERVA TU CORTE",
  "booking-heading":
    '¿Listo Para Verte <em style="font-style:italic;color:var(--gold);">Increíble?</em>',
  "booking-intro":
    "Sin cita también se atiende. Se recomienda hacer reservación para asegurar tu lugar. Elige tu barbero y reserva tu turno abajo.",
  "booking-widget-label": "Cómo Se Verá",
  "booking-confirm": "CONFIRMAR RESERVA",
  "booking-fallback": "¿TIENES PROBLEMAS? RESERVA DIRECTAMENTE EN BOOKSY",
  "booking-booksy-btn": "Reservar en Booksy",

  // Find Us
  "findus-label": "ENCUÉNTRANOS",
  "findus-heading": "Ven a Visitarnos",
  "findus-location-label": "Ubicación",
  "findus-location":
    "2441 NW 43rd St, Unit 6b<br>Gainesville, FL 32606",
  "findus-hours-label": "Horario",
  "findus-hours": "Lun – Sáb: 9AM – 7PM<br>Dom: 10AM – 2PM",
  "findus-contact-label": "Contacto",
  "findus-directions": "Cómo Llegar →",

  // Footer
  "footer-copy": "© 2026 AJ23 Barbershop. Todos los derechos reservados.",
};
