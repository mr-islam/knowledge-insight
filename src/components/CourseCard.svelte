<script>
    export let title, desc, src, level, link, action
</script>

{#if action === "card-course"}
    <div class="CourseCard">
        <div class=card-inner>
            <img {src} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <!-- <span>{level}</span> -->
            <a href={link}>Register Now</a>
        </div>
    </div>
{:else}
<div class="card-course">
    <div class=card-inner>
        <img {src} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <!-- <span>{level}</span> -->
        <a href="mailto:ilm.marifah.center@gmail.com">Contact us</a>
    </div>
</div>
{/if}

<style>
    div.card-course {
        border-radius: 8px;
        border: solid 1px gray;
        max-width: 50vw;
        margin: 5px;
    }
    div.card-inner {
        display: flex;
        flex-direction: column;
        margin: 8px;
    }
    img {
        border-radius: 12px;
    }
    a {
        border: 4px;
        background: "#EBFFDE"
    }
</style>