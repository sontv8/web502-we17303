import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    // props - onAdd
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({})
    const onHandleChange = (e) => {
        setInputValue({ name: e.target.value });

    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        props.onAdd(inputValue);
        navigate('/admin/products')
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Product Name' onChange={onHandleChange} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage