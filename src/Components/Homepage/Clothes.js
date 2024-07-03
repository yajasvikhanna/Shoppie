import React from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Clothes=(props)=>{

    const navigate = useNavigate();
    const clothes=props.data.filter((data)=>{
        return(data.category==="men's clothing" || data.category==="women's clothing")
    });
    const dataPushHandler=()=>{
        navigate('/products', { state:  {data: clothes, pageTitle: "Trending Clothes Collection"} });        
    }
    return(
        <div className="container-fluid text-center py-5">
                <div className="py-5">
                    <h3 className="display-6 text-uppercase">CLOTHES COLLECTION</h3>
                </div>
                <div className="row">
                    {props.data.filter((data)=>{
                            return((data.id===1 || data.id===2 || data.id===15 || data.id===20));
                        }).map((data)=>{
                            return(
                                <div className="card rounded-0 py-5 border-top-0 border-left-0 col-12 col-sm-6 col-lg-3 text-center" key={data.id}>
                                    <div className="text-decoration-none text-dark">
                                        <img className="card-img-top" style={{height: '400px'}} src={data.image} alt={data.title}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">${data.price}</p>
                                            <button onClick={dataPushHandler} className="btn btn-primary">Buy now</button>
                                        </div>
                                    </div>
                                </div>                                
                            )
                    })}
                    
                </div>
        </div>
    );
}

export default Clothes;