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
      tags: ["fiqh", "fard"],
      src: "/books/maslak.png",
      level: "1",
      link: "/courses/fiqh-1",
      id: "fiqh/ibadat/1",
      book: "Maslak al-Najah",
      price: "",
      action: "later",
    },
  ];
  let searchTerm = "fard";
    function setSearch(tag) {
      searchTerm = tag
    }

  $: filteredCourses = courses.filter((course) => {
    return course.tags.find(tag => tag.includes(searchTerm))
  });
</script>

<h1 id="courses">{$t("courses.title")}</h1>

<p id="id_work_days">
  <label><input type="radio" name="work_days" value="1"><span>sun</span></label>
  <label><input type="radio" name="work_days" value="2"><span>mon</span></label>
  <label><input type="radio" name="work_days" value="3"><span>tue</span></label>
  <label><input type="radio" name="work_days" value="4"><span>wed</span></label>
  <label><input type="radio" name="work_days" value="5"><span>thu</span></label>
  <label><input type="radio" name="work_days" value="6"><span>fri</span></label>
  <label><input type="radio" name="work_days" value="7"><span>sat</span></label>
</p>

<div class="gallery">
  {#each filteredCourses as course}
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
  #id_work_days input[type="radio"] {
  display: none;
}

#id_work_days span {
  display: inline-block;
  padding: 10px;
  text-transform: uppercase;
  border: 2px solid gold;
  border-radius: 3px;
  color: gold;
}

#id_work_days input[type="radio"]:checked + span {
  background-color: gold;
  color: black;
}
</style>
