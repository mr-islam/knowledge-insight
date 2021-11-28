<script>
    import CourseCard from '../../components/CourseCard.svelte'
</script>

<div>
    <CourseCard 
    title={"Tajwid Level 1"} 
    desc={"Tajwid is the science of perfecting recitation of Allah Almighty's book, and it's core principles are obligatory for every Muslim to learn. Go through the classic primer \"al-Qaida al-Nuraniyya\" in this course to learn how to give the Quran it's right and preserve your Salah from invalidation."} 
    src={"designs/tajwid1.png"} 
    level={"1"} 
    link={""} 
    price={""} 
    action={"now"}
/>
</div>

<style>
    div {
        min-width: vw;
        min-height: vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>