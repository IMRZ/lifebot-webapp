<template>
  <div id="PhrasePreviewPanel">
    <div>{{ formattedPhrase }}</div>
  </div>
</template>

<script>
import flatten from 'lodash/flatten';
import { mapGetters } from 'vuex';

export default {
  name: 'PhrasePreviewPanel',
  computed: {
    ...mapGetters(['phrase']),
    formattedPhrase() {
      const prefix = '!speak';
      return flatten([prefix, this.phrase]).join(' ');
    }
  },
}
</script>

<style lang="scss">
#PhrasePreviewPanel {
  width: 100%;
  background-color: rgb(232, 232, 232);
  font-family: monospace;
  padding: 20px;
}
</style>
