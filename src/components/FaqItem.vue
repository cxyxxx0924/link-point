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
      this.isShow = !this.isShow
    }
  },
};
</script>

<style lang="scss" scoped>
.tab {
  background-color: #f4f6f9;
  height: 90px;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0 30px;
  margin: 20px 40px 20px 0;
}
.tab-show {
  width: 600px;
  height: 361px;
  background: #ffffff;
  box-shadow: 0px 0px 250px 0px rgba(69, 81, 100, 0.1);
  padding: 30px;
  margin: 20px 40px 20px 0;
  border-radius: 10px;
  div {
    span {
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #333333;
      line-height: 35px;
      padding-right: 30px;
    }
  }
  p {
    width: 512px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    line-height: 40px;
    margin-top: 50px;
    margin-left: 35px;
  }
}
.el-icon-circle-plus-outline {
  margin-right: 15px;
  font-size: 30px;
  color: #3269f2;
}
.el-icon-remove {
  margin-right: 15px;
  font-size: 30px;
  color: #3269f2;
}
</style>