<script>
    import { page } from '$app/stores';
    import { t, locale, locales } from "svelte-intl-precompile";
    import CourseCard2 from '../../components/CourseCard2.svelte';
</script>



<h1> </h1>
<br>
<br>
{$page.params.slug}
<h1>{$t(`courses.${$page.params.slug}.title`)}</h1>

<CourseCard2 id={"tajwid-qaida"} title={$t(`courses.${$page.params.slug}.title`)} desc={$t(`courses.${$page.params.slug}.desc`)} book={$t(`courses.${$page.params.slug}.book`)} src={$t(`courses.${$page.params.slug}.src`)} />