import React from 'react'
import ProductItem from './ProductItem';
import Loading from './Loading';
import useProduct from '../hooks/useProduct';
import { useQuery } from '@tanstack/react-query';

export default function FeaturedProducts() {

    let { data, isError, isLoading, error } = useProduct()
    console.log(data);
    if (isLoading)
        return <Loading></Loading>

    if (isError)
        return <h2>{error.message}</h2>

    //const [productsArr, setProductArr] = useState([])
    //const [loading, setLoading] = useState(false)
    // const [errMsg, setErrMsg] = useState('')
//  {data?.data?.data?.map(prod => <ProductItem key={prod?._id} prod={prod}></ProductItem>)}

    /*  let { data, isError, isLoading, error } = useProduct()
  
      if (isLoading)
          return <Loading></Loading>
      if (isError)
          toast.error(error?.message || "Something went wrong")
  */

    /* async function getProducts() {
         try {
 
             let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
             setProductArr(data.data)
             setErrMsg('')
             setLoading(true)
 
         } catch (error) {
             setErrMsg(error.message);
             setLoading(false)
         }
 
     }
 
     useEffect(() => {
          getProducts()
     }, [])
     
      if (errMsg) {
         return <h2>{errMsg}</h2>
     }
     
     */

    return (
        <div className='container justify-items-center'>
            <div className='flex flex-wrap justify-center'>
                {data?.map(prod => <ProductItem key={prod?._id} prod={prod}></ProductItem>)}


              
            </div>

        </div>
    )
}
//