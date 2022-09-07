import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../assets/styles/public.scss";
import Slider from "../../components/Slider";
import MyCard from "../../components/Cards";
import Button from "@mui/material/Button";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Home() {
  return (
    <>
      <Slider />

      <MyCard />
    </>
  );
}

export default Home;
