<template>
  <div id="nav">
    <router-link class="nav-bar-title" to="/"
      >Matrix Coordinate Transformation</router-link
    >
    <div class="flex-grow"></div>
    <div class="nav-right">
      <img id="icon_help" alt="help" src="@/assets/icon_help.png" />
      <el-button type="text" @click="dialogVisible = true">Guide</el-button>
    </div>
  </div>
  <router-view />

  <el-dialog title="提示" v-model="dialogVisible" width="50%">
    <span>这是一段信息</span>
    <Guide />
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import Guide from "@/components/Guide.vue";

export default {
  components: {
    Guide,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {},
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-bar-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
}

.flex-grow {
  flex-grow: 1;
}

.nav-right {
  display: flex;
  align-items: center;
}
#nav {
  box-sizing: border-box;
  border-bottom: solid;
  border-bottom-width: thin;
  border-bottom-style: groove;
  padding: 10px;
  display: flex;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
}
#icon_help {
  height: 1.2rem;
}
</style>
