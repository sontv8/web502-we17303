import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])

  const onHandleRemove = (id) => {

    fetch('http://localhost:3000/products/' + id, {
      method: 'DELETE'
    }).then(() => setProduct(products.filter(item => item.id != id)))
  }
  return (
    <div className="App">
      {/* 
        / - Homepage
        /products - Product Page
        /products/:id - Detail
      */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='/products/:id' element={<ProductDetailPage products={products} />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
