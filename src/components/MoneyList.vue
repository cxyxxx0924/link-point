<template>
  <div class="list">
    <div v-for="item in moneys" :key="item.index" class="money-item" @click="handleSelected(item.index)">
      <span :style="select===item.index ? 'color: #3068F4' : ''">{{ item.valueStr }}</span> 
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
      select: 0
    }
  },
  methods: {
    handleSelected(index) {
      this.select = index
    }
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  .money-item {
    font-size: 18px;
    color: #333333;
    text-align: center;
    line-height: 56px;
    width: 220px;
    height: 56px;
  }
  .money-item:hover {
    background: #f4f6f9;
  }
}
</style>