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
      title: $t("Fiqh: Worship 1"),
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
    {
      title: $t("Fiqh: Interactions 1"),
      desc: $t("Being with Allah's creation the way He commanded."),
      tags: ["fiqh", "fard"],
      src: "/books/quduri.jpg",
      level: "1",
      link: "/courses/fiqh-1",
      id: "fiqh/ibadat/1",
      book: "Al-Quduri",
      price: "",
      action: "later",
    },
  ];
  let searchTerm = "fard";

  $: filteredCourses = courses.filter((course) => {
    return course.tags.find((tag) => tag.includes(searchTerm));
  });
</script>

<h1 id="courses">{$t("courses.title")}</h1>

<p id="tag-container">
  <label><input type="radio" bind:group={searchTerm} value="fard" /><span>Fard</span></label>
  <label><input type="radio" bind:group={searchTerm} value="tajwid" /><span>tajwid</span></label>
  <label><input type="radio" bind:group={searchTerm} value="fiqh" /><span>fiqh</span></label>
  <label><input type="radio" bind:group={searchTerm} value="hadith" /><span>hadith</span></label>
  <label><input type="radio" bind:group={searchTerm} value="quran" /><span>quran</span></label>
  <label><input type="radio" bind:group={searchTerm} value="tasawwuf" /><span>tasawwuf</span></label>
  <label><input type="radio" bind:group={searchTerm} value="" /><span>all</span></label>
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


  #tag-container {
    text-align: center;
  }
  #tag-container input[type="radio"] {
    display: none;
  }

  #tag-container span {
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    text-transform: capitalize;
    background-color: #fbfff9;
    border: 2px dashed #90d344;
    border-radius: 4px;
    color: #273912;
  }
  #tag-container span:hover {
    background-color: #ebffde;
  }

  #tag-container input[type="radio"]:checked + span {
    background-color: #ebffde;
    border: 2px solid #90d344;

    color: black;
  }
</style>
