<script>
  import { t, locale, locales } from "svelte-intl-precompile";
  import About from "../elements/about.svelte"
  import Courses from "../elements/courses.svelte"

</script>

{#if t} 
  <About />
  <Courses />
    
{/if}
