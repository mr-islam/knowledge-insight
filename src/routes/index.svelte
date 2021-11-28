<script>
   	import { t, locale, locales } from 'svelte-intl-precompile'
    import CourseCard from '../components/CourseCard.svelte'
</script>

{#if t}

    <div class="first-section"> 
        <h1>{$t('title')}</h1>

        <div class="about">
                <img class="img-hero-side" src="/backgrounds/madina-busy.jpg" />
                <div class="paras-about">
                    <p>As salamu alaykum, peace be upon you, welcome to the Center for Knowledge & Insight 🍃</p>
                    <p>Our mission is to provide Muslims and all people with reliable, authentic, and accessible Islamic knowledge. There is nothing the world is more in need of. </p>
                    <p>Knowledge is truly gained from qualified scholars and teachers, and it's our goal to connect students all around the world to true scholars who connect them to the Noble Prophet (ﷺ).</p>                
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
                    link={"/courses/hadith1"} 
                    price={""} 
                    action={"later"}
                />
        </div>
    </div>

{/if}

<style>
    div.first-section {
        display: flex; flex-direction: column; justify-content: center; align-items: center;
        flex-wrap: wrap;
    }
    div.paras-about {
        min-width: 200px;
    }
    img.img-hero-side {
        max-width: 40vw;
        min-width: 200px;
        border-radius: 16px;
        border: 10px white solid;
        margin: 16px 56px 56px 72px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    div.about {
        flex:1; 

display:flex;
justify-content:center;
align-items:center;
    }
    @media only screen and (max-width: 1000px) {
        div.about {
    flex-direction:column;
  }
}
    div.main {
        min-height: 100vh;
        min-width: 100vw;
        max-width: 100vw;
        /* background-image: ; */
    }
    div.gallery {
  flex:1; 

  display:flex;
  justify-content:center;
  align-items:center;
    }
    @media only screen and (max-width: 600px) {
  div.gallery {
    flex-direction:column;
  }
}



    div.paras-about {
        margin: 32px 86px 56px 56px;
    }
    p {
        text-align: "center";
        font-size: larger;
    }
    
</style>