import {Swiper, SwiperSlide} from "swiper/react"
import Image from "next/image"
import Link from "next/link"
import Author from './small/author'

export default function section3(){
    return(
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
            <Swiper slidesPerView={2}>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
            </Swiper>
        </section>
    )
}
function Post(){
    return(
        <div className="grid">
            <div className="images">
                <Link legacyBehavior href={"/"}><a><Image alt="none"src={"/images/img1.jpg"} width={600} height={400}/></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4 pr-5">
                <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Sports, Travel</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">-July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">France Vs Argentina Final Sunday</a></Link>
                </div>
                <p className="text-gray-500 py-3 pr-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reiciendis dolorum in a facere! Distinctio voluptatum 
                    quis cupiditate impedit quasi veritatis fugit consequatur ea.
                </p>
                <Author></Author>
            </div>
        </div>
        )
    }