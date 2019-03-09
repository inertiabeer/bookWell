<template>
  <div id="app">
    <ZHeader></ZHeader>
    <ZTab></ZTab>
    <ZSwiper></ZSwiper>
    <NovelList></NovelList>
  </div>
</template>

<script>
import ZHeader from "./components/ZHeader";
import ZTab from "./components/ZTab";
import ZSwiper from "./components/ZSwiper";
import NovelList from "./components/NovelList";
export default {
  name: "app",
  components: {
    ZHeader,
    ZTab,
    ZSwiper,
    NovelList
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  margin: 0 auto;
  width: 100%;

  max-width: 1024px;
}
</style>
