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
        backgroundImage: "url(" + require("@/assets/map.png") + ")",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
$breakpoints: (
  small: 500px,
  medium: 900px,
  large: 1400px,
);
.box {
  display: flex;
  flex-flow: row;
  align-items: center;
  @include media(">=medium", "<large") {
    flex-flow: column;
    align-content: center;
  }
  @include media(">=small", "<medium") {
    flex-flow: column;
  }
}
.contact-us {
  background-color: #fff;
  justify-content: center;
  .contact {
    display: flex;
    flex-direction: column;
    h3 {
      color: #333333;
      font-family: Source Han Sans CN;
      margin-top: 159px;
      font-size: 40px;
      @include media(">=medium", "<large") {
        margin-top: 100px;
        font-size: 28px;
      }
      @include media(">=small", "<medium") {
        margin-top: 59px;
        font-size: 18px;
      }
    }
    span {
      color: #333333;
      font-size: 26px;
      @include media(">=medium", "<large") {
        font-size: 20px;
      }
      @include media(">=small", "<medium") {
        font-size: 18px;
      }
    }
    span:nth-child(2) {
      margin-top: 80px;
      @include media(">=medium", "<large") {
        margin-top: 50px;
      }
      @include media(">=small", "<medium") {
        margin-top: 30px;
      }
    }
    span:nth-child(3) {
      margin-top: 29px;
      @include media(">=medium", "<large") {
        margin-top: 20px;
      }
      @include media(">=small", "<medium") {
        margin-top: 10px;
      }
    }
    span:nth-child(4) {
      font-family: Source Han Sans CN;
      margin-top: 59px;
      line-height: 40px;
      font-size: 20px;
      @include media(">=medium", "<large") {
        margin-top: 30px;
        line-height: 40px;
        font-size: 20px;
      }
      @include media(">=small", "<medium") {
        margin-top: 59px;
        line-height: 40px;
        font-size: 20px;
      }
    }
  }
  .map {
    width: 800px;
    height: 560px;
    margin-top: 60px;
    margin-left: 100px;
    background-repeat: no-repeat;
    @include media(">=medium", "<large") {
      width: 600px;
      height: 480px;
      margin-top: 45px;
      margin-left: 50px;
    }
    @include media(">=small", "<medium") {
      width: 400px;
      height: 360px;
      margin-top: 30px;
      margin-left: 10px;
    }
  }
}
.introduce-us {
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px 280px;
  @include media(">=medium", "<large") {
    padding: 40px 100px;
  }
  @include media(">=small", "<medium") {
    padding: 40px 100px;
    flex-direction: column;
  }
  div:first-child {
    h3 {
      font-family: Source Han Sans CN;
      color: #333333;
      font-size: 40px;
      margin-bottom: 30px;
      @include media(">=medium", "<large") {
        font-size: 40px;
        margin-bottom: 30px;
      }
      @include media(">=small", "<medium") {
        font-size: 40px;
        margin-bottom: 30px;
      }
    }
    h4 {
      font-family: Source Han Sans CN;
      font-size: 30px;
      font-weight: 500;
      font-style: italic;
      color: #333333;
      line-height: 40px;
    }
  }
  div:nth-child(2) {
    width: 700px;
    p {
      line-height: 44px;
      font-size: 22px;
    }
    @include media(">=small", "<medium") {
      width: 400px;
      p {
        line-height: 30px;
        font-size: 16px;
      }
    }
  }
}
</style>
