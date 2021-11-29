<script context="module">
  import { t, locale, locales, register, addMessages, init, getLocaleFromNavigator /*, register */ } from 'svelte-intl-precompile';
  import { session } from '$app/stores';
  import en from '$locales/en.js';
  import ar from '$locales/ar.js';

  addMessages('en', en);
  // addMessages('ar', ar);
  // register('en', () => import('$locales/en.js'));
  register('ar', () => import('$locales/ar.js'));


	import '../app.css';  

</script>

<script>
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator($session.acceptedLanguage)
  });	
</script>

<header>
  <select id="select-lang" on:change={() => {$locale = document.getElementById('select-lang').selectedOptions[0].value; }}>
    {#each $locales as loc}
        <option value={loc}>{loc}</option>
    {/each}
  </select>
</header>



<main>
  <div style="display: flex; justify-content: center;">
    <a href="/">
      <img alt="Logo of Arabic calligraphy" id="logo" src="/logo.jpg" />
    </a>
  </div>

	<slot />
</main>

<footer>
  <div style="text-align: center;">
    {$t('title')}
    *
    <a href="mailto:ilm.marifah.center@gmail.com">{ $t('contact_us') }</a>
  </div>
  <script defer data-domain="ilm-marifah.com" src="https://plausible.io/js/plausible.js"></script>
</footer>

<style>
  img#logo {
        border: 2px black solid;
        border-radius: 360px;
        max-width: 10vw;
    }
</style>