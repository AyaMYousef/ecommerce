import React from 'react'
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';


let token = localStorage.getItem('token')

export function addToCart(id) {
    console.log(id);
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: id }, {
        headers: {
            token: token
        }
    })
}

//delete method
export function deleteItem(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        headers:{
            token
        }
    })
}

export function clearCart(){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/`,{
        headers:{
            token
        }
    })
}
//update
export function updateCount({productId,count}){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count},{
        headers:{
            token
        }
    })
}
export default function useMutationCart(fn) {

    return useMutation({ mutationFn: fn })

}
