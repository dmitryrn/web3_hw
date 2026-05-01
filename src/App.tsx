import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartPage from './pages/Cart/Page'
import CatalogPage from './pages/Catalog/Page'
import CheckoutPage from './pages/Checkout/Page'
import OrderConfirmationPage from './pages/OrderConfirmation/Page'
import ProductPage from './pages/Product/Page'

export type Product = {
  id: number
  name: string
  price: number
  stock: number
  description: string
  image_url: string | null
  compatibility: string | null
  energy_rating: string | null
  created_at: string
  updated_at: string
}

export type CartProduct = {
  product: Product
  quantity: number
}

const catalogueProducts: Product[] = [
  {
    id: 1,
    name: 'Светодиодная лампа H7',
    price: 120,
    stock: 5000,
    description: 'Светодиодная лампа для головного света.',
    image_url: 'https://dummyjson.com/image/150/1',
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
    image_url: 'https://dummyjson.com/image/150/2',
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
    image_url: 'https://dummyjson.com/image/150/3',
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
    image_url: 'https://dummyjson.com/image/150/4',
    compatibility: 'Универсальная',
    energy_rating: 'A',
    created_at: '2026-05-01T00:00:00Z',
    updated_at: '2026-05-01T00:00:00Z',
  },
] satisfies Product[]

const cartProducts: CartProduct[] = [
  { product: catalogueProducts[0], quantity: 20 },
  { product: catalogueProducts[1], quantity: 50 },
]

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <main className="page-content">
          <Routes>
            <Route path="/" element={<CatalogPage products={catalogueProducts} />} />
            <Route path="/products/:productId" element={<ProductPage product={catalogueProducts[0]} />} />
            <Route path="/cart" element={<CartPage products={cartProducts} />} />
            <Route path="/checkout" element={<CheckoutPage products={cartProducts} />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
