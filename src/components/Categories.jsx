import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Categories() {

  let [cats, setCats] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };


  async function getCat() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    console.log(data.data)
  }


  useEffect(() => {
    getCat()
  }, [])

  return (
    <div>
      <Slider {...settings}>
        {cats.map(ele => <CatItem key={ele._id} ele={ele}></CatItem>)}
      </Slider>

    </div>
  )
}

function CatItem({ ele }) {
  return <div className='hidden md:block'>
    <img src={ele.image} className='h-[200] object-cover' alt="" />
  </div>
}
