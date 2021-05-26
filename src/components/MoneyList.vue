<template>
  <div class="list">
    <div
      v-for="item in moneys"
      :key="item.index"
      class="money-item"
      @click="handleSelected(item.index)"
    >
      <span :style="select === item.index ? 'color: #3068F4' : ''">{{
        item.valueStr
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    moneys: {
      type: Array,
    },
  },
  data() {
    return {
      select: 0,
    };
  },
  methods: {
    handleSelected(index) {
      this.select = index;
      this.$emit('clickItem', index)
    },
  },
};
</script>

<style lang="scss" scoped>
$breakpoints: (
  small: 500px,
  medium: 900px,
  large: 1400px,
);
.list {
  display: flex;
  flex-direction: column;
  .money-item {
    color: #333333;
    text-align: center;
    line-height: 56px;
    font-size: 18px;
    width: 220px;
    height: 56px;
    @include media(">=medium", "<large") {
      line-height: 42px;
      font-size: 14px;
      width: 180px;
      height: 46px;
    }
    @include media(">=small", "<medium") {
      line-height: 36px;
      font-size: 12px;
      width: 120px;
      height: 36px;
    }
  }
  .money-item:hover {
    background: #f4f6f9;
  }
}
</style>