<script context="module">
  import { t, locale, locales } from "svelte-intl-precompile";

  function scrollToTitle(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
</script>

<header>
  <div class="flex-row">
    
    <div class="flex-column">
      <a href="/">
        <img alt="Logo of Arabic calligraphy" id="logo" src="/logo.jpg" />
      </a>
      {#if $t("center") !== ""}
        <span>{$t("center")}</span>
      {/if}
      <h1>{$t("title")}</h1>
      <span>{ $t('slogan') }</span>

    </div>
    
  </div>
  <div>
    <a
      on:click={() => {
        scrollToTitle("courses");
      }}
      href="#">{$t("courses.title")}</a
    >
    &middot
    <a
      on:click={() => {
        scrollToTitle("articles");
      }}
      href="#">{$t("articles.title")}</a
    >
    &middot
    <a
      on:click={() => {
        scrollToTitle("about");
      }}
      href="#">{$t("about.title")}</a
    >
    &middot
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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 4px solid var(--primary-color);
    left: 30vw;
    border-radius: 8px;
    position: absolute;
    padding: 10px 0;
    top: 10px;
    width: 40vw;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 5;
  }
  img#logo {
    border: 1px black solid;
    border-radius: 360px;
    max-width: 5vw;
    margin: 5px 12px 2px 5px;
  }
  @media only screen and (max-width: 600px) {
    img#logo {
      max-width: 8vw;
      margin: 10px;
    }
    header {
      position: relative;
      flex-direction: column;
      left: 0;
      min-width: 100%;
      border-radius: 0px;
      top: 0px;
      border: 0px;
      padding-top: 10px;
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
    margin: 0;
  }
  div.flex-row {
    align-items: center;
  }
  div.flex-column {
    align-items: center;

  }
</style>
