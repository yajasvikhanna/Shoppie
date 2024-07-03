import React, {Fragment} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Products=()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const singleProductHandler=(item)=>{
        const singleProduct = [item];
        const updatedRelatedProducts = location.state.data.filter((currItem)=>{
            return (currItem.category===item.category)
        });
        const relatedProducts = updatedRelatedProducts;
        navigate('/singleproduct', { state:  {data: singleProduct, relatedData: relatedProducts} }); 
    }
    return(
        <Fragment>
            <div className="container-fluid py-5">
                <div className="text-center">
                    <h3 className="display-6 text-uppercase">{location.state.pageTitle}</h3>
                </div>
            </div>
            <div className="container">
                {location.state.data.map((data)=>{
                    return(            
                        <div key={data.id}>            
                            <div className="row border-top py-5 border-muted">
                                <div className="col-12 col-md-12 col-lg-2 text-center py-3 py-md-0">
                                    <img style={{width: '80%'}} src={data.image} alt={data.title}/>
                                </div>
                                <div className="col-12 col-md-10 px-5 col-lg-8">
                                    <p className="fs-4" onClick={singleProductHandler}>{data.title}</p>
                                    <p className="small"><span className="bg-success rounded p-1 text-white">{data.rating.rate} <AiOutlineStar/></span> {data.rating.count} Ratings</p>
                                    <p>{data.description}</p>
                                    <button onClick={() => singleProductHandler(data)} className="btn btn-warning">Get Details</button>
                                </div>
                                <div className="col-12 px-5 col-md-2 col-lg-2">
                                    <p className="lead">PRICE</p>
                                    <h3 className="display-6">${data.price}</h3>
                                </div>
                            </div> 
                        </div>                       
                    )
                })}
            </div>
        </Fragment>
    );
}

export default Products;