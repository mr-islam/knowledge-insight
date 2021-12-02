<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";

  // import Swiper core and required modules
  import SwiperCore, { Autoplay, Navigation } from "swiper";

  // install Swiper modules
  SwiperCore.use([Navigation, Autoplay]);
</script>

<div class="container">
  <Swiper
    navigation={true}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    class="mySwiper"
  >
    <SwiperSlide>
      <div class="center">
        <h1>Islamic Knowledge, Prophetic Spirituality</h1>
        <p>Complete Islamic education taught by qualified scholars</p>
      </div>

      <img src="/backgrounds/madina-busy.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <div class="center">
        <h1>Islamic Knowledge, Prophetic Spirituality</h1>
        <p>Complete Islamic education taught by qualified scholars</p>
      </div>
      <img src="/backgrounds/madina-busy.jpg" />
    </SwiperSlide>
    <SwiperSlide
      ><div class="center">
        <h1>Islamic Knowledge, Prophetic Spirituality</h1>
        <p>Complete Islamic education taught by qualified scholars</p>
      </div>
      <img src="/backgrounds/madina-busy.jpg" /></SwiperSlide
    >
  </Swiper>
</div>

<style>
  div.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    text-align: "center";
  }
  p {
    font-size: 1.5rem;
    color: var(--pure-white);

  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: var(--pure-white);
  }
  img {
    filter: blur(1px) brightness(70%);
  }
  div.container {
    /* min-width: 100%; */
    /* min-height: 700px; */
    margin-top: 20vh;
  }
  div :global(.swiper) {
    width: 100%;
    height: 70vh;
  }

  div :global(.swiper-slide) {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  div :global(.swiper-slide img) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
