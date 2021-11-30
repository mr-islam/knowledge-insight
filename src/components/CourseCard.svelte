<script>
    export let title, desc, src, level, link, book
</script>

<a href={link}>    
<div class="card-course">
            <img {src} />
        <div class=card-inner>
            
            <h3>{book}</h3>
            <subtitle>{title}</subtitle>
            <p>{desc}</p>
            <!-- <span>{level}</span> -->
        </div>
    </div>
    </a>

<style>
    div.card-course {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 8px;
        box-shadow: rgba(44, 105, 70, 0.2) 0px 2px 8px 0px;
        background-color: var(--pure-white);
        /* min-width: 200px; */
        /* flex: 2 1 calc(25% - 1em); */
        margin: 10px;
        max-width: 350px;
        min-width: 300px;
    }
    div.card-inner {
        display: flex;
        flex-direction: column;
        margin: 0 5px 0 15px;
    }
    img {
        height: auto; 
        width: auto; 
        max-width: 100px; 
        max-height: 150px;
        border-radius: 12px;
        height: auto;
        margin: 10px 0 10px 20px;
    }
</style>