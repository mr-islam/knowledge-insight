<script>
  import CourseCard from "../components/CourseCard.svelte";
  import { t, locale, locales } from "svelte-intl-precompile";

  let courses = [
    {
      title: $t("courses.tajwid1.title"),
      desc: $t("courses.tajwid1.desc_short"),
      tags: ["tajwid", "fard"],
      src: "/books/tajwid1.jpg",
      level: 1,
      id: "tajwid/qaida",
      book: $t("courses.tajwid1.book"),
      action: "now",
      price: "",
      registration: "",
    },
    {
      id: "tajwid/hidayatrahman",
      title: $t("Tajwid: Level 1"),
      desc: $t("Contuining learning the traits and places of letters"),
      tags: ["tajwid"],
      src: "/books/hidayatrahman.jpg",
      level: 1,
      book: "Hidayah al-Rahman",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid/thani",
      title: $t("Tajwid: Level 2"),
      desc: $t("Add more depth to your knowledge of law,"),
      tags: ["tajwid"],
      src: "/books/thani.jpg",
      level: 2,
      book: "Al-Mustawa al-Thani",
      action: "later",
      price: "",
      registration: "",
    },
    {
      title: $t("courses.hadith1.title"),
      desc: $t("courses.hadith1.desc_short"),
      tags: ["hadith-matn"],
      src: "/books/hadith1.jpg",
      level: 1,
      id: "hadith/matn/nawawi",
      book: $t("courses.hadith1.book"),
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/adab",
      title: $t("Hadith: Text 2"),
      desc: $t("Bring light to your every action with Prophetic guidance"),
      tags: ["hadith"],
      src: "/books/adab.jpg",
      level: 2,
      book: "Al-Adab al-Mufrad",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/matn/riyad",
      title: $t("Hadith: Text 3"),
      desc: $t("Take delight in the meadow of the righteous"),
      tags: ["hadith"],
      src: "/books/riyad.jpg",
      level: 3,
      book: "Riyad al-Salihin",
      action: "later",
      price: "",
      registration: "",
    },
    {
      title: $t("Fiqh: Worship 1"),
      desc: $t("Worshipping Allah Almighty the way He commanded."),
      tags: ["fiqh", "fard"],
      src: "/books/maslak.jpg",
      level: 1,
      id: "fiqh/maslak",
      book: "Maslak al-Najah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/quduri",
      title: $t("Fiqh: Interactions 1"),
      desc: $t("Being with Allah's creation the way He commanded."),
      tags: ["fiqh", "fard"],
      src: "/books/quduri.jpg",
      level: 1,
      book: "Al-Quduri",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/lubab",
      title: $t("Fiqh: Level 2"),
      desc: $t("Add more depth to your knowledge of law,"),
      tags: ["fiqh"],
      src: "/books/lubab.jpg",
      level: 2,
      book: "Al-Lubab",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/ulum/bayquni",
      title: $t("Hadith: Terminology 1"),
      desc: $t(
        "The tools to interact with Hadith and understand it's scholars"
      ),
      tags: ["hadith"],
      src: "/books/bayquni.jpg",
      level: 1,
      book: "Sharh al-Bayquni",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/ulum/nuzhah",
      title: $t("Hadith: Terminology 2"),
      desc: $t("Being with Allah's creation the way He commanded."),
      tags: ["hadith"],
      src: "/books/nuzhah.jpg",
      level: 2,
      book: "Nuzhah al-Nazar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/ahl-sunnah",
      title: $t("Beliefs: Essentials"),
      desc: $t("There is no belief without knowledge"),
      tags: ["aqidah", "fard"],
      src: "/books/miftah.jpg",
      level: 0,
      book: "Aqida Ahl al-Sunnah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/majmu",
      title: $t("Beliefs: Level 1"),
      desc: $t("A masterful poem and explanation on beliefs"),
      tags: ["aqidah"],
      src: "/books/majmu.jpg",
      level: 2,
      book: "Nazm Aqida Ahl al-Sunnah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/tali",
      title: $t("Beliefs: Level 2"),
      desc: $t("One of the best explanations of this key text in creed."),
      tags: ["aqidah"],
      src: "/books/tali.jpg",
      level: 2,
      book: "Taliʿ al-Bushra",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/miftah",
      title: $t("Beliefs: Level 3"),
      desc: $t("A summary of over 50 works in Creed, this is a milestone"),
      tags: ["aqidah"],
      src: "/books/miftah.jpg",
      level: 3,
      book: "Miftah al-Jannah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/jawharah",
      title: $t("Beliefs: Level 3"),
      desc: $t("A summary of over 50 works in Creed, this is a milestone"),
      tags: ["aqidah"],
      src: "/books/jawharah.jpg",
      level: 4,
      book: "Jawharah al-Tawhid",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/taftazani",
      title: $t("Beliefs: Level 5"),
      desc: $t("Different views and the breadth of Islam are explored"),
      tags: ["aqidah"],
      src: "/books/taftazani.jpg",
      level: 5,
      book: "Sharh al-Nasafiyyah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah/tahrir",
      title: $t("Beliefs: Level 6"),
      desc: $t("A deep dive and joruney through the range of views"),
      tags: ["aqidah"],
      src: "/books/tahrir.jpg",
      level: 6,
      book: "Tahrir al-Matalib",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/hidayah",
      title: $t("Fiqh: Level 4"),
      desc: $t("The mother book of the Madhhab"),
      tags: ["fiqh"],
      src: "/books/hidayah.jpg",
      level: 4,
      book: "Al-Hidayah",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/rad",
      title: $t("Fiqh: Level 5"),
      desc: $t("The relied upon book for rulings and mastery"),
      tags: ["fiqh"],
      src: "/books/rad.jpg",
      level: 5,
      book: "Radd al-Muhtar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/maram",
      title: $t("Fiqh: Evidences 1"),
      desc: $t("The relied upon book for rulings and mastery"),
      tags: ["fiqh"],
      src: "/books/maram.jpg",
      level: 3,
      book: "Sharh Bulugh al-Maram",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh/isad",
      title: $t("Fiqh: Rulings 1"),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["fiqh"],
      src: "/books/isad.jpg",
      level: 3,
      book: "Sharh Uqud Rasm al-Mufti",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir/nasafi",
      title: $t("Tafsir: External 2"),
      desc: $t("A summary of some of the most important tafsir"),
      tags: ["tafsir"],
      src: "/books/nasafi.jpg",
      level: 2,
      book: "Tafsir al-Nasafi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith/ulum/tadrib",
      title: $t("Hadith: Terminology 4"),
      desc: $t("The level for complete campacity in hadith science"),
      tags: ["hadith"],
      src: "/books/tadrib.jpg",
      level: 4,
      book: "Tadrib al-Rawi",
      action: "later",
      price: "",
      registration: "",
    }
  ];
  let searchTerm = "fard";

  $: filteredCourses = courses.filter((course) => {
    return course.tags.find((tag) => tag.includes(searchTerm));
  });
</script>

<h1>{$t("courses.title")}</h1>

<p id="tag-container">
  <label
    ><input type="radio" bind:group={searchTerm} value="fard" /><span>Fard</span
    ></label
  >
  <label
    ><input type="radio" bind:group={searchTerm} value="aqida" /><span>Beliefs</span
    ></label
  >
  <label
    ><input type="radio" bind:group={searchTerm} value="fiqh" /><span>fiqh</span
    ></label
  >
  <label
    ><input type="radio" bind:group={searchTerm} value="hadith" /><span
      >hadith</span
    ></label
  >
  <label
    ><input type="radio" bind:group={searchTerm} value="tajwid" /><span
      >tajwid</span
    ></label
  >
  <label
    ><input type="radio" bind:group={searchTerm} value="tafsir" /><span
      >tafsir</span
    ></label
  >
  <label
    ><input type="radio" bind:group={searchTerm} value="tasawwuf" /><span
      >tasawwuf</span
    ></label
  >
  <label
    ><input type="radio" bind:group={searchTerm} value="" /><span>all</span
    ></label
  >
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
