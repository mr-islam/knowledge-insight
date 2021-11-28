<script>
    export let title, desc, imgpath, level, link
</script>

<div class="CourseCard">
    <img src={imgpath} />
    <h3>{title}</h3>
    <p>{desc}</p>
    <span>{level}</span>
    <a href={link}>Learn more →</a>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        border-radius: 8;
        border: solid 1px gray;
    }
</style>