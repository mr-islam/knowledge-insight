<script>
   	import { t, locale, locales } from 'svelte-intl-precompile'
</script>

{#if t}
    <div class="main"> 
        <h1>
            {$t('title')}
        </h1>
    </div>
    <div class="main">
        <h1>About Us</h1>
        <p></p>
    </div>
    <div class="main">
        <h1>Courses</h1>
        <div class="gallery">

        </div>
    </div>
{/if}

<style>
    div.main {
        min-height: 100vh;
        min-width: 100vw;
        /* background-image: ; */
    }
    div.gallery {
        display: flex;
        flex-direction: row;
    }
    p {
        text-align: "center";
    }
</style>