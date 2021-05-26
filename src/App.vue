<template>
  <div id="app">
    <!-- header -->
    <div class="header">
      <span class="xchange">Xchange</span>
      <el-menu
        :default-active="selected"
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
      <exchange-money />
    </div>
    <div v-else-if="selected === '3'">
      <faq/>
    </div>
    <div v-else-if="selected === '4'">
      <about-us></about-us>
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
import MainIndex from "./page/MainIndex.vue";
import ExchangeMoney from "./page/ExchangeMoney.vue";
import AboutUs from "./page/AboutUs.vue";
import Faq from "./page/Faq.vue";
export default {
  components: {
    MainIndex,
    ExchangeMoney,
    AboutUs,
    Faq,
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
      console.log("key", key);
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
$breakpoints: (
  small: 500px,
  medium: 900px,
  large: 1400px,
);
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 220px;
  @include media(">=medium", "<large") {
    padding: 0 70px;
  }
  @include media(">=small", "<medium") {
    padding: 0;
  }
  /* border-bottom: #3356A5 solid 14px;  */
  box-shadow: 9px 11px 46px 0px rgba(51, 86, 165, 0.05);
}
.el-menu-item {
  @include media(">=small", "<medium") {
    padding: 0 5px;
  }
}

.xchange {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 36px;
  color: #3048f4;
  @include media(">=large") {
    margin-right: 102px;
  }
  @include media(">=medium", "<large") {
    margin-right: 50px;
  }
  @include media(">=small", "<medium") {
    margin-right: 0px;
    font-size: 16px;
  }
  @include media("<small") {
    display: none;
  }
}
.header .el-menu {
  border-bottom: none !important;
}
.header .el-menu li {
  @include media(">=large") {
    margin-right: 30px;
  }
  @include media(">=small", "<medium") {
    margin-right: 10px;
  }
}

.header .language {
  flex: auto;
  display: flex;
  flex-direction: row-reverse;
}

.footer1 {
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: solid 1px #eeeeee;
  padding: 80px 130px;
  @include media(">=large") {
    padding: 80px 130px;
  }
  @include media(">=medium", "<large") {
    padding: 40px;
  }
  @include media("<medium") {
    padding: 10px;
  }
  h3 {
    font-size: 46px;
    font-family: Bebas Neue;
    font-weight: 400;
    color: #333333;
    @include media(">=small", "<medium") {
      font-size: 16px;
    }
  }
  .contact {
    display: flex;
    flex-direction: row;
    span {
      font-family: Source Han Sans CN;
      color: #333333;
      display: block;
      border-right: 2px dotted #888;
      font-size: 18px;
      width: 360px;
      line-height: 36px;
      @include media(">=medium", "<large") {
        width: 300px;
      }
      @include media(">=small", "<medium") {
        width: 150px;
        font-size: 12px;
      }
    }
    p {
      font-size: 18px;
      font-weight: 400;
      color: #333333;
      line-height: 36px;
      display: block;
      margin-left: 60px;
      @include media(">=large") {
        margin-left: 60px;
      }
      @include media(">=medium", "<large") {
        margin-left: 30px;
      }
      @include media(">=small", "<medium") {
        margin-left: 0px;
        font-size: 12px;
      }
    }
  }
  .ext {
    align-self: flex-end;
    flex: auto;
    display: flex;
    flex-direction: row-reverse;
    a {
      color: #333;
      font-size: 20px;
      font-weight: 500;
      text-decoration-line: none;
      @include media(">=large") {
        margin-right: 45px;
      }
      @include media(">=medium", "<large") {
        margin-right: 10px;
        font-size: 16px;
      }
      @include media(">=small", "<medium") {
        font-size: 12px;
      }
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
  @include media(">=medium", "<large") {
    padding: 0px 80px;
  }
  @include media(">=small", "<medium") {
    padding: 0px 5px;
  }
  p {
    font-size: 16px;
    color: #999;
    flex-grow: 1;
    align-self: center;
    @include media(">=small", "<medium") {
      font-size: 12px;
    }
  }
  div {
    align-self: center;
    i {
      margin-right: 25px;
      font-size: 32px;
      color: #999;
      @include media(">=small", "<medium") {
        margin-right: 5px;
        font-size: 20px;
      }
    }
  }
}
</style>
