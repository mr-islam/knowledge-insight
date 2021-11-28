<script>
   	import { t, locale, locales } from 'svelte-intl-precompile'
    import CourseCard from '../components/CourseCard.svelte'
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
            <!-- <CourseCard 
                    title={""} 
                    desc={""} 
                    mgsrc={""} 
                    level={""} 
                    link={""} 
                    price={""} 
                /> -->
                <CourseCard 
                    title={"Tajwid Level 1"} 
                    desc={"Tajwid is the science of perfecting recitation of Allah Almighty's book, and it's core principles are obligatory for every Muslim to learn. Go through the classic primer \"al-Qaida al-Nuraniyya\" in this course to learn how to give the Quran it's right and preserve your Salah from invalidation."} 
                    src={"designs/tajwid1.png"} 
                    level={"1"} 
                    link={""} 
                    price={""} 
                />
                <CourseCard 
                    title={"Hadith Level 1"} 
                    desc={""} 
                    mgsrc={""} 
                    level={""} 
                    link={""} 
                    price={""} 
                />
        </div>
    </div>

{/if}

<style>
    div.main {
        min-height: 100vh;
        min-width: 100vw;
        padding: 0 10px 0 10px;
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