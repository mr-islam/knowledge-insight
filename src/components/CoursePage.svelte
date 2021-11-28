<script>
    export let title, desc, src, level, link, action
</script>

<!-- UNUSED RIGHT NOW -->

{#if action === "now"}
    <div class="card-course">
        <div class=card-inner>
            <img {src} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={link}>Register Now</a>
        </div>
    </div>
{:else}
<div class="card-course">
    <div class=card-inner>
        <img {src} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href="mailto:ilm.marifah.center@gmail.com">Contact us</a>
    </div>
</div>
{/if}

<style>
    div.card-course {
        border-radius: 8px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        max-width: 33%;
        /* flex: 1 1 calc(25% - 1em); */
        margin: 10px;
    }
    div.card-inner {
        display: flex;
        flex-direction: column;
        margin: 15px;
    }
    img {
        border-radius: 12px;
    }
    a {
        border: 4px;
        background: "#EBFFDE"
    }
</style>