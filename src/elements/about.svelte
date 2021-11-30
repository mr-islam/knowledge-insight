<script context="module">
    import { t, locale, locales } from "svelte-intl-precompile";
    import Books from "../elements/books.svelte"

  </script>
  
  <div class="container">
    <h1> About Us </h1>
    <div class="flex-row">
        <div>
            <Books />
        </div>
        <div>
            <p>dawds</p>
        </div>
    </div>
  </div>
  
  
  <style>
      h1, h2, p {
          color: white;
      }
      div.container {
          background: #353640;
          padding: 5vh 0;
          color: white;
      }
      div.flex-row {
          padding: 0 5vw;
      }
  </style>
  