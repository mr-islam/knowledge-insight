<script>
    import CourseCard from '../../components/CourseCard.svelte'
</script>

<div>
    <CourseCard 
    title={"Tajwid Level 1"} 
    desc={"Tajwid is the science of perfecting recitation of Allah Almighty's book, and it's core principles are obligatory for every Muslim to learn. Go through the classic primer \"al-Qaida al-Nuraniyya\" in this course to learn how to give the Quran it's right and preserve your Salah from invalidation."} 
    src={"/designs/tajwid1.png"} 
    level={"1"} 
    link={""} 
    price={""} />

<p>This course begins when a group of students are ready. Please contact your family, fellow students and friends and let us know when you are ready.</p>
<a href="mailto:ilm.marifah.center@gmail.com"> Contact us</a>

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