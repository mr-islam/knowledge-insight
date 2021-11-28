<script>
    export let title, desc, src, level, link
</script>

    <div class="card-course">
        <div class=card-inner>
            <a href={link}>
                <img {src} />
                <h3>{title}</h3>
            </a>
            <p>{desc}</p>
            <!-- <span>{level}</span> -->
        </div>
    </div>

<style>
    div.card-course {
        border-radius: 8px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        /* max-width: 30%; */
        /* min-width: 200px; */
        /* flex: 2 1 calc(25% - 1em); */
        margin: 10px;
    }
    div.card-inner {
        display: flex;
        flex-direction: column;
        margin: 15px;
    }
    img {
        border-radius: 12px;
        max-width: 100%;
    }
    a {
        border: 4px;
        background: "#EBFFDE"
    }
</style>