<template>
  <div>
    <div class="box contact-us">
      <div class="contact">
        <h3>联系我们</h3>
        <span>Tel : 400-000-0000</span>
        <span>E-mail : *****@entu.io</span>
        <span>香港九龍深水埗長沙灣道226-242號深之都商場二樓92號舖</span>
      </div>
      <div class="map" :style="backgroundDiv"></div>
    </div>
    <div class="box introduce-us">
      <div>
        <h3>公司简介</h3>
        <h4>brief introduction</h4>
      </div>
      <div>
        <p>
          链点科技有限公司拥有多年的外币找换经验，兑换稳定、高效是您的外币找换的第一选择。我们拥有多年的金融行业从事经验，拥有丰富的金融团队，可为您提供优质的专业服务。
        </p>
        <br /><br />
        <p>
          本公司目前拥有超过四十多个国家的不同面额的外币，同时找换价格拥有非常多的优惠。相较于其他公司，本公司提供24小时银行汇款、兑换等业务，汇率点差较同行优惠，可做到实时兑换、方便快捷、安全可靠。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('@/assets/map.png') + ')',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-flow: row;
  height: 620px;
  padding: 0px 280px;
}
.contact-us {
  background-color: #fff;
  .contact {
    display: flex;
    flex-direction: column;
    h3 {
      margin-top: 159px;
      font-size: 40px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #333333;
    }
    span {
      color: #333333;
      font-size: 26px;
    }
    span:nth-child(2) {
      margin-top: 80px;
    }
    span:nth-child(3) {
      margin-top: 29px;
    }
    span:nth-child(4) {
      margin-top: 59px;
      line-height: 40px;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 500;
    }
  }
  .map {
    width: 800px;
    height: 560px;
    background-repeat: no-repeat;
    margin-top: 60px;
    margin-left: 100px;
  }
}
.introduce-us {
  background-color: #f9f9f9;
  height: 310px;
  padding: 60px 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div:first-child {
    h3 {
      font-size: 40px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #333333;
      margin-bottom: 30px;
    }
    h4 {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      font-style: italic;
      color: #333333;
      line-height: 40px;
    }
  }
  div:nth-child(2) {
    width: 600px;
    p {
      line-height: 44px;
    }
  }
}
</style>
