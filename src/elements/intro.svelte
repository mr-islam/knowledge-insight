<script context="module">
  import { t, locale, locales } from "svelte-intl-precompile";
</script>

<!-- <div class="slogan">
  <h2 class="slogan-text"></h2>
  <p class="slogan-text">
    Complete Islamic education taught by qualified scholars
  </p>
  <br />
</div> -->
<div class="paras-about">
  <div>
    <!-- <p>{$t("welcome.para_1")}</p> -->
    <p>{$t("welcome.para_2")}</p>
    <br />
    <p>{$t("welcome.para_3")}</p>
  </div>
</div>

<style>
  div.slogan {
    text-align: center;
    min-width: 100%;
    /* margin-top: 300px; */
  }
  .slogan-text,
  p {
    
    margin: 0 auto;
  }
  h2.slogan-text {
    
  }
  p.slogan-text {
    font-size: 1.5rem;
  }
  div.paras-about {
    background: #a4a6a9;
    min-width: 100%;
    /* margin: 25vh 0 56px 0; */
  }
  div.paras-about > div {
    display: flex;
    flex-direction: row;
    padding: 10vh 5vw;
  }
  div.about {
    position: absolute;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    z-index: -1;
    min-width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-image: url("/backgrounds/madina-busy.jpg");
  }
  p {
    
  }
  @media only screen and (max-width: 600px) {
    div.about {
      position: absolute;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 15vh;
      z-index: -1;
      min-width: 100vw;
      min-height: 60vh;
    }
    div.slogan {
      margin-top: 35vh;
    }
    h2.slogan-text {
      font-size: 2rem;
      font-weight: bold;
    }
    p.slogan-text {
      font-size: 1.1rem;
    }
    div.paras-about {
      background: #a4a6a9;
      min-width: 100%;
      margin: 15vh 0 56px 0;
    }
    div.paras-about > div {
      padding: 10vh 1vw;
      flex-direction: column;
    }
  }
</style>
