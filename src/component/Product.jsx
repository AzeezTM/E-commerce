import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import { Link } from "react-router-dom";




const Product = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentTop = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentTop) {
                setData(await response.clone().json());
                setShow(await response.json());
                setLoading(false);
                console.log(show);
            }
            console.log(data);
            return () => {
                componentTop = false;
            }
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>

                <div className="col-md-3">
                    <Skeleton  height={350}/>
                </div>

                <div className="col-md-3">
                    <Skeleton  height={350}/>
                </div>
                

                <div className="col-md-3">
                    <Skeleton  height={350}/>
                </div>
                
                
                
            </>
        );

    };

    const filterProduct = (cart) => {
        const updateList = data.filter((x) =>x.category === cart);
        setShow(updateList);

    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center pb-5 mb-5">
                    <button className="btn btn-outline-dark me-2"
                    onClick={() => setShow(data)}>All</button>
                    <button className="btn btn-outline-dark me-2"
                     onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2"
                     onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2"
                     onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2"
                     onClick={() => filterProduct ("electronics")}>Electronics</button>
                </div>

                {show.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}> 
                                    <img src={product.image} className="card-img-top"
                                     alt={product.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                            <p className="card-text lead fw-bold">
                                               #{product.price}
                                            </p>
                                            <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                                                Add to Cart</Link>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5 ">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>

                </div>

                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>

    )
}

export default Product;