import type { CartProduct, Product } from './models/product'

export const catalogueProducts: Product[] = [
  {
    id: 1,
    name: 'Светодиодная лампа H7',
    price: 120,
    stock: 5000,
    description: 'Светодиодная лампа для головного света.',
    compatibility: 'H7',
    energy_rating: 'A+',
    created_at: '2026-05-01T00:00:00Z',
    updated_at: '2026-05-01T00:00:00Z',
    images: [
      {
        id: 1,
        product_id: 1,
        image_url: 'https://cataas.com/cat/0F0IKAPOdWiE755P?position=center',
        sort_order: 0,
        created_at: '2026-05-01T00:00:00Z',
      },
      {
        id: 2,
        product_id: 1,
        image_url: 'https://cataas.com/cat/0GC9MRUAqxhBzPyA?position=center',
        sort_order: 1,
        created_at: '2026-05-01T00:00:00Z',
      },
      {
        id: 3,
        product_id: 1,
        image_url: 'https://cataas.com/cat/0mstmOIucwiN80jb?position=center',
        sort_order: 2,
        created_at: '2026-05-01T00:00:00Z',
      },
    ],
  },
  {
    id: 2,
    name: 'Галогенная лампа 12V',
    price: 120,
    stock: 5000,
    description: 'Галогенная лампа для штатных фар.',
    compatibility: '12V',
    energy_rating: null,
    created_at: '2026-05-01T00:00:00Z',
    updated_at: '2026-05-01T00:00:00Z',
    images: [],
  },
  {
    id: 3,
    name: 'Комплект салонных ламп',
    price: 120,
    stock: 5000,
    description: 'Набор ламп для освещения салона.',
    compatibility: 'Универсальная',
    energy_rating: 'A',
    created_at: '2026-05-01T00:00:00Z',
    updated_at: '2026-05-01T00:00:00Z',
    images: [
      {
        id: 4,
        product_id: 3,
        image_url: 'https://cataas.com/cat/0RU7ZkgzyvWv8UJG?position=center',
        sort_order: 0,
        created_at: '2026-05-01T00:00:00Z',
      },
    ],
  },
  {
    id: 4,
    name: 'Комплект противотуманных ламп',
    price: 120,
    stock: 0,
    description: 'Комплект ламп для противотуманных фар.',
    compatibility: 'Универсальная',
    energy_rating: 'A',
    created_at: '2026-05-01T00:00:00Z',
    updated_at: '2026-05-01T00:00:00Z',
    images: [
      {
        id: 5,
        product_id: 4,
        image_url: 'https://cataas.com/cat/0ztFbDrgDV2K7yJ1?position=center',
        sort_order: 0,
        created_at: '2026-05-01T00:00:00Z',
      },
      {
        id: 6,
        product_id: 4,
        image_url: 'https://cataas.com/cat/1bJraW0IwSPm3MVd?position=center',
        sort_order: 1,
        created_at: '2026-05-01T00:00:00Z',
      },
    ],
  },
] satisfies Product[]

export const cartProducts: CartProduct[] = [
  { product: catalogueProducts[0], quantity: 20 },
  { product: catalogueProducts[1], quantity: 50 },
]
