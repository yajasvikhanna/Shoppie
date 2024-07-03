import React from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import elec1 from '../../Assets/elec1.avif';
import elec2 from '../../Assets/elec2.avif';
import elec3 from '../../Assets/elec3.avif';
import elec6 from '../../Assets/elec6.avif';

export const Electronics = (props) =>{
    const navigate = useNavigate();
    const electronics=props.data.filter((data)=>{
        return(data.category==="electronics")
    });
    const dataPushHandler=()=>{
        navigate('/products', { state:  {data: electronics, pageTitle: "Top Electronics Items"} });        
    }
    return(
        <div className="container-fluid py-5">
            <div className="py-5 text-center">
                <h3 className="display-6 text-uppercase">Top Offers on Electronics</h3>
                <p className="lead">Buy electronics with the latest and the best offers.</p>
            </div>
                <div className="row my-3">
                    <div className="col-12 col-sm-6 py-3">
                        <div className="card">
                            <div className="text-decoration-none text-dark">
                                <img className="card-img-top" src={elec2} alt="Electronics" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button onClick={dataPushHandler} className="btn btn-primary">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 py-3">
                        <div className="card">
                            <div onClick={dataPushHandler} className="text-decoration-none text-dark">
                                <img className="card-img-top" src={elec3} alt="Electronics" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/" className="btn btn-primary">Buy now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
                <div className="row my-3">
                    <div className="col-12 col-sm-6 py-3">
                        <div className="card">
                            <div onClick={dataPushHandler} className="text-decoration-none text-dark">
                                <img className="card-img-top" src={elec1} alt="Electronics" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/" className="btn btn-primary">Buy now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 py-3">
                        <div className="card">
                            <div onClick={dataPushHandler} className="text-decoration-none text-dark">
                                <img className="card-img-top" src={elec6} alt="Electronics" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/" className="btn btn-primary">Buy now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                          
        </div>
    );
}