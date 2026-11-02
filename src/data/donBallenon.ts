export interface MenuItem {
  id: string;
  name: string;
  category: 'chopear' | 'crudo' | 'barra' | 'plancha';
  categoryLabel: string;
  price: string;
  description: string;
  pairing: string;
  badge?: string;
  spiceLevel: 'Suave' | 'Medio' | 'Bravo';
  dietaryNote: string;
}

export interface LiveSession {
  day: string;
  hours: string;
  genre: string;
  atmosphere: string;
  highlightDrink: string;
}

export interface ReviewItem {
  author: string;
  visitContext: string;
  rating: string;
  date: string;
  comment: string;
  favoriteOrder: string;
}

export const BRAND_INFO = {
  name: 'Don Ballenón',
  branchName: 'Don Ballenón Américas',
  tagline: 'Marisquería de Puerto, Terraza Al Fresco y La Ballena Pacífico Bien Muerta',
  description:
    'Taberna costera y marisquería al aire libre en Av. Las Américas #206, Aguascalientes. Famosos por la Cerveza Pacífico en presentación Ballena al punto de nieve, la legendaria Coquita Batanga, los Doraditos de Marlín pa’ chopear y música en vivo de jueves a domingo.',
  address: {
    street: 'Av. Las Américas #206',
    neighborhood: 'Col. Las Américas',
    postalCode: '20239',
    city: 'Aguascalientes',
    state: 'Ags.',
    country: 'MX',
    full: 'Av. Las Américas #206, Col. Las Américas, C.P. 20239, Aguascalientes, Ags., México',
  },
  coordinates: {
    lat: 21.872281,
    lng: -102.3009464,
    display: '21.8723° N · 102.3009° W',
  },
  phone: {
    display: '+52 449 546 0406',
    raw: '+524495460406',
    whatsappUrl: 'https://wa.me/524495460406?text=Hola%20Don%20Ballen%C3%B3n%2C%20quisiera%20consultar%20disponibilidad%20hoy%20en%20Av.%20Las%20Am%C3%A9ricas',
  },
  social: {
    facebook: 'https://www.facebook.com/p/Don-Ballenon-61574440952035/',
    instagram: 'https://www.instagram.com/don_ballenon',
    instagramHandle: '@don_ballenon',
    googleMaps: 'https://maps.app.goo.gl/2ofodJEg58vRTiLD7',
  },
  rating: {
    score: '4.8',
    max: '5.0',
    count: '3,840',
    priceRange: '$200 – $500 MXN',
  },
  schedules: [
    { days: 'Lunes a Sábado', hours: '12:00 PM – 01:00 AM', statusNote: 'Cocina de mar y barra continua' },
    { days: 'Domingo', hours: '12:00 PM – 12:00 AM', statusNote: 'Tardeada familiar y cura-cruda' },
  ],
  sisterLocations: [
    {
      city: 'Aguascalientes · Tradición Centro',
      spot: 'Raíces en Calle Nieto y Norte',
      note: 'Donde nació la leyenda de la Coquita Batanga y el ambiente de puerto en Aguascalientes.',
    },
    {
      city: 'León, Guanajuato · Zona Centro',
      spot: 'C. Francisco I. Madero #825-A, Centro',
      note: 'Sucursal hermana llevando el mismo sazón del Pacífico, aguachiles y tarros bien helados.',
    },
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'doraditos-marlin',
    name: 'Doraditos de Marlín "Pa’ Chopear"',
    category: 'chopear',
    categoryLabel: 'Pa’ Chopear & Abrir Boca',
    price: '$145 MXN',
    description:
      'Dos planchitas bien doradas rellenas de marlín ahumado guisado a la perfección, servidas con su caldito caliente de camarón de la casa para remojar cada mordida.',
    pairing: 'Marida con: Ballena Pacífico helada en tarro escarchado',
    badge: 'Favorito de la Casa',
    spiceLevel: 'Medio',
    dietaryNote: '2 piezas + consomé de camarón',
  },
  {
    id: 'chiles-gueros',
    name: 'Chiles Güeros del Barrio',
    category: 'chopear',
    categoryLabel: 'Pa’ Chopear & Abrir Boca',
    price: '$165 MXN',
    description:
      'Chiles güeros asados y rellenos de queso crema fundido, camarón picado y tocino crujiente, bañados en la salsa negra picosa especial del puerto.',
    pairing: 'Marida con: Coquita Batanga con escarcha de sal de mar',
    badge: 'Imperdible',
    spiceLevel: 'Bravo',
    dietaryNote: 'Orden al centro pa’ compartir',
  },
  {
    id: 'tacos-gobernador',
    name: 'Tacos Gobernador de Muelle',
    category: 'plancha',
    categoryLabel: 'De la Plancha & Comal',
    price: '$155 MXN',
    description:
      'Camarón salteado a la mantequilla con chile poblano, cebolla y queso gratinado hasta hacer costra en tortilla recién dorada a la plancha.',
    pairing: 'Marida con: Pacífico Clara bien muerta y salsa habanera',
    spiceLevel: 'Suave',
    dietaryNote: 'Orden de 2 piezas bien reportadas',
  },
  {
    id: 'aguachile-maracuya',
    name: 'Aguachile Habanero Maracuyá',
    category: 'crudo',
    categoryLabel: 'Barra Fría & Aguachiles',
    price: '$235 MXN',
    description:
      'Camarón cristal curtido al momento y láminas frescas de atún bañadas en reducción cítrica de maracuyá natural, mango dulce y golpe franco de chile habanero.',
    pairing: 'Marida con: Ballena Pacífico preparada con clamato de la casa',
    badge: 'Firma del Capitán',
    spiceLevel: 'Bravo',
    dietaryNote: 'Camarón + atún fresco con tostadas',
  },
  {
    id: 'aguachile-tostado',
    name: 'Aguachile Rojo & El Tostado',
    category: 'crudo',
    categoryLabel: 'Barra Fría & Aguachiles',
    price: '$215 MXN',
    description:
      'Camarón mariposa curtido en limón verde con salsa tatemada de chiles secos y chiltepín quebrado, coronado con pepino crujiente, cebolla morada y aguacate.',
    pairing: 'Marida con: Tarro michelado con mezcla de salsas negras',
    badge: 'Levanta-Muertos',
    spiceLevel: 'Bravo',
    dietaryNote: 'Ideal para curar la cruda',
  },
  {
    id: 'ceviche-manila',
    name: 'Ceviche Manila Tropical',
    category: 'crudo',
    categoryLabel: 'Barra Fría & Aguachiles',
    price: '$195 MXN',
    description:
      'Cubos de pescado fresco curtidos en limón real con dados de mango Manila, piña asada, cebolla morada, cilantro fresco y un toque aromático de habanero.',
    pairing: 'Marida con: Coquita Batanga bien cargada de limón',
    spiceLevel: 'Medio',
    dietaryNote: 'Fresco y ligero al sol',
  },
  {
    id: 'ceviche-tradicional',
    name: 'Ceviche de Pescado del Puerto',
    category: 'crudo',
    categoryLabel: 'Barra Fría & Aguachiles',
    price: '$180 MXN',
    description:
      'La receta clásica de malecón: tilapia fresca en jugo de limón, cebolla morada, jitomate firme, aceituna verde rebanada y un hilo de aceite de oliva extra virgen.',
    pairing: 'Marida con: Cerveza Pacífico en botella bien fría',
    spiceLevel: 'Suave',
    dietaryNote: 'Receta tradicional mazatleca',
  },
  {
    id: 'ballena-pacifico',
    name: 'La Ballena Pacífico "Punto de Nieve"',
    category: 'barra',
    categoryLabel: 'La Barra & La Ballena',
    price: '$115 MXN',
    description:
      'Nuestra razón de ser: Cerveza Pacífico Clara en formato familiar (Ballena de 940 ml) sacada de hielera salada al punto exacto antes de congelarse, acompañada de tarros escarchados.',
    pairing: 'Pídela natural, con limón y sal o en tarro preparado',
    badge: 'Emblema del Lugar',
    spiceLevel: 'Suave',
    dietaryNote: 'Botella familiar 940 ml',
  },
  {
    id: 'coquita-batanga',
    name: 'La Famosa "Coquita Batanga"',
    category: 'barra',
    categoryLabel: 'La Barra & La Ballena',
    price: '$130 MXN',
    description:
      'El trago más pedido de Av. Las Américas: tequila 100% de agave, jugo de limón recién exprimido, refresco de cola helado, hielo en bloque y borde generoso de sal en grano.',
    pairing: 'Acompaña perfecto los Chiles Güeros y el Aguachile Rojo',
    badge: 'Sello de Aguascalientes',
    spiceLevel: 'Suave',
    dietaryNote: 'Preparada con cuchillo de bar tradicional',
  },
];

export const LIVE_SESSIONS: LiveSession[] = [
  {
    day: 'Jueves de Despegar',
    hours: '06:00 PM – 12:30 AM',
    genre: 'DJ Set Tropical & Cumbia Costera',
    atmosphere: 'El arranque oficial del fin de semana en terraza abierta con cubetas de Pacífico y botana de mar.',
    highlightDrink: 'Ronda de Coquitas Batangas y Doraditos',
  },
  {
    day: 'Viernes de Puerto Bravo',
    hours: '05:00 PM – 01:00 AM',
    genre: 'Salsa en Vivo & Norteño de Tarima',
    atmosphere: 'Ambiente festivo a tope: orquesta de salsa para bailar entre mesas y grupos norteños al caer la noche.',
    highlightDrink: 'Ballenas Pacífico al centro de la mesa',
  },
  {
    day: 'Sábado de Malecón',
    hours: '03:00 PM – 01:00 AM',
    genre: 'Banda / Norteño en Vivo + DJ Residente',
    atmosphere: 'Desde la comida familiar soleada hasta la fiesta nocturna con cortesía de bienvenida en recepción.',
    highlightDrink: 'Tarros preparados y Aguachile Habanero Maracuyá',
  },
  {
    day: 'Domingo Levanta-Muertos',
    hours: '12:00 PM – 10:00 PM',
    genre: 'Acústico Costero, Salsa Clásica & Futbol',
    atmosphere: 'El santuario oficial contra la cruda en Aguascalientes: caldito de camarón humeante y brisa en la terraza.',
    highlightDrink: 'Michelada de la Casa con clamato y camarón seco',
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    author: 'Alejandro M. · Local Guide',
    visitContext: 'Tardeada con amigos en terraza',
    rating: '5.0 / 5.0',
    date: 'Reseña verificada en Google Maps',
    comment:
      'El ambiente está increíble para ir con amigos o en pareja. Mientras esperábamos mesa en hora pico la hostess nos ofreció una cortesía bien fría. Las Coquitas Batangas y los Doraditos de Marlín pa’ chopear no tienen madre.',
    favoriteOrder: 'Coquita Batanga + Doraditos de Marlín',
  },
  {
    author: 'Fernanda R. · Aguascalientes',
    visitContext: 'Viernes de salsa en vivo',
    rating: '4.9 / 5.0',
    date: 'Reseña verificada en Google Maps',
    comment:
      'De mis lugares favoritos en Av. Las Américas. Los viernes con grupo de salsa en vivo se pone buenísimo el ambiente. Los Chiles Güeros rellenos de camarón y tocino pican rico y las Ballenas Pacífico llegan vestidas de hielo.',
    favoriteOrder: 'Chiles Güeros del Barrio + Ballena Pacífico',
  },
  {
    author: 'Carlos G. · Visitante frecuente',
    visitContext: 'Domingo de curar la cruda',
    rating: '5.0 / 5.0',
    date: 'Reseña verificada en Google Maps',
    comment:
      'Para aliviar la cruda el domingo no hay mejor punto. Pides el Aguachile Habanero Maracuyá o el Rojo, un caldito para chopear y una Ballena bien muerta. Precios súper justos ($250-$400 por persona) y meseros rapidísimos.',
    favoriteOrder: 'Aguachile Habanero Maracuyá',
  },
];
