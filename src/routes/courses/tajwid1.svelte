<script>
    import { t } from 'svelte-intl-precompile'
    import CourseCard from '../../components/CourseCard.svelte'
    import Pay from '../../components/Pay.svelte'
</script>

<div>
    <CourseCard 
    title={$t('courses.tajwid1.title')} 
    desc={$t('courses.tajwid1.desc_long')} 
    src={"/designs/tajwid1.png"} 
    level={"1"} 
    link={""} 
    price={""} 
    />


    <h3>{ $t('courses.lengths.3month_2week_1hour') } </h3>
    <h2>{ $t('payment.price_140') }</h2>
    <Pay price={5} />
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