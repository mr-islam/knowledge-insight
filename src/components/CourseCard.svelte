<script>
  export let title, desc, src, level, link, book;
</script>

<a href={link}>
  <div class="card-course">
    <img {src} />
    <div class="card-inner">
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
    transition: top ease 200ms;
    transition: box-shadow ease 200ms;
  }
  div.card-course:hover {
    box-shadow: rgba(44, 105, 70, 0.2) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    top: -10px;
  }
  div.card-inner {
    display: flex;
    flex-direction: column;
    margin: 0 5px 0 15px;
  }
  img {
    /* height: auto; */
    /* width: auto; */
    /* max-width: 100px; */
    max-height: 163px;
    border-radius: 8px;
    /* margin-left: 10px; */
  }
  a {
    color: var(--text-color);
  }
  subtitle {
    font-weight: 400;
    font-style: italic;
  }
</style>
