<script>
  import { t, locale, locales } from "svelte-intl-precompile";
  import Intro from "../elements/intro.svelte"
  import Courses from "../elements/courses.svelte"
  import About from "../elements/about.svelte"
</script>

{#if t} 
  <Intro />
  <Courses />
  <About />
{/if}
