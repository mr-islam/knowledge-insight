<script>
  import { t, locale, locales } from "svelte-intl-precompile";
  import CourseCard from "../components/CourseCard.svelte";
</script>

{#if t}
  <div class="about">
  </div>
  <div class="slogan">
    <h2 class="slogan-text">Islamic Knowledge, Prophetic Spirituality</h2>
    <p class="slogan-text">Complete Islamic education taught by qualified scholars</p> <br>
  </div>
  <div class="paras-about">
    <div>
      <p>{$t("welcome.para_1")}</p>
      <p>{$t("welcome.para_2")}</p>
      <p>{$t("welcome.para_3")}</p>   
    </div>
       
  </div>

  <div class="main">
    <h1>{$t("courses.title")}</h1>
    <div class="gallery">
      <!-- <CourseCard 
                    title={""} 
                    desc={""} 
                    src={""} 
                    level={""} 
                    link={""} 
                    price={""} 
                    action={""}
                /> -->
      <CourseCard
        title={$t("courses.tajwid1.title")}
        desc={$t("courses.tajwid1.desc_short")}
        src={"/books/tajwid1.jpg"}
        level={"1"}
        link={"/courses/tajwid1"}
        price={""}
        action={"now"}
        book={$t("courses.tajwid1.book")}
      />
      <CourseCard
        title={$t("courses.hadith1.title")}
        desc={$t("courses.hadith1.desc_short")}
        src={"/books/hadith1.jpg"}
        level={"1"}
        link={"/courses/hadith1"}
        price={""}
        action={"later"}
        book={$t("courses.hadith1.book")}
      />
      <CourseCard
        title={$t("courses.arabic1.title")}
        desc={$t("courses.arabic1.desc_long")}
        src={"/books/tajwid1.jpg"}
        level={"1"}
        link={"/courses/arabic1"}
        price={""}
        action={"later"}
        book={$t("courses.tajwid1.book")}
      />
      <CourseCard
        title={$t("courses.arabic1.title")}
        desc={$t("courses.arabic1.desc_long")}
        src={"/books/hadith1.jpg"}
        level={"1"}
        link={"/courses/arabic1"}
        price={""}
        action={"later"}
        book={$t("courses.tajwid1.book")}
      />
      <CourseCard
        title={$t("courses.arabic1.title")}
        desc={$t("courses.arabic1.desc_long")}
        src={"/books/hadith1.jpg"}
        level={"1"}
        link={"/courses/arabic1"}
        price={""}
        action={"later"}
        book={$t("courses.tajwid1.book")}
      />
    </div>
  </div>
{/if}

<style>
  div.slogan {
    text-align: center;
    min-width: 100vw;
    margin-top: 300px;
  }
  .slogan-text, p {
    color:   var(--pure-white);
  }
  h2.slogan-text {
    font-size: 3rem;
  }
  p.slogan-text {
    font-size: 1.5rem;
  }
  div.paras-about {
    background: #a4a6a9;
  min-width: 100%;
  margin: 20vh 0 56px 0;  

  }
  div.paras-about > div {
    padding: 20px 20vw 20px 20vw;
  }
  div.about {
    position: absolute;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    z-index: -1;
    min-width: 100vw;
    min-height: 80vh;
  background-size: cover;
  background-image: url("/backgrounds/madina-busy.jpg");
  filter: blur(2px) brightness(70%);

  }
  p {
    text-align: "center";
    font-size: larger;
  }
  @media only screen and (max-width: 1000px) {
    div.about {
      flex-direction: column;
    }
  }
  div.main {
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    /* background-image: ; */
  }
  div.gallery {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 20px 30px 20px;
  }
  @media only screen and (max-width: 600px) {
    div.gallery {
      flex-direction: column;
    }
  }
  
</style>
