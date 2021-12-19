<script>
  import { page } from "$app/stores";
  import { t, locale, locales } from "svelte-intl-precompile";
  import CourseCard2 from "../../components/CourseCard2.svelte";
</script>

<br />
<br />
<br />
<br />
<h1>{$t(`courses.${$page.params.slug}.title`)}</h1>

<div id="card-holder">
  <CourseCard2
    id={$page.params.slug}
    title={$t(`courses.${$page.params.slug}.title`)}
    desc={$t(`courses.${$page.params.slug}.desc`)}
    book={$t(`courses.${$page.params.slug}.book`)}
    src={$t(`courses.${$page.params.slug}.src`)}
  />
</div>

<h1>{$t("coursePage.about")}</h1>
<div id="about-text">
  {@html $t(`courses.${$page.params.slug}.explanation`)}
</div>

<style>
  div#about-text {
    margin: 10px 25vw;
    font-size: x-large;
  }
  br {
    margin-bottom: 10px;
  }
  div#card-holder {
    display: grid;
    place-items: center;
  }
  @media only screen and (max-width: 700px) {
    div#about-text {
    margin: 10px 3vw;
    font-size: larger;
  }
  }
</style>
