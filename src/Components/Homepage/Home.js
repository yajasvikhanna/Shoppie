import React, {Fragment} from 'react';
import HeroSection from './HeroSection';
import Jewellery from './Jewellery';
import Clothes from './Clothes';
import { Electronics } from './Electronics';

const Home=(props)=>{
    return(
        <Fragment>
            <HeroSection data={props.products}/>
            <Clothes data={props.products}/>
            <Jewellery data={props.products}/>
            <Electronics data={props.products}/>
        </Fragment>
    );
}

export default Home;