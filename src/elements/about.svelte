<script context="module">
  import { t, locale, locales } from "svelte-intl-precompile";
  import Books from "../elements/books.svelte";

  let simpleList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<div class="container">
  <h1>About Us</h1>
  <div class="flex-row">
    <div class="img-left">
      <Books />
    </div>
    <div class="text-right">
      <h1>{$t("goals.title")}</h1>
      <ol>
        <li>{$t("goals.1")}</li>
        <li>{$t("goals.2")}</li>
        <li>{$t("goals.3")}</li>
        <li>{$t("goals.4")}</li>
        <li>{$t("goals.5")}</li>
        <li>{$t("goals.6")}</li>
        <li>{$t("goals.6")}</li>
        <li>{$t("goals.7")}</li>
        <li>{$t("goals.8")}</li>
        <li>{$t("goals.9")}</li>
        <li>{$t("goals.10")}</li>
      </ol>
      <p id="contact">
        {$t("contact.contact_us")}<a href="mailto:ilm.marifah.center@gmail.com">
          {$t("contact.email")}
        </a>
        {$t("contact.or")}
        <a href="https://t.me/naved_islam">{$t("contact.telegram")}</a>
      </p>
    </div>
  </div>
</div>

<style>
  h1,
  h2,
  p,
  a {
    color: white;
  }
  div.container {
    background: #353640;
    padding: 5vh 0;
    color: white;
  }
  div.flex-row {
    padding: 0 5vw;
    justify-content: space-between;
    align-items: center;
  }
  div.image-left {
    margin-right: 20px;
  }
  div.text-right {
    min-width: 50%;
  }
  @media only screen and (max-width: 600px) {
    div.flex-row {
      padding: 0 5vw;
      flex-direction: column;
    }
  }
</style>
