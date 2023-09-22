"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
SwiperCore.use([Navigation, Pagination]);
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = () => {
    const array = [{}, {}, {}, {}, {}, {}]
  return (
    <div style={{ backgroundImage: 'url(/Images/43.harry-potter-following-the-darkness-4k-tp.jpg)', backgroundSize: 'cover',}} 
    className="h-screen text-white flex flex-col items-center">
        <div className="text-6xl px-28 p-16 font-medium">
            Reviews
            <Image
            src='/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png'
            alt={'something'}
            width={300}
            height={300}
            className="h-8 mt-2"
            />
        </div>
        <div className="w-3/4">
            <Swiper
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={2}
            navigation={true}
            spaceBetween={20}
            pagination={true}
            className="mySwiper"
            scrollbar={{
                el: ".swiper-scrollbar",
                hide: true,
            }}
            >
                {
                    array.map((obj, index)=>(
                    <SwiperSlide key={index} className="">
                        <Image
                        src={'/Images/Untitled-2.png'} 
                        alt={'something'}
                        width={950}
                        height={950}
                        className=""
                        />
                    </SwiperSlide>
                    ))
                }  
            </Swiper>
        </div>
    </div>
  )
}

export default Reviews