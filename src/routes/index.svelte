<script>
  import { t, locale, locales } from "svelte-intl-precompile";
  import About from "../elements/about.svelte"
  import Courses from "../elements/courses.svelte"

</script>

{#if t} 
  <About />
  <Courses />
    
{/if}

<style>

  
  div.main {
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    /* background-image: ; */
  }
  div.gallery {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 20px 30px 20px;
  }
  @media only screen and (max-width: 600px) {
    div.gallery {
      flex-direction: column;
    }
  }
  
</style>
