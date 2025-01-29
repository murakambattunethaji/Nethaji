// Example: Redux Store
import { configureStore } from '@reduxjs/toolkit';
import {cartreducer,moviereducer,ecommercereduser,socialmediareduse,expancetrackerreduser} from './totaldata';



export const store = configureStore({
    reducer:{
        cartmanagement:cartreducer,
        moviebooking:moviereducer,
        ecommerce:ecommercereduser,
        socialmedia:socialmediareduse,
        expancetracker:expancetrackerreduser
    }
  
});


