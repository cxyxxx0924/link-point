<template>
  <div id="app">
    <!-- header -->
    <div class="header">
      <span class="xchange">Xchange</span>
      <el-menu default-active="1" mode="horizontal" active-text-color="#3068F4">
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
    <!-- banner -->
    <div class="banner" :style="backgroundDiv">
      <h1>寻找并预定覆盖全港的找换店</h1>
      <div class="money-change">
        <calculator-box class="box-card"> </calculator-box>
        <div class="money-list">123</div>
      </div>
    </div>
  </div>
</template>

<script>
import CalculatorBox from "./components/CalculatorBox.vue";
export default {
  components: { CalculatorBox },
  name: "App",
  data() {
    return {
      language: "中文",
      backgroundDiv: {
        backgroundImage: "url(" + require("./assets/BG.png") + ")",
      },
    };
  },

  methods: {
    handleLanguageCommand(value) {
      console.log(value);
    },
  },
};
</script>

<style>
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
div .banner {
  background: no-repeat center top;
  height: 1080px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
}
.banner h1 {
  margin-top: 190px;
  font-size: 70px;
  text-align: center;
}
.banner .money-change {
  display: flex;
  flex-direction: row;
}
.banner .box-card {
  width: 560px;
  height: 585px;
  background: #ffffff;
  box-shadow: 16px 8px 79px 0px rgba(84, 94, 119, 0.2);
  border-radius: 12px;
  align-self: center;
  margin: 0 auto;
  position: relative;
}
.banner .money-list {
  width: 220px;
  height: 412px;
  background: red;
  box-shadow: 8px 9px 24px 0px rgba(165, 148, 191, 0.25);
  border-radius: 6px;
  position: absolute;
}
</style>
