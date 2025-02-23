import React from "react";
import Slider from "react-slick";


import img1 from "../assets/images/slider-image-1.jpeg";
import img2 from "../assets/images/slider-image-2.jpeg";
import img3 from "../assets/images/slider-image-3.jpeg";
import blog1 from "../assets/images/blog-img-1.jpeg";
import blog2 from "../assets/images/blog-img-2.jpeg";

export default function Header() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };

    return (
        <header className="mb-3 hidden md:block">
            <div className="container flex mx-auto">

                <div className="w-2/3">
                    <Slider {...settings}>
                        <div>
                            <img src={img1} className="w-full h-[500px] object-cover" alt="Slide 1" />
                        </div>
                        <div>
                            <img src={img2} className="w-full h-[500px] object-cover" alt="Slide 2" />
                        </div>
                        <div>
                            <img src={img3} className="w-full h-[500px] object-cover" alt="Slide 3" />
                        </div>
                    </Slider>
                </div>


                <div className="w-1/3">
                    <img src={blog1} className="w-full h-[250px] object-cover mb-2" alt="Blog 1" />
                    <img src={blog2} className="w-full h-[250px] object-cover" alt="Blog 2" />
                </div>
            </div>
        </header>
    );
}
