<script context="module">
  import {
    t,
    register,
    init,
    locale,
    getLocaleFromNavigator,
    isLoading,
  } from "svelte-intl-precompile";
  import { session } from "$app/stores";
  import "../app.css";
  import { onMount, afterUpdate } from "svelte";
  import Header from "../elements/header.svelte";

  // addMessages("en", en);
  // addMessages('ar', ar);
  register("en", () => import("$locales/en.js"));
  register("ar", () => import("$locales/ar.js"));
</script>

<script>
  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator($session.acceptedLanguage),
  });

  onMount(() => {
    document.dir = $locale === "ar" ? "rtl" : "ltr";
    document.body.classList.add($locale === "ar" ? "rtl" : null);
    document.body.classList.remove($locale === "en" ? "rtl" : null);
  });
  afterUpdate(() => {
    document.dir = $locale === "ar" ? "rtl" : "ltr";
    document.body.classList.add($locale === "ar" ? "rtl" : null);
    document.body.classList.remove($locale === "en" ? "rtl" : null);
  });
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <script
    defer
    data-domain="ilm-marifah.com"
    src="https://plausible.io/js/plausible.js"></script>
</footer>

<style>
  footer {
    padding-bottom: 5px;
    background: var(--primary-color);
  }
  footer > div > a {
    color: var(--text-color);
  }
</style>
