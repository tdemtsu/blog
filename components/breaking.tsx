import Image from "next/image"
import Link from "next/link"
import Author from "./small/author"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';


export default function section1(){
    SwiperCore.use([Autoplay])
    return(
        <section className="py-10">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl text-center">Breaking News</h1>
                <h2 className="italic text-xl pb-12 text-center">Slide for more</h2>
                <Swiper slidesPerView={1}  loop={true} autoplay= {{delay:6000}}>
                    <SwiperSlide>{Part()}</SwiperSlide>
                    <SwiperSlide>{Part()}</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
function Part(){
    return(
        <div className="grid md:grid-cols-2">
            
            <div className="image">
                <Link legacyBehavior href={"/"}><a><Image alt="none" src={"/images/img1.jpg"} width={600} height={600}/></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
    
                <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Sports </a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Morocco Knocked OUT by Mbappe and France </a></Link>
                </div>
                <p className="text-gray-500 py-3 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reiciendis dolorum in a facere! Distinctio voluptatum 
                    quis cupiditate impedit quasi veritatis fugit consequatur ea.
                </p>
                <hr></hr>
                <Author></Author>
                <hr></hr>

            </div>
        </div>
    )
}