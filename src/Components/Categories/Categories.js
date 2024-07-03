import React, {Fragment, useReducer} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const categoryReducer=(state, action)=>{
    switch (action.type){
        case "all_products":
            return {value: action.val}
        case "men_products":
            return {value: action.val}
        case "women_products":
            return {value: action.val}
        case "elec_products":
            return {value: action.val}
        case "jewe_products":
            return {value: action.val}
        case "search_products":
            return {value: action.val}
        default:
            return {value: []};
    }
    
}

const Categories = (props) =>{
    const allProducts = props.products;
    const [categoryState, dispatchCategory]=useReducer(categoryReducer, {value: allProducts});

    const allProductsHandler=()=>{
        dispatchCategory({type: "all_products", val: allProducts});
    }
    const mensProductsHandler=()=>{
        dispatchCategory({type: "men_products", val: allProducts.filter((data)=>{
                return (data.category==="men's clothing")
            })})
    }
    const womensProductsHandler=()=>{
        dispatchCategory({type: "women_products", val: allProducts.filter((data)=>{
                return (data.category==="women's clothing")
            })})
    }
    const elecProductsHandler=()=>{
        dispatchCategory({type: "elec_products", val: allProducts.filter((data)=>{
                return (data.category==="electronics")
        })})
    }
    const jewProductsHandler=()=>{
        dispatchCategory({type: "jewe_products", val: allProducts.filter((data)=>{
                return (data.category==="jewelery")
            })})
    }
    const searchHandler=(e)=>{
        dispatchCategory({type: "search_products", val: allProducts.filter((data)=>{
            return (data.title.toLowerCase().includes(e.target.value.toLowerCase()))
        })});
    }
    
    const navigate = useNavigate();
    const singleProductHandler=(item)=>{
        const singleProduct = [item];
        const updatedRelatedProducts = allProducts.filter((currItem)=>{
            return (currItem.category===item.category)
        });
        const relatedProducts = updatedRelatedProducts;
        navigate('/singleproduct', { state:  {data: singleProduct, relatedData: relatedProducts} }); 
    }

    return(
        <Fragment>
            <div className="container-fluid py-5">
                <div className="text-center">
                    <h3 className="display-6 text-uppercase">Categories</h3>
                </div>
            </div>
            <div className="container">
                <div className="row my-3">
                    <div className="col-4 col-lg-2 my-2 my-lg-0">
                        <button className="px-2 btn btn-outline-dark" onClick={allProductsHandler}>All Products</button>
                    </div>
                    <div className="col-4 col-lg-2 my-2 my-lg-0">
                        <button className="px-2 btn btn-outline-dark" onClick={mensProductsHandler}>Men's Wear</button>
                    </div>
                    <div className="col-4 col-lg-2 my-2 my-lg-0">
                        <button className="px-2 btn btn-outline-dark" onClick={womensProductsHandler}>Women's Wear</button>
                    </div>
                    <div className="col-4 col-lg-2 my-2 my-lg-0">
                        <button className="px-2 btn btn-outline-dark" onClick={elecProductsHandler}>Electronics</button>
                    </div>
                    <div className="col-4 col-lg-2 my-2 my-lg-0">
                        <button className="px-2 btn btn-outline-dark" onClick={jewProductsHandler}>Jewellery</button>
                    </div>
                    <div className="col-4 col-lg-2 my-2 my-lg-0">
                        <form className="form-inline">
                            <input onChange={searchHandler} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>        
                </div>            
                {categoryState.value.map((data)=>{
                    return(            
                        <div key={data.id}>            
                            <div className="row border-top py-5 border-muted">
                                <div className="col-12 col-md-12 col-lg-2 text-center py-3 py-md-0">
                                    <img  style={{width: '80%'}} src={data.image} alt={data.title}/>
                                </div>
                                <div className="col-12 col-md-10 px-5 col-lg-8">
                                    <p className="lead">{data.title}</p>
                                    <p className="small"><span className="bg-success rounded p-1 text-white">{data.rating.rate} <AiOutlineStar/></span> {data.rating.count} Ratings</p>
                                    <p>{data.description}</p>
                                    <button onClick={() => singleProductHandler(data)} className="btn btn-warning">Get Details</button>
                                </div>
                                <div className="col-12 col-md-2 px-5 col-lg-2">
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

export default Categories;