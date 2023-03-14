import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([])

  const increment = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  const removeItem = (id) => {
    fetch('http://localhost:3000/products/' + id, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => {
        setProducts(products.filter(item => item.id !== id))
      })
  }
  return (
    <div className="App">
      {count}
      <button onClick={increment}>Increment</button>
      <hr />
      {products.map(item => (
        <div key={item.id}>{item.name}
          <button onClick={() => removeItem(item.id)}>Remove</button></div>
      ))}
    </div>
  )
}

export default App
