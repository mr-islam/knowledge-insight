<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/splide.min.css";
</script>

<h1>Books</h1>
<div class="container">
  <Splide
    options={{
      rewind: true,
    //   type: "loop",
      perPage: 5,
      autoScroll: {
        speed: 2,
      },
      focus  : 'center',
      drag   : 'free',
    }}
  >
    <SplideSlide>
      <img src="/books/sawanih.jpg" alt="Image 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="/books/fuyud.jpg" alt="Image 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/books/maslak.png" alt="Image 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/books/qawanin.jpg" alt="Image 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/books/rawdah.jpg" alt="Image 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/books/majmu.jpg" alt="Image 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/books/tuhfah.jpg" alt="Image 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/books/manar.png" alt="Image 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/books/miftah.png" alt="Image 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/books/suyuti.jpg" alt="Image 2" />
    </SplideSlide>
  </Splide>
</div>

<style>
  img {
    max-width: 200px;
  }
  div.container {
    max-width: 80%;
    margin: 5vh auto;
  }
  h1 {
      margin: 10vh 0 0 0;
  }
</style>
