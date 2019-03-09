<template>
  <div class="ztab">
    <div class="ztab-item">
      <span>精选</span>
    </div>
    <div class="ztab-item">
      <span>VIP</span>
    </div>
    <div class="ztab-item">
      <span>分类</span>
    </div>
    <div class="ztab-item">
      <span>排行</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZTab",
  components: {},
  methods: {},
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
.ztab {
  height: 1.067rem;
  background-color: #b93321;
  font-size: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.2rem;
}
.ztab-item {
  span {
    display: inline-block;
    width: 100%;
    font-size: 14px;
    color: #fff;
  }
}
</style>