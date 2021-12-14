<script context="module">
  import { t } from "svelte-intl-precompile";
</script>

<div class="paras-about">
  <div>
    <div>
      <span>🔗</span>
      <p>{$t("welcome.para_3")}</p>
    </div>
    <div id="courses">
      <span>🌐</span>

      <p>
        {$t(
          "Access your lessons and recordings wherever you are—learning always goes on."
        )}
      </p>
    </div>
  </div>
</div>

<style>
  P {
    color: var(--pure-white);
  }
  div.paras-about {
    background: var(--accent-color);
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
    background: var(--secondary-color);
    border-radius: 360px;
  }

  @media only screen and (max-width: 600px) {
    div.paras-about {
      background: var(--accent-color);
      min-width: 100%;
      margin: 0 0 56px 0;
    }
    div.paras-about > div {
      padding: 10vh 5vw;
      grid-template-columns: 1fr;
    }
  }
</style>
