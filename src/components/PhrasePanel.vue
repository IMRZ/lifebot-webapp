<template>
  <div id="PhrasePanel">
    <div class="row info-panel">
      <p>Start typing for auto complete.</p>
      <p>and</p>
      <p>Copy the text below!</p>
    </div>
    <PhrasePreviewPanel class="row" />
  </div>
</template>

<script>
import PhrasePreviewPanel from '@/components/PhrasePreviewPanel';

export default {
  name: 'PhrasePanel',
  components: {
    PhrasePreviewPanel
  }
}
</script>

<style lang="scss">
#PhrasePanel {
  display: flex;
  width: 25%;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #f3f3f3;

  .row {
    margin-bottom: 40px;
  }

  .info-panel {
    width: 100%;
    background-color: rgb(232, 232, 232);
    padding: 20px;
  }
}
</style>
