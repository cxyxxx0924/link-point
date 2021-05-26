<template>
  <div class="calculator-box">
    <p>汇率计算器</p>
    <div class="card">
      <div>
        <span>支付</span>
        <div>
          <span>CNY</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
      <div>
        <span>| 输入要兑换的金额</span>
      </div>
    </div>
    <i class="el-icon-sort"></i>
    <div class="card">
      <div>
        <span>获得</span>
        <div>
          <span>{{selected.unit}}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
      <div>
        <span class="money">6000</span>
      </div>
    </div>
    <span class="change">1{{selected.unit}}=0.862CNY (此汇率仅供参考)</span>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('this.selected', this.selected);
  },
  props: {
    selected: {},
  },
  computed: {
    name() {
      return this.data 
    }
  },
};
</script>

<style lang="scss" scoped>
$breakpoints: (
  small: 500px,
  medium: 900px,
  large: 1400px,
);
.calculator-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    color: #666;
    font-family: Source Han Sans CN;
    font-weight: bolder;
    font-size: 26px;
    margin: 50px 40px;
    @include media(">=medium", "<large") {
      font-size: 20px;
      margin: 40px 30px;
    }
    @include media(">=small", "<medium") {
      font-size: 14px;
      margin: 25px 15px;
    }
  }
  .card {
    width: 460px;
    height: 150px;
    @include media(">=medium", "<large") {
      width: 300px;
      height: 100px;
    }
    @include media(">=small", "<medium") {
      width: 150px;
      height: 50px;
    }
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    div {
      &:first-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          &:first-child {
            display: block;
            flex-grow: 1;
          }
        }
        + div {
          flex-direction: row-reverse;
        }
      }
      &:nth-child(2) {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: flex-end;
        margin-right: 30px;
        @include media(">=medium", "<large") {
          margin-right: 20px;
        }
        @include media(">=small", "<medium") {
          margin-right: 10px;
        }
      }
    }
  }
  i {
    font-weight: bolder;
    color: #cfcfcf;
    font-size: 30px;
    margin: 26px auto;
    @include media(">=medium", "<large") {
      font-size: 20px;
      margin: 20px auto;
    }
    @include media(">=small", "<medium") {
      font-size: 14px;
      margin: 10px auto;
    }
  }
  span {
    font-family: Source Han Sans CN;
    color: #666666;
    font-size: 22px;
    margin-left: 51px;
    @include media(">=medium", "<large") {
      font-size: 18px;
      margin-left: 31px;
    }
    @include media(">=small", "<medium") {
      font-size: 14px;
      margin-left: 11px;
    }
  }
  .money {
    color: #3068f4;
    font-weight: bold;
    font-size: 44px;
    @include media(">=medium", "<large") {
      font-size: 24px;
    }
    @include media(">=small", "<medium") {
      font-size: 14px;
      margin-left: 11px;
    }
  }
  .change {
    margin-top: 25px;
    align-self: flex-end;
    margin-right: 20px;
    @include media(">=medium", "<large") {
      margin-top: 18px;
    }
    @include media(">=small", "<medium") {
      margin-top: 10px;
    }
  }
}
</style>