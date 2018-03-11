<template>
  <div id="SearchPanel">
    <SearchAutoComplete />
  </div>
</template>

<script>
import SearchAutoComplete from '@/components/SearchAutoComplete';

export default {
  name: 'SearchPanel',
  components: {
    SearchAutoComplete
  }
};
</script>

<style lang="scss">
#SearchPanel {
  display: flex;
  width: 50%;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  background-color: #f3f3f3;
  overflow-y: auto;
}
</style>
