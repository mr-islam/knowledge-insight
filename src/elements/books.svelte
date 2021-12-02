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
      <img src="/books/fuyud.jpg" alt="Image 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/maslak.png" alt="Image 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/qawanin.jpg" alt="Image 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/rawdah.jpg" alt="Image 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/majmu.jpg" alt="Image 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/tuhfah.jpg" alt="Image 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/manar.png" alt="Image 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/miftah.png" alt="Image 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/books/suyuti.jpg" alt="Image 2" />
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
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    background-color: #7e7e7e;
  }
</style>
