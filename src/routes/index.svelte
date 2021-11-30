<script>
  import { t, locale, locales } from "svelte-intl-precompile";
  import Intro from "../elements/intro.svelte"
  import Courses from "../elements/courses.svelte"

</script>

{#if t} 
  <Intro />
  <Courses />
    
{/if}
