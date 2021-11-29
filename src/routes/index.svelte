<script>
   	import { t, locale, locales } from 'svelte-intl-precompile'
    import CourseCard from '../components/CourseCard.svelte'
</script>

{#if t}

    <div class="first-section"> 
        <h1>{$t('title')}</h1>

        <div class="about">
                <img alt="The Holy Mosque of Madinah" class="img-hero-side" src="/backgrounds/madina-busy.jpg" />
                <div class="paras-about">
                    <p>{ $t('welcome.para_1') }</p>
                    <p>{ $t('welcome.para_2') } </p>
                    <p>{ $t('welcome.para_3') }</p>                
            </div>
         </div>
    </div>

    

    <div class="main">
        <h1>{ $t('courses.title') }</h1>
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
                    title={$t('courses.tajwid1.title')} 
                    desc={$t('courses.tajwid1.desc')} 
                    src={"/designs/tajwid1.png"} 
                    level={"1"} 
                    link={"/courses/tajwid1"} 
                    price={""} 
                    action={"now"}
                />
                <CourseCard 
                    title={$t('courses.hadith1.title')} 
                    desc={$t('courses.hadith1.desc')} 
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