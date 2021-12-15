<script>
  import CourseCard from "../components/CourseCard.svelte";
  import CourseCard2 from "../components/CourseCard2.svelte";

  import { t, locale, locales } from "svelte-intl-precompile";
  import About from "./about.svelte";

  let testId = "tajwid-qaida";

  function scrollToTitle() {
    document
      .getElementById("section-title")
      .scrollIntoView({ behavior: "smooth" });
  }

  let courses = [
    {
      tags: ["nazari", "fard"],
      level: 1,
      id: "tajwid-qaida",
      action: "now",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-hidayatrahman",
      tags: ["nazari"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-thani",
      tags: ["nazari"],
      level: 3,
      book: "",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-jazari",
      tags: ["nazari"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-amma",
      tags: ["amali"],
      src: "",
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-reading",
      tags: ["amali"],
      level: 3,
      book: "",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-reciting",
      tags: ["amali"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      tags: ["hadith-matn"],
      level: 1,
      id: "hadith-nawawi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-adab",
      tags: ["hadith-matn"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-riyad",
      title: $t("Hadith: Text 3"),
      desc: $t(""),
      tags: ["hadith-matn"],
      src: "/books/riyad.jpg",
      level: 3,
      book: "",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-bukhari",
      tags: ["hadith-matn"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-muslim",
      tags: ["hadith-matn"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-tirmidhi",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-abudawud",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-ibnmajah",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-nasai",
      tags: ["hadith-matn"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-musnad",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-darimi",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-muwatta",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      tags: ["ahkam"],
      level: 2,
      id: "fiqh-maslak",
      action: "later",
      price: "",
      registration: "",
    },
    {
      tags: ["ahkam", "fard"],
      level: 1,
      id: "fiqh-nur",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-quduri",
      tags: ["fard"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-lubab",
      tags: ["ahkam"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-bayquni",
      tags: ["hadith-ulum"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-nuzhah",
      tags: ["hadith-ulum"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-salah",
      tags: ["hadith-ulum"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-ahl-sunnah",
      tags: ["fard"],
      level: 0,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-sharh-nazm",
      tags: ["aqidah"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-tali",
      tags: ["aqidah"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-miftah",
      tags: ["aqidah"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-jawharah",
      tags: ["aqidah"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-taftazani",
      tags: ["aqidah"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-tahrir",
      tags: ["aqidah"],
      level: 6,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-hidayah",
      tags: ["ahkam"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-rad",
      tags: ["ahkam"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-maram",
      tags: ["dalil"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-ila",
      tags: ["dalil"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-ghamz",
      tags: ["qawaid"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-isad",
      tags: ["qawaid"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-sharhmanar",
      title: $t("Fiqh: Rules 2"),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["usul"],
      src: "/books/sharhmanar.jpg",
      level: 2,
      book: "Sharh al-Manar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-talwih",
      tags: ["usul"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-zaydan",
      tags: ["qawaid"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-zad",
      tags: ["usul"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-manar",
      title: $t(""),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["usul"],
      src: "/books/manar.jpg",
      level: 1,
      book: "Sharh al-Manar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-durrah",
      tags: ["zahir"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-nasafi",
      tags: ["zahir"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-baydawi",
      tags: ["zahir"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-qurtubi",
      tags: ["zahir"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-tadrib",
      tags: ["hadith-ulum"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-tuhfah",
      tags: ["fard", "suluk"],
      level: 6,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-taj",
      tags: ["suluk"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-fuyud",
      tags: ["fard", "suluk"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-qasd",
      tags: ["suluk"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-uyub",
      tags: ["suluk"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-bidayah",
      tags: ["suluk"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-manazil",
      tags: ["suluk"],
      level: 7,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-himam",
      tags: ["suluk"],
      level: 8,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-mabahith",
      tags: ["suluk"],
      level: 6,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-wasaya",
      tags: ["irfan"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-naqsh",
      tags: ["irfan"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-insankamil",
      tags: ["irfan"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-fusus",
      tags: ["irfan"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-qawanin",
      title: $t("Spirituality: Reaching 2"),
      desc: $t("Insights and illuminations for all wayfarers"),
      tags: ["irfan"],
      src: "/books/qawanin.jpg",
      level: 2,
      book: "",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-bahr",
      tags: ["ishari"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-waridat",
      tags: ["ishari"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-mawaqif",
      tags: ["ishari"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "other-isa",
      tags: ["other"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "other-diwankurdi",
      tags: ["other"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "sirah-halabi",
      tags: ["sirah"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "sirah-wasail",
      tags: ["sirah"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "program-youth",
      tags: ["program"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "program-women",
      tags: ["program"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq-um1",
      tags: ["natiq"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq-um2",
      tags: ["natiq"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq-um3",
      tags: ["natiq"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq-um4",
      tags: ["natiq"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
  ];
  let searchTerm = "fard";
  $: console.log(searchTerm);
  $: filteredCourses = courses
    .filter((course) => {
      return course.tags.find((tag) => tag.includes(searchTerm));
    })
    .sort(function (a, b) {
      return a.level - b.level;
    });
</script>

<h1 id="courses">{$t("courses.title")}</h1>

<div id="grid">
  <button
    on:click={() => {
      setTimeout(scrollToTitle(), 100);
      searchTerm = "fard";
    }}
  >
    Obligatory Knowledge
  </button>
  <button
    href="#gallery"
    on:click={() => {
      searchTerm = "program";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Bundle Programs
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "nazari";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Quran Recitation & Tajwid
  </button>
  <button
    href="#gallery"
    on:click={() => {
      searchTerm = "natiq";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Arabic for Non-natives
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "nahw";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Arabic & Its Sciences
  </button>
  <button
    href="#gallery"
    on:click={() => {
      searchTerm = "aqidah";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Beliefs
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "ahkam";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Fiqh & Its Foundations
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "suluk";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Sprituality
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "zahir";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    The Quran & Its Sciences
  </button>
  <button
    href="#section-title"
    on:click={() => {
      searchTerm = "matn";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Hadith & Its Sciences
  </button>
  <button
    href="#gallery"
    on:click={() => {
      setTimeout(scrollToTitle(), 100);
      searchTerm = "sirah";
    }}
  >
    Seerah & Shamail
  </button>
  <button
    href="#gallery"
    on:click={() => {
      searchTerm = "other";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    Assorted Classes
  </button>
</div>

{#if searchTerm == "tasawwuf" || searchTerm == "suluk" || searchTerm == "irfan"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Spirituality
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="suluk" /><span
        >Self-purification & Suluk</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="irfan" /><span
        >Higher Understandings</span
      ></label
    >
  </p>
{:else if searchTerm == "tajwid" || searchTerm == "nazari" || searchTerm == "amali"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Tajwid
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="nazari" /><span
        >Theory & Rules</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="amali" /><span
        >Practical Recitation</span
      ></label
    >
  </p>
{:else if searchTerm == "tafsir" || searchTerm == "zahir" || searchTerm == "ishari" || searchTerm == "tajwid" || searchTerm == "nazari" || searchTerm == "amali"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Tafsir
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="zahir" /><span
        >External Tafsir</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="ishari" /><span
        >Ishari Tafsir</span
      ></label
    >
  </p>
{:else if searchTerm == "hadith" || searchTerm == "matn" || searchTerm == "ulum"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Hadith
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="matn" /><span
        >Hadith Texts</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="ulum" /><span
        >Hadith Sciences</span
      ></label
    >
  </p>
{:else if searchTerm == "fiqh" || searchTerm == "ahkam" || searchTerm == "usul" || searchTerm == "qawaid" || searchTerm == "dalil"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">Fiqh</h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="ahkam" /><span
        >Rulings</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="usul" /><span
        >Foundations</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="qawaid" /><span
        >Principles</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="dalil" /><span
        >Evidences</span
      ></label
    >
  </p>
{:else if searchTerm == "arabi" || searchTerm == "nahw" || searchTerm == "sarf" || searchTerm == "balaghah"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    Arabic
  </h3>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="nahw" /><span
        >nahw</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="sarf" /><span
        >sarf</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="balaghah" /><span
        >balaghah</span
      ></label
    >
  </p>
{:else}{/if}
<!-- <h3 id="section-title" style="text-align: center;">{searchTerm} Courses</h3> -->

{#if filteredCourses !== "islam"}
  {#if searchTerm == "fard"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Obligatory For Every Muslim
    </h3>
  {:else if searchTerm == "program"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Larger Programs
    </h3>
  {:else if searchTerm == "aqidah"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Beliefs
    </h3>
  {:else if searchTerm == "sirah"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Seerah & Shamail
    </h3>
  {:else if searchTerm == "natiq"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Arabic for Non-native Speakers
    </h3>
  {:else if searchTerm == "other"}
    <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
      Miscellaneous
    </h3>
  {/if}
  <div id="gallery">
    {#each filteredCourses as course}
      <CourseCard2
        id={course.id}
        title={$t(`courses.${course.id}.title`)}
        desc={$t(`courses.${course.id}.desc`)}
        book={$t(`courses.${course.id}.book`)}
        src={$t(`courses.${course.id}.src`)}
      />
    {/each}
    <br />
  </div>
{/if}

<div style="" id="articles" />

<style>
  #section-title {
    padding-top: 10px;
  }
  div#grid > button {
    height: 100px;
    text-align: center;
    background: #f2ffe9;
    border-radius: 4px;
    border: 2px dashed #90d344;
    padding: 10px;
    font-weight: bold;
    justify-self: stretch;
    align-self: stretch;
  }
  div#grid > button:nth-child(odd) {
    background: #f9fff5;
  }
  div#grid > button:hover {
    background-color: #bef184;
    border: 2px solid #90d344;
    cursor: pointer;
  }
  div#grid {
    row-gap: 10px;
    column-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 0 20px;
    place-items: center;
    place-content: center;
  }
  div#gallery {
    min-width: 100%;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 5vh 0;
    padding-bottom: 10vh;
  }
  @media only screen and (max-width: 600px) {
    div#grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    div#gallery {
      flex-direction: column;
    }
  }
  #sub-container {
    margin-top: 30px;
    /* display: flex; */
    /* max-width: 100%; */
    /* overflow: scroll; */
    text-align: center;
    user-select: none;
    flex-direction: row;
    margin-bottom: 25px;
    align-items: center;
    justify-items: center;
    font-size: smaller;

    scrollbar-color: gold white;
  }
  #sub-container input[type="radio"] {
    display: none;
  }

  #sub-container span {
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    text-transform: capitalize;
    /* background-color: #fbfff9; */
    /* border: 2px dashed #90d344; */
    border-radius: 4px;
    color: #273912;
  }
  #sub-container span:hover {
    /* background-color: #ebffde; */
  }

  #sub-container input[type="radio"]:checked + span {
    background-color: rgb(255, 242, 172);
    border: 2px solid gold;

    color: black;
  }
</style>
