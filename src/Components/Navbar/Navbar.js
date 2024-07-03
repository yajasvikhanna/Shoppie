import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { GrHomeRounded } from 'react-icons/gr';
import {PiShoppingCartSimple} from 'react-icons/pi';
import {BiCategory} from 'react-icons/bi';
import Styles from './Navbar.module.scss';
import CartContext from '../../ContextStore/CartContext';


const Navbar=()=>{
    const cartCtx = useContext(CartContext);
    const itemsInCart = cartCtx.items.reduce((acc, curr)=>{
        if (curr.amount >= 1) {
            acc = acc + 1;
        }
        return acc;
    }, 0);

    return (
        <nav className={` ${Styles['nav-bg']} navbar sticky-top text-dark navbar-light justify-content-between`}>
            <Link className="navbar-brand px-3 px-md-4 px-lg-5" to="/">Shoppie</Link>
            <div className="d-flex align-items-center justify-content-around px-2 px-md-4 px-lg-5">
                <ul className="d-md-flex flex-row navbar-nav">
                    <li className="nav-item px-md-5">
                        <Link className="d-none d-md-block nav-link text-dark" aria-current="page" to="/">Home</Link>
                        <Link className="d-block d-md-none nav-link text-dark px-3 px-md-0" aria-current="page" to="/"><GrHomeRounded className="lead"/></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="d-none d-md-block nav-link text-dark" to="/categories">Categories</Link>
                        <Link className="d-block d-md-none nav-link text-dark px-3 px-md-0" aria-current="page" to="/categories"><BiCategory className="lead"/></Link>
                    </li>
                </ul>
                <div className="d-none d-md-block px-md-4 px-lg-5">
                    <p className="small my-0">Hi,</p>
                    <h5 className="lead my-0">Username</h5>
                </div>
                {/* <span className={`${Styles['total-cart-items']}`}>0</span> */}
                <Link className="text-dark text-decoration-none px-3 px-md-0" to="/cart">
                    <PiShoppingCartSimple className="display-6"/>
                    <sup className="fs-6">{itemsInCart>9 ? 9 + "+" : itemsInCart}</sup>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;