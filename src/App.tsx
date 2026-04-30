import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartPage from './pages/Cart/Page'
import CatalogPage from './pages/Catalog/Page'
import CheckoutPage from './pages/Checkout/Page'
import OrderConfirmationPage from './pages/OrderConfirmation/Page'
import ProductPage from './pages/Product/Page'

const mockProducts = [
  { id: '1', name: 'Светодиодная лампа H7', price: '120 руб.', stock: 5000 },
  { id: '2', name: 'Галогенная лампа 12V', price: '120 руб.', stock: 5000 },
  { id: '3', name: 'Комплект салонных ламп', price: '120 руб.', stock: 5000 },
  { id: '4', name: 'Комплект противотуманных ламп', price: '120 руб.', stock: 0 },
]

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <main className="page-content">
          <Routes>
            <Route path="/" element={<CatalogPage products={mockProducts} />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
