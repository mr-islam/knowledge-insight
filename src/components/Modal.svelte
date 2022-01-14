<script>
  import { t } from "svelte-intl-precompile";
  import { closeModal } from "svelte-modals";

  // provided by Modals
  export let isOpen;
</script>

{#if isOpen}
  <div role="dialog" class="modal">
    <div class="contents">
      <h1>{$t("shaykh.long_bio_title")}</h1>

      <h2>{$t("shaykh.long_bio_studies_title")}</h2>
      <p>{$t("shaykh.long_bio_studies_1")}</p>
      <p>{$t("shaykh.long_bio_studies_2")}</p>
      <p>{$t("shaykh.long_bio_studies_3")}</p>

      <h2>{$t("shaykh.long_bio_spirituality_title")}</h2>
      <p>{$t("shaykh.long_bio_spirituality_1")}</p>
      <p>{$t("shaykh.long_bio_spirituality_2")}</p>
      <p>{$t("shaykh.long_bio_spirituality_3")}</p>

      <div class="actions">
        <button on:click={closeModal}>OK</button>
      </div>
    </div>
  </div>
{/if}

<style>
  h1 {
    color: black;
    margin: 0 0 10px 0;
  }
  h2 {
  }
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    /* allow click-through to backdrop */
    pointer-events: none;
  }

  .contents {
    min-width: 300px;
    max-width: 800px;
    border-radius: 6px;
    padding: 16px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;

    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    margin: 1em 0em 0em 0em;
    font-weight: bold;
  }

  p {
    text-align: center;
    margin-top: 16px;
  }

  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }
</style>
