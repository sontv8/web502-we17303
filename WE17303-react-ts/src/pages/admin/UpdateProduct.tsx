import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProductPage = (props) => {
    const { id } = useParams() // lấy id từ url
    const [product, setProduct] = useState({}) // khởi tạo state product
    useEffect(() => {
        const product = props.products.find(item => item.id == id) // tìm product có id trùng với id trên url
        setProduct(product) // set lại giá trị cho state product
    })

    const [inputValue, setInputValue] = useState({}) // khởi tạo state inputValue
    const onHandleChange = (e) => { // hàm xử lý khi input thay đổi
        const { name, value } = e.target // lấy name và value của input
        setInputValue({ ...inputValue, [name]: value }) // set lại giá trị cho inputValue
    }
    const onHandleSubmit = (e) => {// hàm xử lý khi submit form
        e.preventDefault()
        const updateData = { ...product, ...inputValue } // gộp 2 object lại với nhau (nếu inputValue không có giá trị sẽ giữ nguyên giá trị cũ)
        props.onUpdate(updateData);
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
                <input type="number" defaultValue={product?.price} onChange={onHandleChange} name='price' />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateProductPage