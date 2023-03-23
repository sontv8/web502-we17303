import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => { // nhận props từ App.tsx 
    // props - onAdd
    const navigate = useNavigate() // khởi tạo navigate để điều hướng
    const [inputValue, setInputValue] = useState({}) // khởi tạo state để lưu giá trị input
    const onHandleChange = (e) => { // hàm xử lý sự kiện khi input thay đổi
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value });
        // n -> n
        // e -> e

        // setInputValue({ name: e.target.value }); // set giá trị cho state

    }
    const onHandleSubmit = (e) => { // hàm xử lý sự kiện khi submit form
        e.preventDefault()
        // console.log(inputValue);

        props.onAdd(inputValue); // gọi hàm onAdd từ props truyền vào
        navigate('/admin/products') // điều hướng đến trang /admin/products
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Product Name' onChange={onHandleChange} name='name' />
                <input type="number" onChange={onHandleChange} name='price' />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage