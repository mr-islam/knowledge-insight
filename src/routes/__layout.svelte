<script context="module">
  import { t, locale, locales, register, init, getLocaleFromNavigator /*, register */ } from 'svelte-intl-precompile';
  import { session } from '$app/stores';
  import en from '$locales/en.js';
  import ar from '$locales/ar.js';

  // addMessages('en', en);
  // addMessages('ar', ar);
  register('en', () => import('$locales/en.js'));
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
	<slot />
</main>

<footer>
  <div style="text-align: center;">
    {$t('footer-label')}
  </div>
</footer>