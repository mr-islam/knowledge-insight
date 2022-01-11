<script context="module">
  import { t, locale, locales } from "svelte-intl-precompile";
  import Books from "../elements/books.svelte";

  let simpleList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<div class="container">

  <div class="flex-row">
    <div class="img-left">
      <!-- <Books /> -->
      <h1>{$t("shaykh.heading")}</h1>

      <img alt="Shaykh Abd al-Rahman" class="profile" src="master.jpg" />
      <p>{$t("shaykh.subheading")}</p>
    </div>
    <div class="text-right">
      <div>
        <h1>{$t("goals.goal")}</h1>
        <h2>{$t("goals.title")}</h2>
      </div>
      <div>
        <ol>
          {#each simpleList as item}
            <li>{$t(`goals.${[item]}`)}</li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
  <div id="contact">
    <br />
    {$t("contact.contact_us")}<a href="mailto:markaz@ilm-marifah.com">
      {$t("contact.email")}
    </a>
    {$t("contact.or")}
    <a href="https://t.me/naved_islam">{$t("contact.telegram")}</a>
  </div>
</div>

<style>
  h1,
  h2,
  p,
  a {
    color: white;
  }
  h1 {
    margin-bottom: 20px;
  }
  div.container {
    background: #353640;
    padding: 5vh 0;
    color: white;
  }
  div.flex-row {
    padding: 0 5vw;
    justify-content: space-between;
    gap: 30px;
  }
  div.img-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div.text-right {
    min-width: 50%;
  }

  img.profile {
    border-radius: 300px;
    max-width: 200px;
    border: 4px solid #efffe4;
  }
  h2,
  .img-left > p,
  #contact {
    text-align: center;
  }
  #contact > a {
    background-color: burlywood;
    padding: 10px;
    border-radius: 8px;
    color: black;
    font-weight: bold;
  }
  ol {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 40px;
    row-gap: 20px;
  }
  li {
    font-size: 1.1em;  
  }
  @media only screen and (max-width: 900px) {
    div.flex-row {
      padding: 0 5vw;
      flex-direction: column;
    }
  }
</style>
