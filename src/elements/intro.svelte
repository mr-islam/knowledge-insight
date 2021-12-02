<script context="module">
  import { t } from "svelte-intl-precompile";
</script>

<div class="paras-about">
  <div>
    <div>
      <span>🌳</span>
      <p>{$t("welcome.para_3")}</p>
    </div>
    <div>
      <span>🌳</span>

      <p>{$t("welcome.para_3")}</p>
    </div>
    <div>
      <span>🌳</span>

      <p>{$t("welcome.para_3")}</p>
    </div>
    <div>
      <span>🌳</span>

      <p>{$t("welcome.para_3")}</p>
    </div>
  </div>
</div>

<style>
  P {
    color: var(--pure-white);
  }
  div.paras-about {
    background: #a4a6a9;
    width: 100%;
    /* margin: 25vh 0 56px 0; */
  }
  div.paras-about > div {
    padding: 10vh 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
  }
  div.paras-about > div > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  span {
    padding: 10px 10px 10px 10px;
    margin-right: 10px;
    background: white;
    border-radius: 360px;
  }

  @media only screen and (max-width: 600px) {
    
    div.paras-about {
      background: #a4a6a9;
      min-width: 100%;
      margin: 0 0 56px 0;
    }
    div.paras-about > div {
      padding: 10vh 5vw;
      grid-template-columns: 1fr;
    }
  }
</style>
