import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux"
import {delCart} from "../redux/action/index"




function Cart() {
    
 const state = useSelector((state) => state.addCart)
 const dispatch = useDispatch()


 
    return (
        <>
        <div>
        <div className='row'>
            <div className='col-md-4'>
                <img src={product.image} alt={product.title}
                    height="200px" width="100px" />

            </div>

            <div className='col-md-4'>
                <h3>{product.title}</h3>
                <p className='lead fw-bold'>
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price}
                </p>
                <button className='btn btn-outline-dark me-4' onClick={() => handleButton(product)}>
                    <i className='fa fa-minus'></i>
                </button>

                <button className='btn btn-outline-dark me-4' onClick={() => handleButton(product)}>
                    <i className='fa fa-plus'></i>
                </button>
            </div>

        </div>
        </div>
        </>
    )
}

export default Cart;