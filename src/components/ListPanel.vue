<template>
  <div id="ListPanel">
    <div
      class="item"
      v-for="sound in sounds"
      :key="sound"
    >
      {{ sound }}
      <span style="flex: 1;"></span>
      <PlayIconButton @click.native="playSound(sound)" />
    </div>
  </div>
</template>

<script>
import PlayIconButton from '@/components/icons/PlayIconButton';

import sounds from '@/store/sounds.json';

export default {
  name: 'ListPanel',
  components: {
    PlayIconButton
  },
  data() {
    return {
      sounds
    };
  },
  methods: {
    playSound(sound) {
      new Audio(`static/vox/${sound}.ogg`).play();
    }
  }
}
</script>

<style lang="scss">
#ListPanel {
  width: 25%;
  padding: 20px;
  background-color: #f3f3f3;
  overflow-y: scroll;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgb(232, 232, 232);
    color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    margin-bottom: 10px;

    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
