<template>
  <div id="SearchAutoComplete"  @click="focusInput">
    <div class="wrapper">
      <div class="item" v-for="(p, $index) in phrase" :key="$index">
        <div class="aligner">
          <span>{{ p }}</span>
          <RemoveIconButton @click.native="onRemoveClickHandler($index)" />
        </div>
      </div>
      <input
        ref="input"
        v-model="searchText"
        v-on:keydown.8="onBackspaceKeydownHandler"
        @keydown.up="onInputKeyUpHandler"
        @keydown.down="onInputKeyDownHandler"
        @keyup.enter="onEnterKeyHandler"
        :placeholder="phrase.length ? 'Add another word...' : 'Start typing...' "
      />
    </div>
    <div class="search-results" :class="{ 'visible': !results.length  }">
      <a
        class="search-item"
        v-for="(result, $index) in results"
        :key="result"
        @click="onClickHandler(result)"
        :style="searchSuggestionHighlight !== $index ? '' : 'font-weight: bold;'"
      >
        {{ result }}
      </a>
    </div>
  </div>
</template>

<script>
import sounds from '@/store/sounds.json';
import flatten from 'lodash/flatten';
import RemoveIconButton from '@/components/icons/RemoveIconButton';

// TODO: search suggestion scroll => document.getElementById("a").scrollIntoView();

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SearchAutoComplete',
  components: {
    RemoveIconButton
  },
  data() {
    return {
      searchText: '',
      searchSuggestionHighlight: 0,
      results: []
    };
  },
  watch: {
    searchText(value) {
      if (value) {
        this.results = sounds.filter(sound =>
          sound.startsWith(value.toLowerCase())
        );
      } else {
        this.results = [];
      }
    }
  },
  computed: {
    ...mapGetters(['phrase'])
  },
  methods: {
    ...mapMutations(['setPhrase']),
    onBackspaceKeydownHandler() {
      if (this.searchText === '') {
        const phrase = this.phrase.slice();
        phrase.splice(-1, 1);
        this.setPhrase(phrase);
      }
    },
    onRemoveClickHandler(index) {
      const phrase = this.phrase.slice();
      phrase.splice(index, 1);
      this.setPhrase(phrase);
      this.focusInput();
    },
    onClickHandler(value) {
      const phrase = this.phrase.slice();
      phrase.push(value);
      this.setPhrase(phrase);
      this.clearInput();
    },
    onEnterKeyHandler() {
      if (this.results.length > 0) {
        const value = this.results[this.searchSuggestionHighlight];
        const phrase = this.phrase.slice();
        phrase.push(value);
        this.setPhrase(phrase);
        this.clearInput();
      }
    },
    onInputKeyUpHandler(e) {
      e.preventDefault();
      const highlistIndex = this.searchSuggestionHighlight - 1;
      if (highlistIndex >= 0) {
        this.searchSuggestionHighlight = highlistIndex;
      }
      return false;
    },
    onInputKeyDownHandler(e) {
      e.preventDefault();
      const highlistIndex = this.searchSuggestionHighlight + 1;
      if (this.results.length > highlistIndex) {
        this.searchSuggestionHighlight = highlistIndex;
      }
    },
    clearInput() {
      this.searchText = '';
      this.searchSuggestionHighlight = 0;
      this.focusInput();
    },
    focusInput() {
      this.$refs.input.focus();
    }
  }
};
</script>

<style lang="scss">
#SearchAutoComplete {
  background-color: rgb(232, 232, 232);
  color: rgba(0, 0, 0, 0.6);
  width: 100%;
  position: relative;
  z-index: 10;
  cursor: text;

  .wrapper {
    padding: 20px;
  }

  .item {
    display: inline-block;
    padding: 8px 2px 8px 8px;
    margin: 4px 4px 0 0;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.5);

    .aligner {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .remove-item {
      cursor: pointer;
    }
  }

  .search-results {
    max-height: 300px;
    min-height: 0;
    overflow: auto;
    padding: 0 20px 20px 20px;
    position: absolute;
    z-index: 11;

    background-color: rgb(232, 232, 232);
    left: 0;
    right: 0;

    .search-item {
      padding: 4px;
      display: block;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    &.visible {
      height: 0;
      padding: 0;
      border: none;
    }
  }
}
</style>
