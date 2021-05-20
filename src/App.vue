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
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      language: "中文",
      backgroundDiv: {
         backgroundImage: 'url(' + require('./assets/BG.png') + ')'
      }
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
  text-align: center;
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
  float: right;
}
div .banner {
  background: no-repeat center top;
  /* background-color: red; */
  height: 1080px;
  width: 100%;
  display: block;
  flex-direction: column;
  position: absolute;
}
.banner h1 {
  margin-top: 100px;
}
</style>
