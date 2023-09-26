"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Navigation, Pagination]);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { formattedReviews } from "@/app/api/reviews/route";
import BounceLoader from "react-spinners/BounceLoader";
const Reviews = () => {
  const [reviews, setReviews] = useState<formattedReviews[] | null>(null)
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/reviews");
         
        setReviews(res.data.formated_reviews_object!)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className="min-h-[50vh] text-white mb-8">
      <div className=" flex  items-center flex-col md:text-start p-8 font-medium font-griffy">
        <p className="capitalize text-5xl sm:text-6xl text-white font-semibold">
          Reviews
        </p>
        <Image
          src="/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
          alt={"something"}
          width={300}
          height={300}
          className="md:h-8 mt-2 max-sm:w-[15rem]"
        />
      </div>
      <div className="w-full flex items-center">
        {reviews === null ? (
          <div className="w-full max-w-[1300px] mx-auto min-h-[30rem] bg-[rgba(0,0,0,0.5)]  backdrop-blur-md flex justify-center items-center">
            <BounceLoader color="#d4d4d4" />
          </div>
        ) : (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={1}
            navigation={true}
            spaceBetween={20}
            pagination={true}
            className="mySwiper w-full lg:w-4/5 md:w-2/3 overflow-hidden"
            breakpoints={{
              850: {
                slidesPerView: 2,
              },
            }}
            scrollbar={{
              el: ".swiper-scrollbar",
              hide: true,
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Reviews;
