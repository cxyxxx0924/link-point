<template>
  <div class="faq-body">
    <div class="header1">
      <h1>有什么需要帮忙吗？</h1>
    </div>
    <div class="faqs">
      <div class="faqs-box">
        <h3>常见问题</h3>
        <div class="box">
          <div class="faqs">
            <div v-for="item in leftFaqs" :key="item.id">
              <faq-item :faq="item"></faq-item>
            </div>
          </div>
          <div class="faqs">
            <div v-for="item in rightFaqs" :key="item.id">
              <faq-item :faq="item"></faq-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FaqItem from "../components/FaqItem";
export default {
  mounted() {
    this.faqs.push({
      id: 0,
      short: "何时会更改汇率？1",
      long:
        "1线上交易：您可以通过我们的APP完成实名身份认证，通过APP预约 或完成交易更方便快捷。实体店交易：汇款交易金额为港币8千元以上或现金兑换港币12万元 以上，因法例要求，客人须出示有效身份证明作登记。",
    });
    this.faqs.push({
      id: 1,
      short: "何时会更改汇率？2",
      long:
        "2线上交易：您可以通过我们的APP完成实名身份认证，通过APP预约 或完成交易更方便快捷。\n实体店交易：汇款交易金额为港币8千元以上或现金兑换港币12万元 以上，因法例要求，客人须出示有效身份证明作登记。",
    });
    this.faqs.push({
      id: 2,
      short: "何时会更改汇率？3",
      long:
        "3线上交易：您可以通过我们的APP完成实名身份认证，通过APP预约 或完成交易更方便快捷。\n实体店交易：汇款交易金额为港币8千元以上或现金兑换港币12万元 以上，因法例要求，客人须出示有效身份证明作登记。",
    });
    this.faqs.push({
      id: 3,
      short: "何时会更改汇率？4",
      long:
        "4线上交易：您可以通过我们的APP完成实名身份认证，通过APP预约 或完成交易更方便快捷。\n实体店交易：汇款交易金额为港币8千元以上或现金兑换港币12万元 以上，因法例要求，客人须出示有效身份证明作登记。",
    });
    this.faqs.push({
      id: 4,
      short: "何时会更改汇率？5",
      long:
        "5线上交易：您可以通过我们的APP完成实名身份认证，通过APP预约 或完成交易更方便快捷。\n实体店交易：汇款交易金额为港币8千元以上或现金兑换港币12万元 以上，因法例要求，客人须出示有效身份证明作登记。",
    });
    this.faqs.push({
      id: 5,
      short: "何时会更改汇率？6",
      long:
        "6线上交易：您可以通过我们的APP完成实名身份认证，通过APP预约 或完成交易更方便快捷。\n实体店交易：汇款交易金额为港币8千元以上或现金兑换港币12万元 以上，因法例要求，客人须出示有效身份证明作登记。",
    });
    this.faqs.push({
      id: 6,
      short: "何时会更改汇率？7",
      long:
        "7线上交易：您可以通过我们的APP完成实名身份认证，通过APP预约 或完成交易更方便快捷。\n实体店交易：汇款交易金额为港币8千元以上或现金兑换港币12万元 以上，因法例要求，客人须出示有效身份证明作登记。",
    });
  },
  computed: {
    leftFaqs() {
      return this.faqs.filter((item) => item.id % 2 === 0);
    },
    rightFaqs() {
      return this.faqs.filter((item, index) => index % 2 === 1);
    },
  },
  components: {
    FaqItem,
  },
  data() {
    return {
      faqs: [],
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
.header1 {
  text-align: center;
  padding: 180px 0px;
  @include media(">=medium", "<large") {
    padding: 120px 0px;
  }
  @include media(">=small", "<medium") {
    padding: 60px 0px;
  }
  h1 {
    font-family: Source Han Sans CN;
    color: #10040c;
    font-size: 46px;
    line-height: 60px;
    @include media(">=medium", "<large") {
      font-size: 32px;
      line-height: 40px;
    }
    @include media(">=small", "<medium") {
      font-size: 22px;
      line-height: 20px;
    }
  }
}
.faq-body {
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 330px;
  @include media(">=medium", "<large") {
    margin-top: 25px;
    margin-bottom: 220px;
  }
  @include media(">=small", "<medium") {
    margin-top: 15px;
    margin-bottom: 110px;
  }
}
.faqs {
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  .faqs-items {
    display: flex;
    flex-direction: column;
  }
}
.faqs-box {
  display: flex;
  flex-direction: column;
  h3 {
    font-family: Source Han Sans CN;
    color: #10040c;
    align-self: flex-start;
    font-size: 40px;
    line-height: 60px;
    margin-left: 30px;
    @include media(">=medium", "<large") {
      font-size: 30px;
      line-height: 40px;
    }
    @include media(">=small", "<medium") {
      font-size: 20px;
      line-height: 20px;
    }
  }
  .box {
    display: flex;
    flex-direction: row;
    @include media(">=small", "<medium") {
      flex-direction: column;
    }
  }
  // @include media(">=small", "<medium") {
  //   flex-direction: column;
  // }
}
</style>
