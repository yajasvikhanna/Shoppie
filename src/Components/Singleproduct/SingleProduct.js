import React, {Fragment, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import {AiOutlineStar} from 'react-icons/ai';
import CartContext from '../../ContextStore/CartContext';

const SingleProduct=()=>{
    const cartCtx = useContext(CartContext);
    const location = useLocation();
    const addToCartHandler = () => {
        cartCtx.addItem({
            image: location.state.data[0].image,
            title: location.state.data[0].title,
            id: location.state.data[0].id,
            rating: location.state.data[0].rating.rate,
            price: location.state.data[0].price,
            amount: 1
        });
    }
    return(
        <Fragment>
            <div className="container">
                <div className="row border-top py-5 border-muted">
                    <div className="col-12 col-md-12 col-lg-6 text-center py-3 py-md-0">
                        <img style={{width: '80%'}} src={location.state.data[0].image} alt={location.state.data[0].title}/>
                    </div>
                    <div className="col-12 px-5 col-md-12 col-lg-6">
                        <p className="lead">{location.state.data[0].title}</p>
                        <p className="small"><span className="bg-success rounded p-1 text-white">{location.state.data[0].rating.rate} <AiOutlineStar/></span> {location.state.data[0].rating.count} Ratings</p>
                        <p>{location.state.data[0].description}</p>
                        <p className="lead">PRICE</p>
                        <h3 className="display-6">${location.state.data[0].price}</h3>
                        <div className="d-flex align-items-center pt-3 mt-3 pt-lg-5 mt-lg-5">
                            <button className="btn btn-secondary text-white p-3" onClick={addToCartHandler}>ADD TO CART</button>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="container py-5">
                <h2>Related Products</h2>
                <div className="row py-5">
                    {location.state.relatedData.map((data)=>{
                        return (                            
                            <div key={data.id} className="col-6 col-md-3 my-5 text-center">
                                <img style={{width: '50%', height: '70%'}} src={data.image} alt={data.title}/>
                                <p className="lead">{data.title}</p>
                            </div>                        
                        )
                    })}
                </div>
            </div>

        </Fragment>
    );
}

export default SingleProduct;