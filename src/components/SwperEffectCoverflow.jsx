import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img01 from "../project/NEDLogo.png";
import img02 from "../project/DTLogo.png";
import img03 from "../project/PromiseLand.gif";
import img04 from "../project/ShepherdMan.png";
import img05 from "../project/signalLabNFT.png";
import img06 from "../project/Vboost.png";

import { EffectCoverflow, Pagination } from "swiper";

export default function SwperEffectCoverflow() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="imgContainer">
            <img className="imgSwiper" src={img02} />
            <div className="paraCmain">
              <p className="paraContainer">DT System Engineering</p>
              <ul className="ulList">
                <li className="liList">Logo Design.</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img className="imgSwiper" src={img01} />
            <div className="paraCmain">
              <p className="paraContainer">NormanEveryDay</p>
              <ul className="ulList">
                <li className="liList">
                  Create NormanEveryDay using Photoshop.
                </li>
                <li className="liList">
                  Develop webb 3.0 and blockchain interaction.
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img className="imgSwiper-b" src={img03} />
            <div className="paraCmain">
              <p className="paraContainer">Promiseland</p>
              <ul className="ulList">
                <li className="liList">3D Design Logo and animation</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img className="imgSwiper" src={img04} />
            <div className="paraCmain">
              <p className="paraContainer">FOMGM</p>
              <ul className="ulList">
                <li className="liList">Character Creation</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img className="imgSwiper" src={img05} />
            <div className="paraCmain">
              <p className="paraContainer">SignalsLab</p>
              <ul className="ulList">
                <li className="liList">3D Design</li>
                <li className="liList">Design Creation</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <img className="imgSwiper" src={img06} />
            <div className="paraCmain">
              <p className="paraContainer">Rexxo BlackOil</p>
              <ul className="ulList">
                <li className="liList">3D Design Asset.</li>
                <li className="liList">3D Water simulation.</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
