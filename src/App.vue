<template>
  <div id="App">
    <div class="header">
      <h1>lifebot</h1>
    </div>
    <div class="content">
      <ListPanel />
      <SearchPanel />
      <PhrasePanel />
    </div>
  </div>
</template>

<script>
import ListPanel from '@/components/ListPanel';
import PhrasePanel from '@/components/PhrasePanel';
import SearchPanel from '@/components/SearchPanel';

export default {
  name: 'App',
  components: {
    ListPanel,
    PhrasePanel,
    SearchPanel
  }
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

@import url('https://fonts.googleapis.com/css?family=Roboto');

#App {
  height: 100%;
  z-index: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f3f3f3;

  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: row;
    height: 80px;
    padding-left: 20px;
    background-color: rgb(232, 232, 232);
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
}
</style>
