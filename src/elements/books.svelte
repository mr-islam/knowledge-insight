<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/effect-cards";
  import "swiper/css/pagination";

  // import Swiper core and required modules
  import SwiperCore, { Autoplay, EffectCards } from "swiper";

  // install Swiper modules
  SwiperCore.use([EffectCards, Autoplay]);
</script>

<div>
  <Swiper
  dir="rtl"
    effect={"cards"}
    grabCursor={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: true,
    }}
    pagination={{
      clickable: true,
    }}
  >
    <SwiperSlide>
      <img src="/books/sawanih.jpg" alt="sawanih" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/tasawwuf-fuyud.jpg" alt="fuyud" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/fiqh-maslak.jpg" alt="maslak" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/tasawwuf-qawanin.jpg" alt="qawanin" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/rawdah.jpg" alt="rawdah" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/aqidah-sharh-nazm.jpg" alt="majmu" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/tasawwuf-tuhfah.jpg" alt="tuhfah" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/fiqh-manar.jpg" alt="manar" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/aqidah-miftah.jpg" alt="miftah" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/suyuti.jpg" alt="suyuti" />
    </SwiperSlide>
  </Swiper>
</div>

<style>
  img {
    max-width: 100%;
  }
  div :global(.swiper) {
    width: 280px;
    height: 390px;
  }

  div :global(.swiper-slide) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    background-color: #7e7e7e;
  }
  @media only screen and (max-width: 600px) {
    div :global(.swiper) {
      width: 144px;
      height: 200px;
    }
  }
</style>
