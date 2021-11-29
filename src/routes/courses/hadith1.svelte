<script>
    import { t } from 'svelte-intl-precompile'
    import CourseCard from '../../components/CourseCard.svelte'
</script>

<div>
    <CourseCard 
        title={$t('courses.hadith1.title')} 
        desc={$t('courses.hadith1.desc')} 
        src={"/designs/hadith1.png"} 
        level={"1"} 
        link={"/courses/hadith1"} 
        price={""} 
        action={"later"}
    />

<br>
<p>{ $t('courses.contact_later') }</p>
<br><br>
</div>

<style>
    div {
        min-width: vw;
        min-height: vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 20px 0 20px;
    }
</style>