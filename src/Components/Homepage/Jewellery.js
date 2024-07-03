import React from 'react';
import Styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';

const Jewellery=(props)=>{
    const navigate = useNavigate();
    const jewellery=props.data.filter((data)=>{
        return(data.category==="jewelery")
    });
    const dataPushHandler=()=>{
        navigate('/products', { state:  {data: jewellery, pageTitle: "Best Jewellery Collection"} });        
    }
    return(
        <div className="container-fluid py-5">
            <div className="py-5 text-center">
                <h3 className="display-6 text-uppercase">Best Deals on Jewellery</h3>
                <p className="lead">Grab the best deals with the best offers now.</p>
            </div>
            {props.data.filter((data)=>{
                        return((data.id===6 || data.id===7 || data.id===8));
                    }).map((data, index)=>{
                return(
                    ((index%2===0) ? 
                        <div className={`${Styles['row-height']} row my-3 text-right`} key={data.id}>
                            <div className={`${Styles['content-bg']} col-12 col-sm-6 px-5 py-5 d-flex flex-column justify-content-center align-items-end`}>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                                <p>${data.price}</p>
                                <button onClick={dataPushHandler} className="btn btn-primary">Buy now</button>
                            </div>
                            <div className="col-12 col-sm-6 text-center">
                                <div className="text-decoration-none text-dark">
                                    <img className="py-2" style={{width:'50%'}} src={data.image} alt={data.title}/>
                                </div>
                            </div>
                        </div> : 
                        <div key={data.id} className={`${Styles['row-height']} row my-3 text-left`}>
                            <div className="col-12 col-sm-6 text-center">
                                <img className="py-2" style={{width:'50%'}} src={data.image} alt={data.title}/>
                            </div>
                            <div className={`${Styles['content-bg']} col-12 col-sm-6 px-5 py-5 d-flex flex-column justify-content-center align-items-start`}>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                                <p>${data.price}</p>
                                <button onClick={dataPushHandler} className="btn btn-primary">Buy now</button>
                            </div>                            
                        </div>
                    )                                         
            )})}
        </div>
    );
}

export default Jewellery;