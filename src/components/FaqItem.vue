<template>
  <div>
    <div v-if="!isShow" class="tab">
      <i class="el-icon-circle-plus-outline" @click="handleShow"></i>
      <span>{{ faq.short }}</span>
    </div>
    <div v-if="isShow" class="tab-show">
      <div>
        <i class="el-icon-remove" @click="handleShow"></i>
        <span>{{ faq.short }}</span>
      </div>
      <p>{{ faq.long }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: Object,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleShow() {
      this.isShow = !this.isShow;
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
.tab {
  background-color: #f4f6f9;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0 30px;
  margin: 20px 10px;
  height: 90px;
  width: 600px;
  @include media(">=medium", "<large") {
    padding: 0 20px;
    margin: 13px 28px 13px 0;
    height: 60px;
    width: 400px;
  }
  @include media(">=small", "<medium") {
    padding: 0 10px;
    margin: 13px 28px 13px 0;
    height: 60px;
    width: 350px;
  }
}
.tab-show {
  background: #ffffff;
  box-shadow: 0px 0px 250px 0px rgba(69, 81, 100, 0.1);
  border-radius: 10px;
  width: 600px;
  height: 361px;
  padding: 30px;
  margin: 20px 10px;
  @include media(">=medium", "<large") {
    width: 400px;
    height: 221px;
    padding: 20px;
    margin: 20px 10px;
  }
  @include media(">=small", "<medium") {
    width: 400px;
    height: 100px;
    padding: 10px;
    margin: 20px 10px;
  }
  div {
    span {
      font-family: Source Han Sans CN;
      color: #333333;
      font-size: 22px;
      line-height: 35px;
      padding-right: 30px;
      @include media(">=medium", "<large") {
        font-size: 17px;
        line-height: 22px;
        padding-right: 20px;
      }
      @include media(">=small", "<medium") {
        font-size: 14px;
        line-height: 14px;
        padding-right: 10px;
      }
    }
  }
  p {
    font-family: Source Han Sans CN;
    color: #333333;
    font-size: 18px;
    width: 512px;
    line-height: 40px;
    margin-top: 50px;
    margin-left: 35px;
    @include media(">=medium", "<large") {
      font-size: 16px;
      width: 312px;
      line-height: 30px;
      margin-top: 15px;
      margin-left: 25px;
    }
    @include media(">=small", "<medium") {
      font-size: 14px;
      width: 312px;
      line-height: 20px;
      margin-top: 10px;
      margin-left: 15px;
    }
  }
}
.el-icon-circle-plus-outline {
  color: #3269f2;
  margin-right: 15px;
  font-size: 30px;
  @include media(">=medium", "<large") {
    margin-right: 10px;
    font-size: 20px;
  }
  @include media(">=small", "<medium") {
    margin-right: 5px;
    font-size: 15px;
  }
}
.el-icon-remove {
  margin-right: 15px;
  font-size: 30px;
  color: #3269f2;
  @include media(">=medium", "<large") {
    margin-right: 10px;
    font-size: 20px;
  }
  @include media(">=small", "<medium") {
    margin-right: 5px;
    font-size: 15px;
  }
}
</style>