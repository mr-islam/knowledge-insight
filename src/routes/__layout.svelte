<script context="module">
  import {
    t,
    locale,
    locales,
    register,
    addMessages,
    init,
    getLocaleFromNavigator /*, register */,
  } from "svelte-intl-precompile";
  import { session } from "$app/stores";
  import en from "$locales/en.js";
  import ar from "$locales/ar.js";

  addMessages("en", en);
  // addMessages('ar', ar);
  // register('en', () => import('$locales/en.js'));
  register("ar", () => import("$locales/ar.js"));

  import "../app.css";
  import Header from "../elements/header.svelte";
</script>

<script>
  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator($session.acceptedLanguage),
  });
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <div style="text-align: center;">
    <a href="mailto:ilm.marifah.center@gmail.com">{$t("contact_us")}</a>
  </div>
  <script
    defer
    data-domain="ilm-marifah.com"
    src="https://plausible.io/js/plausible.js"></script>
</footer>

<style>
</style>
