import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
//
import Hero from "./Hero";

export default function Slider() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				centeredSlides={true}
				autoplay={{
					delay: 6500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: false,
				}}
				navigation={false}
				modules={[Autoplay, Pagination]}
				className="mySwiper sliderContainer"
			>
				<SwiperSlide className="sliderBox uno">
					<Hero
						title={
							"If you spend time with animals, you run the risk of becoming a better person."
						}
						parafo={
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						}
					/>
				</SwiperSlide>
				<SwiperSlide className="sliderBox dos">
					<Hero
						title={"Animals talk, but only to those who know how to listen."}
						parafo={
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						}
					/>
				</SwiperSlide>
				<SwiperSlide className="sliderBox tres">
					<Hero
						title={
							"Animals don't hate and we are supposed to be better than them."
						}
						parafo={
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
