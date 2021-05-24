<template>
  <div>
    <div class="tip">
      <span>此价格为现金买卖价格，仅供参考</span>
      <span>更新日期：2019/10/12</span>
    </div>
    <div class="label">
      <div class="first"><span>名称</span></div>
      <span>买入价</span>
      <span>卖出价</span>
    </div>
    <div class="money-list">
      <div class="label" v-for="item in moneyList" :key="item.id">
        <!-- {{ item }} -->
        <div class="first">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span> / <span>{{ item.shorthand }}</span>
        </div>
        <span>{{ item.price }}</span>
        <span>{{ item.sell }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.moneyList = [
      {
        icon: "el-icon-platform-eleme",
        label: "人民币",
        shorthand: "RMB",
        price: "0.918",
        sell: "0.91",
        id: 0,
      },
      {
        icon: "el-icon-star-on",
        label: "英镑",
        shorthand: "GBP",
        price: "0.918",
        sell: "0.91",
        id: 1,
      },
      {
        icon: "el-icon-s-goods",
        label: "人民币",
        shorthand: "RMB",
        price: "0.918",
        sell: "0.91",
        id: 2,
      },
      {
        icon: "el-icon-warning",
        label: "英镑",
        shorthand: "GBP",
        price: "0.918",
        sell: "0.91",
        id: 3,
      },
      {
        icon: "el-icon-s-goods",
        label: "人民币",
        shorthand: "RMB",
        price: "0.918",
        sell: "0.91",
        id: 4,
      },
      {
        icon: "el-icon-warning",
        label: "英镑",
        shorthand: "GBP",
        price: "0.918",
        sell: "0.91",
        id: 5,
      },
    ];
  },
  data() {
    return {
      moneyList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.tip {
  height: 56px;
  line-height: 56px;
  background: #f4f5f9;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-size: 16px;
    color: #333;
  }
}
.label {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #86899b;
  padding: 0 30px;
  margin-top: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: #f1f1f1 solid 1px;
  padding-bottom: 25px;
  .first {
    width: 200px;
    span {
      margin-left: 14px;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      line-height: 29px;
    }
    span:nth-child(3) {
      margin-left: 0px;
      color: #888;
    }
  }
}
.money-list {
  display: flex;
  flex-direction: column;
  .first {
    width: 178px;
  }
  .label:last-child {
    border-bottom: none;
  }
  i {
    font-size: 31px;
  }
}
</style>