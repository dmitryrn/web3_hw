export type Product = {
  id: number
  name: string
  price: number
  stock: number
  description: string
  image_urls: string[]
  compatibility: string | null
  energy_rating: string | null
  created_at: string
  updated_at: string
}

export type CartProduct = {
  product: Product
  quantity: number
}

export const catalogueProducts: Product[] = [
  {
    id: 1,
    name: 'Светодиодная лампа H7',
    price: 120,
    stock: 5000,
    description: 'Светодиодная лампа для головного света.',
    image_urls: [
      'https://cataas.com/cat/0F0IKAPOdWiE755P?position=center',
      'https://cataas.com/cat/0GC9MRUAqxhBzPyA?position=center',
      'https://cataas.com/cat/0mstmOIucwiN80jb?position=center',
    ],
    compatibility: 'H7',
    energy_rating: 'A+',
    created_at: '2026-05-01T00:00:00Z',
    updated_at: '2026-05-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'Галогенная лампа 12V',
    price: 120,
    stock: 5000,
    description: 'Галогенная лампа для штатных фар.',
    image_urls: [],
    compatibility: '12V',
    energy_rating: null,
    created_at: '2026-05-01T00:00:00Z',
    updated_at: '2026-05-01T00:00:00Z',
  },
  {
    id: 3,
    name: 'Комплект салонных ламп',
    price: 120,
    stock: 5000,
    description: 'Набор ламп для освещения салона.',
    image_urls: ['https://cataas.com/cat/0RU7ZkgzyvWv8UJG?position=center'],
    compatibility: 'Универсальная',
    energy_rating: 'A',
    created_at: '2026-05-01T00:00:00Z',
    updated_at: '2026-05-01T00:00:00Z',
  },
  {
    id: 4,
    name: 'Комплект противотуманных ламп',
    price: 120,
    stock: 0,
    description: 'Комплект ламп для противотуманных фар.',
    image_urls: [
      'https://cataas.com/cat/0ztFbDrgDV2K7yJ1?position=center',
      'https://cataas.com/cat/1bJraW0IwSPm3MVd?position=center',
    ],
    compatibility: 'Универсальная',
    energy_rating: 'A',
    created_at: '2026-05-01T00:00:00Z',
    updated_at: '2026-05-01T00:00:00Z',
  },
] satisfies Product[]

export const cartProducts: CartProduct[] = [
  { product: catalogueProducts[0], quantity: 20 },
  { product: catalogueProducts[1], quantity: 50 },
]
