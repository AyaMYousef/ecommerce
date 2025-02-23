import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import useMutationCart, { addToCart } from '../hooks/useMutationCart';
import { toast } from "react-hot-toast";
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

export default function ProductDetails() {

    let { data, isPending, mutate, error, isSuccess, isError } = useMutationCart(addToCart)
    if (isError)
        toast.error(error?.response?.data?.message)

    if (isSuccess)
        toast.success()


    let [RelatedProducts, setRelatedProducts] = useState({})
    let [imgSrc, setImgSrc] = useState('')
    let [indexAtt, setIndex] = useState(0)

    let { id, categId } = useParams()

    function changeImgSrc(e) {
        setIndex(e.target.getAttribute('index'));
        setImgSrc(e.target.src);
    }



    async function getRelatedProducts() {

        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categId}`)
            setRelatedProducts(data.data);

        }
        catch (error) {
            console.log(error);

        }
    }

    let { data: dataobj, isLoading } = useQuery({
        querykey: ['productDetails', id],
        queryFn: getProductDetails
        // select: (dataobj?.data?.data)
    })
    console.log(dataobj?.data?.data);

    async function getProductDetails() {

        return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    }

    useEffect(() => {
        // getProductDetails()
        getRelatedProducts()
    }, [])
    //updating phase & mounting phase

    if (isLoading)
        return <Loading></Loading>
    return (
        <div className='container'>
            <div className='flex items-center gap-6'>
                <div className="w-1/3 ">
                    {dataobj?.image}
                    <img src={imgSrc ? imgSrc : dataobj?.imageCover} className="w-full my-3" alt="" />
                    <div className='flex gap-2 '>
                        {dataobj?.images?.map((img, index) => <img index={index} onClick={changeImgSrc} src={img} className={`w-[20%] cursor-pointer transition-all ${index == indexAtt ? 'border-4 border-cyan-600 opacity-65 scale-95' : ''} `} key={img} />)}
                    </div>
                </div>
                <div className='w-2/3'>
                    <h2 className='text-[2rem] font-bold my-4'>
                        {dataobj?.title}
                    </h2>
                    <p>{dataobj?.description}</p>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='font-semibold text-sm'>
                                {dataobj?.category?.name}
                            </h3>
                        </div>
                        <div>
                            <span>
                                {dataobj?.ratingsAverage}
                                <i className='fa-solid fa-star text-yellow-300'></i>
                            </span>
                            <p>{dataobj?.price} EGP</p>
                        </div>
                    </div>
                    <button onClick={() => { mutate(dataobj?._id) }} className='btn w-full block py-3 text-white my-2 bg-green-600'>Add to Cart</button>
                </div>
            </div>
            <h2 className='my-5 text-[2rem] font-bold'>Related Products</h2>
            <div className='flex flex-wrap'>
                {RelatedProducts.length ? RelatedProducts.map(prod =>
                    <ProductItem key={prod._id} prod={prod}></ProductItem>) : <Loading></Loading>}
            </div>
        </div>
    )
}
