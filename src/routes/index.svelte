<script>
   	import { t, locale, locales } from 'svelte-intl-precompile'
    import CourseCard from '../components/CourseCard.svelte'
</script>

{#if t}

    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;"> 
        <h1>{$t('title')}</h1>

        <div class="about">
            <div style="display: flex; flex-direction: row;">
                <img class="img-hero-side" src="/backgrounds/madina-busy.jpg" />
                <div>
                    <p>This is </p>
                    <p>This is </p>
                    <p>This is </p>
                    <p>This is </p>
                </div>
                
            </div>
         </div>
    </div>

    

    <div class="main">
        <h1>Courses</h1>
        <div class="gallery">
            <!-- <CourseCard 
                    title={""} 
                    desc={""} 
                    src={""} 
                    level={""} 
                    link={""} 
                    price={""} 
                    action={""}
                /> -->
                <CourseCard 
                    title={"Tajwid Level 1"} 
                    desc={"Tajwid is the science of perfecting recitation of Allah Almighty's book, and it's core principles are obligatory for every Muslim to learn. Go through the classic primer \"al-Qaida al-Nuraniyya\" in this course to learn how to give the Quran it's right and preserve your Salah from invalidation."} 
                    src={"/designs/tajwid1.png"} 
                    level={"1"} 
                    link={"/courses/tajwid1"} 
                    price={""} 
                    action={"now"}
                />
                <CourseCard 
                    title={"Hadith Level 1"} 
                    desc={"The Hadith are the precisely preserverd sayings of our Noble Prophet (ﷺ), and must be studied, learned, and also deserve to be memorized. In this course, explore the 42 Hadith that summarize Islam - gathered by one of the greatest scholars in Islam, Imam al-Nawawi. "} 
                    src={"/designs/hadith1.png"} 
                    level={"1"} 
                    link={""} 
                    price={""} 
                    action={"later"}
                />
                <CourseCard 
                    title={"Hadith Level 1"} 
                    desc={"The Hadith are the precisely preserverd sayings of our Noble Prophet (ﷺ), and must be studied, learned, and also deserve to be memorized. In this course, explore the 42 Hadith that summarize Islam - gathered by one of the greatest scholars in Islam, Imam al-Nawawi. "} 
                    src={"/designs/hadith1.png"} 
                    level={"1"} 
                    link={""} 
                    price={""} 
                    action={"later"}
                />
        </div>
    </div>

{/if}

<style>
    
    img.img-hero-side {
        max-width: 40vw;
        border-radius: 16px;
        border: 10px white solid;
        margin: 0 56px 56px 72px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    div.about {
        min-width: 100vw;
        max-width: 100vw;
    }
    div.main {
        min-height: 100vh;
        min-width: 100vw;
        max-width: 100vw;
        /* background-image: ; */
    }
    div.gallery {
        display: flex;
        flex-direction: row;
        /* justify-content: space-between; */
        flex-wrap: wrap;

    }
    p {
        text-align: "center";
    }
</style>