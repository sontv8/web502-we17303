

const ProductPage = (props) => {
    const removeProduct = (id) => {
        fetch('http://localhost:3000/products/' + id, {
            method: 'DELETE'
        })
    }
    return (
        <div>
            {props.products.map((item) => {
                return <div key={item.id}>
                    <h2>{item.name}</h2>
                    <button onClick={() => removeProduct(item.id)}>Remove</button>
                </div>

            })}
        </div>
    )
}

export default ProductPage