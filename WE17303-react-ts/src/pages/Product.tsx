

const ProductPage = (props) => {

    return (
        <div>
            {props.products.map((item) => {
                return <div key={item.id}>
                    <h2>{item.name}</h2>
                    <button>Remove</button>
                </div>

            })}
        </div>
    )
}

export default ProductPage