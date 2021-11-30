<script context="module">
  import { t, locale, locales } from "svelte-intl-precompile";
  import Books from "../elements/books.svelte";
</script>

<div class="container">
  <h1>About Us</h1>
  <div class="flex-row">
    <div class="img-left">
      <Books />
    </div>
    <div class="text-right">
      <p>Led by Shaykh</p>
      <p>Based in Jordan</p>
    </div>
  </div>
</div>

<style>
  h1,
  h2,
  p {
    color: white;
  }
  div.container {
    background: #353640;
    padding: 5vh 0;
    color: white;
  }
  div.flex-row {
    padding: 0 5vw;
    justify-content:space-between;
    align-items: center;
  }
  div.image-left {
      margin-right: 20px;
  }
  div.text-right {
      min-width: 50%;
  }
  @media only screen and (max-width: 600px) {
    div.flex-row {
      padding: 0 5vw;
      flex-direction: column;
    }
  }
</style>
