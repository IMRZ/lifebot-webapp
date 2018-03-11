<template>
  <div id="PhraseCopyButton" @click="phraseToClipboard">
    COPY
  </div>
</template>

<script>
import flatten from 'lodash/flatten';

export default {
  name: 'PhraseCopyButton',
  props: {
    phrase: Array
  },
  methods: {
    phraseToClipboard() {
      const prefix = '!speak';
      const combined = [prefix, this.phrase];
      const result = flatten(combined);
    }
  }
}
</script>

<style lang="scss">
#PhraseCopyButton {
  height: 30px;
  width: 30px;
  margin: 10px;
}
</style>
