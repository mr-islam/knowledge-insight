<script>
      import CourseCard from "../components/CourseCard.svelte";
      import { t, locale, locales } from "svelte-intl-precompile";

</script>

<div class="main">

<h1 id="courses">{$t("courses.title")}</h1>
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

  <style>
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