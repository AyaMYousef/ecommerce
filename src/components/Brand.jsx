import React from 'react'
import { useQuery } from '@tanstack/react-query'


export default function Brand() {

  function getBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }

  let { data } = useQuery({
    querykey: ['brands'],
    queryFn:getBrands,
    enabled:false
  })

  console.log(data)
  return (
    <div>Brand</div>
  )
}
