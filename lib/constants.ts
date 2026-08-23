/**
 * Site content: services, gallery images, principles and process.
 *
 * IMAGE REPLACEMENT
 * -----------------
 * All imagery lives under /public/images, grouped by space:
 *
 *   /public/images/hero        — hero / banner imagery
 *   /public/images/kitchens    — kitchen cabinetry
 *   /public/images/laundries   — laundry cabinetry
 *   /public/images/vanities    — vanity cabinets
 *   /public/images/wardrobes   — wardrobe cabinetry
 *   /public/images/garage      — garage storage
 *   /public/images/general     — other cabinetry works, workshop, materials
 *
 * To use real project photography, drop the files into the matching folder
 * and update the `src` and `alt` values below. Nothing else needs to change.
 */

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  image: string
  alt: string
  /** Longer-form copy for the Services page. Derived only from the confirmed offering. */
  detail: string[]
}

export const services: Service[] = [
  {
    slug: 'kitchen-cabinetry',
    title: 'Kitchen Cabinetry',
    short: 'Custom cabinetry solutions for modern kitchen spaces.',
    description: 'Custom cabinetry solutions for modern kitchen spaces.',
    image: '/images/kitchens/kitchen-01.png',
    alt: 'Modern custom kitchen cabinetry with timber shelving and dark base cabinets',
    detail: [
      'Cabinetry for kitchens is built around the dimensions of the room and the way the space is used day to day — bench runs, island cabinetry, overhead cupboards, pantry storage and appliance housings.',
      'Layouts, storage and finishes are considered together so the cabinetry suits both the kitchen and the rest of the home.',
    ],
  },
  {
    slug: 'laundry-cabinetry',
    title: 'Laundry Cabinetry',
    short: 'Practical cabinetry designed to make laundry spaces more organised and functional.',
    description:
      'Practical cabinetry designed to make laundry spaces more organised and functional.',
    image: '/images/laundries/laundry-01.png',
    alt: 'Custom laundry cabinetry with integrated appliances and timber benchtop',
    detail: [
      'Laundries usually have to fit a lot into a small footprint. Cabinetry can make the space easier to work in — appliance recesses, bench space, tall storage and concealed baskets.',
      'From a full laundry room to a compact European laundry cupboard, the cabinetry is planned around the appliances and the available space.',
    ],
  },
  {
    slug: 'vanity-cabinets',
    title: 'Vanity Cabinets',
    short: 'Cabinetry solutions for bathroom and vanity spaces.',
    description: 'Cabinetry solutions for bathroom and vanity spaces.',
    image: '/images/vanities/vanity-01.png',
    alt: 'Wall-hung timber vanity cabinet with stone top and undermount basin',
    detail: [
      'Vanity cabinets are made to suit the basin, tapware and plumbing of the bathroom, with drawers and cupboards arranged around them.',
      'Wall-hung or floor-standing, single or double — the cabinet is sized to the room and finished to sit with the rest of the bathroom.',
    ],
  },
  {
    slug: 'wardrobes',
    title: 'Wardrobes',
    short: 'Storage-focused wardrobe cabinetry designed around your space.',
    description: 'Storage-focused wardrobe cabinetry designed around your space.',
    image: '/images/wardrobes/wardrobe-01.png',
    alt: 'Built-in wardrobe cabinetry with timber shelving, hanging rails and drawers',
    detail: [
      'Wardrobe cabinetry makes use of the full height and depth of the space — hanging, shelving, drawers and shoe storage set out in proportions that suit what is being stored.',
      'Built-in wardrobes, walk-in wardrobe joinery and robe fit-outs are all built to the dimensions of the room.',
    ],
  },
  {
    slug: 'garage-storage',
    title: 'Garage Storage',
    short: 'Cabinetry and storage solutions designed to organise garage spaces.',
    description: 'Cabinetry and storage solutions designed to organise garage spaces.',
    image: '/images/garage/garage-01.png',
    alt: 'Garage storage cabinetry with full-height cupboards, overhead lockers and a workbench',
    detail: [
      'Garages tend to hold everything that does not have a home elsewhere. Cabinetry brings order to that — tall cupboards, overhead storage, open shelving and bench space.',
      'Storage is planned around the vehicle clearance and the way the garage is actually used, whether for tools, sports gear or household overflow.',
    ],
  },
  {
    slug: 'other-cabinetry-works',
    title: 'Other Cabinetry Works',
    short: 'Cabinetry solutions for other residential spaces and requirements.',
    description: 'Cabinetry solutions for other residential spaces and requirements.',
    image: '/images/general/other-cabinetry-01.png',
    alt: 'Custom built-in study joinery with a floating timber desk and full-height shelving',
    detail: [
      'Cabinetry is not limited to the main rooms. Entry storage, study desks and shelving, living room joinery, linen cupboards and other built-in storage are all cabinetry work.',
      'If a space needs purpose-built storage, it can be measured, planned and built to fit.',
    ],
  },
]

export type GalleryImage = {
  src: string
  alt: string
  category: string
  /** Short editorial comment shown over the image. */
  comment: string
  /** Aspect ratio class used by the asymmetric grid. */
  span: 'tall' | 'wide' | 'square'
}

export const galleryCategories = [
  'All',
  'Kitchens',
  'Laundries',
  'Vanities',
  'Wardrobes',
  'Garage',
  'Other',
] as const

export type GalleryCategory = (typeof galleryCategories)[number]

export const gallery: GalleryImage[] = [
  {
    src: '/images/work/marble-kitchen.png',
    alt: 'Light kitchen cabinetry with a marble-look island and integrated appliances',
    category: 'Kitchens',
    comment: 'A bright, beautifully considered kitchen fitout.',
    span: 'tall',
  },
  {
    src: '/images/work/illuminated-wardrobe.png',
    alt: 'Dark built-in wardrobe with illuminated shelving',
    category: 'Wardrobes',
    comment: 'Clean lines and excellent use of vertical storage.',
    span: 'square',
  },
  {
    src: '/images/work/desktop-media-unit.png',
    alt: 'White built-in desk and overhead cabinetry with timber flooring',
    category: 'Other',
    comment: 'A crisp built-in workspace with practical storage.',
    span: 'square',
  },
  {
    src: '/images/work/tv-wall-joinery.png',
    alt: 'Custom timber and charcoal media wall cabinetry around a television',
    category: 'Other',
    comment: 'A strong media wall with thoughtful timber detailing.',
    span: 'wide',
  },
  {
    src: '/images/work/garage-wraparound-storage.png',
    alt: 'Wraparound garage storage cabinetry with open shelving',
    category: 'Garage',
    comment: 'Smart storage that makes every corner work harder.',
    span: 'tall',
  },
  {
    src: '/images/work/timber-display-shelving.png',
    alt: 'Floor-to-ceiling timber display shelving with drawers',
    category: 'Other',
    comment: 'Beautiful timber shelving with generous display space.',
    span: 'square',
  },
  {
    src: '/images/work/wardrobe-led-detail.png',
    alt: 'Illuminated wardrobe shelving and hanging storage',
    category: 'Wardrobes',
    comment: 'A refined wardrobe fitout with a warm lighting detail.',
    span: 'square',
  },
  {
    src: '/images/work/distressed-console.png',
    alt: 'Textured white entertainment console with timber floor',
    category: 'Other',
    comment: 'A distinctive console with plenty of concealed storage.',
    span: 'wide',
  },
  {
    src: '/images/work/timber-shelving-detail.png',
    alt: 'Detailed timber shelving and cabinetry with drawers',
    category: 'Other',
    comment: 'Careful proportions and a warm timber finish.',
    span: 'square',
  },
  {
    src: '/images/work/display-cabinet.png',
    alt: 'Built-in display cabinetry with open shelves and drawers',
    category: 'Other',
    comment: 'A tailored display wall designed around the room.',
    span: 'tall',
  },
  {
    src: '/images/work/dressing-room.png',
    alt: 'White dressing room cabinetry with drawers and hanging space',
    category: 'Wardrobes',
    comment: 'An organised dressing space with clear, practical storage.',
    span: 'square',
  },
  {
    src: '/images/work/wardrobe-fitout.png',
    alt: 'White built-in wardrobe cabinetry with hanging rails and drawers',
    category: 'Wardrobes',
    comment: 'A neat wardrobe fitout, made to suit the room.',
    span: 'square',
  },
]

export const principles = [
  {
    title: 'Designed Around Your Space',
    body: 'Cabinetry should work with the dimensions and requirements of the space.',
  },
  {
    title: 'Practical Storage',
    body: 'Solutions should balance appearance with everyday functionality.',
  },
  {
    title: 'Across the Home',
    body: 'From kitchens and laundries to wardrobes, vanities and garages.',
  },
] as const

export const processSteps = [
  {
    number: '01',
    title: 'Discuss',
    body: 'Understand the space and cabinetry requirements.',
  },
  {
    number: '02',
    title: 'Plan',
    body: 'Consider the layout, storage needs and desired result.',
  },
  {
    number: '03',
    title: 'Build',
    body: 'Develop the cabinetry solution.',
  },
  {
    number: '04',
    title: 'Complete',
    body: 'Bring the cabinetry into the finished space.',
  },
] as const

export const projectTypes = [
  'Kitchen',
  'Laundry',
  'Vanity',
  'Wardrobe',
  'Garage Storage',
  'Other Cabinetry',
] as const
