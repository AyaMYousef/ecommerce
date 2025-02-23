import React, { useContext } from 'react'
import { counterContext } from '../Context/CounterContext';

import ProductItem from './ProductItem';
import { useQuery } from '@tanstack/react-query';
import useProduct from '../hooks/useProduct';
import Loading from './Loading';


export default function Products() {


  let { data, isError, isLoading, error } = useProduct()
  console.log(data);
  if (isLoading)
    return <Loading></Loading>

  if (isError)
    return <h2>{error.message}</h2>

  //



 /*  Products
{data?.map(prod => <ProductItem key={prod?._id} prod={prod}></ProductItem>)}
 {data?.data?.data?.map(prod=><ProductItem key={prod?._id} prod={prod}></ProductItem>)}
  */

  return (
    <div className='container justify-items-center'>
      <div className='flex flex-wrap justify-center'>
      {data?.map(prod => <ProductItem key={prod?._id} prod={prod}></ProductItem>)}

      
      </div>

    </div>
  )
}
