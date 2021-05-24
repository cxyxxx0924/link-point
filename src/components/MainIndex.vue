<template>
  <div>
    <div class="banner" :style="backgroundDiv">
      <h1>寻找并预定覆盖全港的找换店</h1>
      <div class="money-change">
        <calculator-box class="box-card"> </calculator-box>
        <money-list class="money-list" :moneys="moneys"></money-list>
      </div>
    </div>
    <div class="content1">
      <h1>为何选择pointlink</h1>
      <div class="banner2">
        <div class="card">
          <img :src="bannerIcon[0]" />
          <h3>实时汇率</h3>
          <p>比较全亚洲外汇兑换店提供的 优惠汇率，免去问价麻烦</p>
        </div>
        <div class="card">
          <img :src="bannerIcon[1]" />
          <h3>锁定汇率</h3>
          <p>实时兑换汇率锁定，预约 实体店兑换</p>
        </div>
        <div class="card">
          <img :src="bannerIcon[2]" />
          <h3>实时汇率</h3>
          <p>随时随地通过APP线上一键兑换 APP线上预约，线下实体店兑换</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalculatorBox from "./CalculatorBox.vue";
import MoneyList from "./MoneyList.vue";
export default {
  components: { CalculatorBox, MoneyList },
  mounted() {
    this.moneys = [
      { valueStr: "HKD / 港币", index: 0 },
      { valueStr: "CNY / 人民币", index: 1 },
      { valueStr: "BTC / 比特币", index: 2 },
      { valueStr: "AUD / 澳元", index: 3 },
      { valueStr: "CAD / 加拿大元", index: 4 },
      { valueStr: "EUR / 欧元", index: 5 },
      { valueStr: "GBP / 英镑", index: 6 },
    ];
  },
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("@/assets/BG.png") + ")",
      },
      moneys: [],
      bannerIcon: [
        require("@/assets/banner1.png"),
        require("@/assets/banner2.png"),
        require("@/assets/banner3.png"),
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background: no-repeat center top;
  height: 1080px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.banner h1 {
  margin-top: 190px;
  font-size: 70px;
  text-align: center;
}
.banner .money-change {
  display: flex;
  flex-direction: row;
  overflow: auto;
  margin: auto;
  top: 0px;
  left: 220px;
  bottom: 0;
  right: 0;
}
.banner .box-card {
  width: 560px;
  height: 585px;
  background: #ffffff;
  box-shadow: 16px 8px 79px 0px rgba(84, 94, 119, 0.2);
  border-radius: 12px;
}
.banner .money-list {
  width: 220px;
  height: 412px;
  background: #fff;
  box-shadow: 8px 9px 24px 0px rgba(165, 148, 191, 0.25);
  border-radius: 6px;
  margin-left: 40px;
  align-self: flex-end;
}
.content1 {
  position: relative;
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 180px;
  h1 {
    text-align: center;
    font-size: 46px;
    font-weight: bold;
    color: #000000;
  }
  .banner2 {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 130px;
    justify-content: space-around;
    .card {
      width: 380px;
      height: 440px;
      background: #fff;
      justify-content: space-around;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      box-shadow: 10px 52px 65px 0px rgba(124, 140, 175, 0.1);
      h3 {
        font-size: 32px;
      }
      img {
        object-fit: none;
      }
      p {
        width: 300px;
        font-size: 22px;
        font-weight: 400;
        line-height: 40px;
        color: #333333;
      }
    }
  }
}
</style>