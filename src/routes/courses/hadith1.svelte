<script>
    import CourseCard from '../../components/CourseCard.svelte'
</script>

<div>
    <CourseCard 
        title={"Hadith Level 1"} 
        desc={"The Hadith are the precisely preserverd sayings of our Noble Prophet (ﷺ), and must be studied, learned, and also deserve to be memorized. In this course, explore the 42 Hadith that summarize Islam - gathered by one of the greatest scholars in Islam, Imam al-Nawawi. "} 
        src={"/designs/hadith1.png"} 
        level={"1"} 
        link={"/courses/hadith1"} 
        price={""} 
        action={"later"}
    />

<p>This course begins when a group of students are ready. Please contact your family, fellow students and friends and let us know when you are ready.</p>
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
    }
</style>