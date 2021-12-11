<script>
  import CourseCard from "../components/CourseCard.svelte";
  import { t, locale, locales } from "svelte-intl-precompile";

  let courses = [
    {
      title: $t("courses.tajwid1.title"),
      desc: $t("courses.tajwid1.desc_short"),
      tags: ["tajwid", "fard"],
      src: "/books/tajwid1.jpg",
      level: "1",
      link: "/courses/tajwid-1",
      id: "tajwid-1",
      book: $t("courses.tajwid1.book"),
      price: "",
      action: "now",
    },
    {
      title: $t("courses.hadith1.title"),
      desc: $t("courses.hadith1.desc_short"),
      tags: ["hadith-matn"],
      src: "/books/hadith1.jpg",
      level: "1",
      link: "/courses/hadith-1",
      id: "hadith/matn/1",
      book: $t("courses.hadith1.book"),
      price: "",
      action: "later",
    },
    {
      title: $t("Fiqh Level 1"),
      desc: $t("Worshipping Allah Almighty the way He commanded."),
      tags: ["hadith-uloom"],
      src: "/books/maslak.png",
      level: "1",
      link: "/courses/fiqh-1",
      id: "fiqh/ibadat/1",
      book: "Maslak al-Najah",
      price: "",
      action: "later",
    },
  ];
  let searchTerm = "tajwid";
  $: filteredCourses = courses.filter((course) => {
    course.tags.find(tag => tag.includes(searchTerm))
  });
</script>

<h1 id="courses">{$t("courses.title")}</h1>

<div class="gallery">
  {#each courses as course}
    <CourseCard {...course} />
  {/each}
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
