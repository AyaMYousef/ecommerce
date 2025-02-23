import React from 'react'
import { Link } from 'react-router-dom';
import useMutationCart, { addToCart } from '../hooks/useMutationCart';
import { toast } from 'react-hot-toast';

export default function ProductItem({ prod }) {
    //  console.log(prod);

    let { imageCover, title, price, category, ratingsAverage, priceAfterDiscount, id } = prod || {};

    let { data, isPending, mutate, error, isSuccess, isError } = useMutationCart(addToCart)
    console.log("mutate:", data?.data?.message);
    console.log(error?.response?.data?.message);

    // console.log(data);
    // console.log(error?.status)
    //

    if (isError)
        toast.error(error?.message || "Something went wrong")

    if (isSuccess)
        toast.success()
    return (
        <div className='cursor-pointer product lg:w-1/6 md:w-1/4 sm:w-1/6 w-full p-4'>
            <Link to={`/productdetails/${id}/${category._id}`}>
                <img
                    src={imageCover}
                    className='w-full'
                    alt={title}
                />
                <p className="text-green-400 text-sm font-bold">
                    {category?.name || 'Unknown Category'}
                </p>
                <p>{title}</p>
                <div className='flex justify-between my-3'>
                    <div>
                        <p className={priceAfterDiscount ? 'line-through' : ''}>
                            {price} EGP
                        </p>
                        <p>
                            {priceAfterDiscount ? priceAfterDiscount + 'EGP' : ''}
                        </p>
                    </div>
                    <div>
                        <span>
                            {ratingsAverage}
                            <i className='fa-solid fa-star text-yellow-300'></i>
                        </span>
                    </div>

                </div>

            </Link>
            <button onClick={() => {
                console.log("Adding to cart:", id);
                mutate(id);
            }} className="btn bg-green-400 text-white p-2 rounded">add to Cart</button>
        </div>

    )
}
