<template>
  <div id="app">
    <!-- header -->
    <div class="header">
      <span class="xchange">Xchange</span>
      <el-menu
        default-active="1"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#3068F4"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">实时汇率</el-menu-item>
        <el-menu-item index="3">常见问题</el-menu-item>
        <el-menu-item index="4">关于我们</el-menu-item>
        <el-menu-item index="5">汇率计算器</el-menu-item>
      </el-menu>
      <div class="language">
        <el-dropdown @command="handleLanguageCommand">
          <span class="el-dropdown-link">
            {{ language }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- header end -->
    <div v-if="selected === '1'">
      <main-index />
    </div>
    <div v-else-if="selected === '2'">
      <exchange-money style="padding: 0 280px; margin-top: 40px; margin-bottom: 330px;" />
    </div>
    <!-- banner -->

    <div class="footer1">
      <h3>contact</h3>
      <div class="contact">
        <span>香港九龍深水埗長沙灣道226-242號 <br />深之都商場二樓92號舖</span>
        <p>Tel : 400-000-0000 <br />E-mail : *****@entu.io</p>
        <div class="ext">
          <a href="">网站首页</a>
          <a href="">帮助中心</a>
          <a href="">帮助中心</a>
          <a href="">帮助中心</a>
        </div>
      </div>
    </div>
    <div class="footer2">
      <p>Copyright © 2019 POINT LINK TECHNOLOGY, All Rights Reserved</p>
      <div>
        <i class="el-icon-platform-eleme"></i
        ><i class="el-icon-platform-eleme"></i
        ><i class="el-icon-platform-eleme"></i>
      </div>
    </div>
  </div>
</template>

<script>
import MainIndex from "./components/MainIndex.vue";
import ExchangeMoney from "./components/ExchangeMoney.vue"
export default {
  components: {
    MainIndex,
    ExchangeMoney
  },
  name: "App",
  data() {
    return {
      selected: "1",
      language: "中文",
    };
  },
  methods: {
    handleLanguageCommand(value) {
      console.log(value);
    },
    handleSelect(key) {
      console.log('key', key);
      this.selected = key;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
div .header {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  /* border-bottom: #3356A5 solid 14px;  */
  box-shadow: 9px 11px 46px 0px rgba(51, 86, 165, 0.05);
}
.xchange {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 36px;
  color: #3048f4;
  margin-left: 277px;
  margin-right: 102px;
}
.header .el-menu {
  border-bottom: none !important;
}
.header .el-menu li {
  margin-right: 30px;
}

.header .language {
  flex: auto;
  display: flex;
  flex-direction: row-reverse;
  margin-right: 280px;
}

.footer1 {
  height: 360px;
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px 280px;
  border-top: solid 1px #EEEEEE;
  h3 {
    font-size: 46px;
    font-family: Bebas Neue;
    font-weight: 400;
    color: #333333;
  }
  .contact {
    display: flex;
    flex-direction: row;
    span {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      line-height: 36px;
      display: block;
      width: 360px;
      border-right: 2px dotted #888;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      color: #333333;
      line-height: 36px;
      margin: 0 0 0 60px;
      display: block;
    }
  }
  .ext {
    align-self: flex-end;
    flex: auto;
    display: flex;
    flex-direction: row-reverse;
    a {
      margin-right: 45px;
      color: #333;
      font-size: 20px;
      font-weight: 500;
      text-decoration-line: none;
    }
  }
}
.footer2 {
  background: #f9f9f9;
  height: 102px;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0px 280px;
  p {
    font-size: 16px;
    color: #999;
    font-weight: 400;
    flex-grow: 1;
    align-self: center;
  }
  div {
    align-self: center;
    i {
      margin-right: 25px;
      font-size: 32px;
      color: #999;
    }
  }
}
</style>
