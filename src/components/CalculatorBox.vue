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
          <span>HKD</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
      <div>
        <span class="money">6000</span>
      </div>
    </div>
    <span class="change">1hkd=0.862cny (此汇率仅供参考)</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.calculator-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 26px;
    margin: 50px 40px;
    color: #666;
    font-family: Source Han Sans CN;
    font-weight: bolder;
  }
  .card {
    width: 460px;
    height: 150px;
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
      }
    }
  }
  i {
    font-size: 30px;
    font-weight: bolder;
    color: #cfcfcf;
    margin: 26px auto;
  }
  span {
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #666666;
    margin-left: 51px;
  }
  .money {
    color: #3068F4;
    font-weight: bold;
    font-size: 44px;
  }
  .change {
    margin-top: 25px;
  }
}
</style>