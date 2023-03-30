import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
// import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import { addProduct, updateProduct } from './api/product'
import UpdateProductPage from './pages/admin/UpdateProduct'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'

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
  const onHandleAdd = (product) => {
    addProduct(product)
  }
  const onHandleUpdate = (product) => { // hàm xử lý khi submit form update
    updateProduct(product).then(() => setProduct(products.map(item => item.id == product.id ? product : item)))
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
          {/* nested router - router lồng nhau */}
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path='products'>
              <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
              <Route path=':id' element={<ProductDetailPage products={products} />} />
            </Route>
          </Route>

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' >
              <Route index element={<ProductManagementPage />} />
              <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} />} />
            </Route>
          </Route>
          {/* <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='/products/:id' element={<ProductDetailPage products={products} />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/products' element={<ProductManagementPage />} />
          <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
          <Route path='/admin/products/:id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
