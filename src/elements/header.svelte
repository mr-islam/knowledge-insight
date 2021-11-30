<script context="module">
  import { t, locale, locales } from "svelte-intl-precompile";
</script>

<header>
  <div class="flex-row">
    <a href="/">
      <img alt="Logo of Arabic calligraphy" id="logo" src="/logo.jpg" />
    </a>
    <div class="flex-column">
      <span>{$t("center")}</span>
      <h1>{$t("title")}</h1>
    </div>
  </div>
  <div>
    <a href="#Courses">{$t("courses.title")}</a>
    <a>About Us</a>
    <select
      id="select-lang"
      on:change={() => {
        $locale =
          document.getElementById("select-lang").selectedOptions[0].value;
      }}
      >{#each $locales as loc}
        <option value={loc}>{loc}</option>
      {/each}
    </select>
  </div>
</header>

<style>
  header {
    background-color: var(--pure-white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 4px solid var(--primary-color);
    margin: 0 0 0  50px;
    border-radius: 8px;
    position: fixed;
    top: 30px;
    min-width: 80vw;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 5;
  }
  img#logo {
    border: 1px black solid;
    border-radius: 360px;
    max-width: 5vw;
    margin: 20px;
  }
  @media only screen and (max-width: 600px) {
    img#logo {
      max-width: 10vw;
    }
    header {
      flex-direction: column;
      margin: 0 0 0 0;
    }
    h1 {
      font-size: 0.8rem;
    }
  }
  select {
    margin: 10px;
  }
  h1 {
    font-size: 1.5rem;
    margin: 0 10px 0 0;
  }
  div.flex-column {
    display: flex;
    flex-direction: column;
  }
  div.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
