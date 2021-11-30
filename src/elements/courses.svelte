<script>
  import CourseCard from "../components/CourseCard.svelte";
  import { t, locale, locales } from "svelte-intl-precompile";
</script>

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

<style>
  div.gallery {
    min-width: 100%;
    max-width: 100vw;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
  }
  @media only screen and (max-width: 600px) {
    div.gallery {
      flex-direction: column;
    }
  }
</style>
