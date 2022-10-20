import React from "react";
import Product from "./Product";


const Home = () => {
    return (
        <div className="muby">
            <div className="card bg-dark text-white border-0">
                <img src="/adpic/advert.jpeg" className="card-img" alt="background" 
                height= "600px"/>
                <div className="card-img-overlay d-flex flex-column 
                justify-content-center ms-5">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2 fw-bolder text-info">
                        CHECK OUT ALL THE TRENDS</p>

                    </div>
                    
                   
                </div>
            </div>
            <Product/>

        </div>

    )
}

export default Home;   