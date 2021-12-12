<script>
  import { t, locale, locales } from "svelte-intl-precompile";

  import Intro from "../elements/intro.svelte";
  import Courses from "../elements/courses.svelte";
  import About from "../elements/about.svelte";
  import HeroGallery from "../elements/heroGallery.svelte";
  import Articles from "../elements/articles.svelte";
</script>

{#if t}
  <HeroGallery />
  <Intro />
  <Courses />
  <Articles />
  <About />
{/if}
