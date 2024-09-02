import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function NowShowing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const temporary_data = [
    "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg",
    "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758",
    "https://i.ebayimg.com/images/g/rTUAAOSwFaRkfzZ8/s-l1200.jpg",
    "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
    "https://i.ebayimg.com/00/s/MTYwMFgxMTA3/z/Cd0AAOSwocdkoDER/$_57.JPG?set_id=880000500F",
    "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
    "https://gonewiththetwins.com/wp-content/uploads/2023/07/oppenheimer_tall.jpg",
    "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg",
    "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758",
    "https://i.ebayimg.com/images/g/rTUAAOSwFaRkfzZ8/s-l1200.jpg",
    "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
    "https://i.ebayimg.com/00/s/MTYwMFgxMTA3/z/Cd0AAOSwocdkoDER/$_57.JPG?set_id=880000500F",
    "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
    "https://gonewiththetwins.com/wp-content/uploads/2023/07/oppenheimer_tall.jpg",
    "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg",
    "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758",
    "https://i.ebayimg.com/images/g/rTUAAOSwFaRkfzZ8/s-l1200.jpg",
    "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
    "https://i.ebayimg.com/00/s/MTYwMFgxMTA3/z/Cd0AAOSwocdkoDER/$_57.JPG?set_id=880000500F",
    "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
    "https://gonewiththetwins.com/wp-content/uploads/2023/07/oppenheimer_tall.jpg",
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, delay: 0.25 }}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "70%" }} />

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{
          width: "100%",
          height: "30%",
        }}
      >
        {temporary_data.map((url, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "100%",
              padding: "20px",
              transform: "scale(0.8)",
            }}
          >
            <img
              src={url}
              alt={`slide_image_${index}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
