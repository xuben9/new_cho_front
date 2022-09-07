<template>
  <el-container class="whole_page">
    <!-- <el-header>Welcome to CHO's project</el-header> -->
    <el-container>
      <el-aside>
        <img alt="hello" src="../assets/icon_left_corner.png" />
        <div class="title" v-if="plainCoor">Plain Coordinates to Matrix</div>
        <div class="title" v-if="mapCoor">Map Coordinates to Matrix</div>
        <div id="upload" v-if="plainCoor">
          <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8086/cho/cc"
            multiple
            :on-success="handleResp"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop plain coordinates file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                Only .xls/.xlsx/.csv/.txt files are supported, and no more than
                500kb
              </div>
            </template>
          </el-upload>
        </div>
        <div id="upload" v-if="mapCoor">
          <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8086/cho/ee"
            multiple
            :on-success="handleResp"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop map coordinates file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                Only .xls/.xlsx/.csv/.txt files are supported, and no more than
                500kb
              </div>
            </template>
          </el-upload>
        </div>
        <div class="buttonGroup">
          <el-button
            id="switchCoorKind"
            @click="switchCoorKind"
            type="primary"
            v-if="mapCoor"
            plain
            >Switch to Plain Coordinates Transform</el-button
          >
          <el-button
            id="switchCoorKind"
            @click="switchCoorKind"
            type="primary"
            v-if="plainCoor"
            plain
            >Switch to Map Coordinates Transform</el-button
          >
          <el-button
            id="downloadbutton"
            @click="downloadfile"
            type="primary"
            plain
            v-if="isShow"
            >Click to Download Matrix Files</el-button
          >
        </div>
      </el-aside>
      <el-container>
        <el-main id="mianpage">
          <table class="matrix" v-if="isShow">
            <tr class="tableRow" v-for="item in matrix" :key="item.key">
              <td v-for="value in item" :key="value">{{ value }}</td>
            </tr>
          </table>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "MTN",
  components: {},
  data() {
    return {
      matrix: {},
      coordinates: {},
      filename: {},
      isShow: false,
      mainHeight: {},
      mainWidth: {},
      plainCoor: true,
      mapCoor: false,
    };
  },
  methods: {
    handleResp(response) {
      console.log(response);
      this.$message({
        message: "Upload coordinates file successfully!!!",
        type: "success",
      });
      this.matrix = response.matrix;
      this.coordinates = response.coordinates;
      this.filename = response.filename;
      this.showdownloadbutton();
    },
    downloadfile() {
      window.location.href =
        "http://localhost:8086/cho/downloadfile/" + this.filename;
    },
    getWidthAndHeight() {
      var ele = document.getElementById("mianpage");
      this.mainHeight = ele.getBoundingClientRect().height;
      this.mainWidth = ele.getBoundingClientRect().width;
      console.log(this.mainHeight);
      console.log(this.mainWidth);
      // document.getElementById("graph").style.height = tmph;
      // document.getElementById("graph").style.width = tmpw;
    },
    showdownloadbutton() {
      this.isShow = true;
    },
    switchCoorKind() {
      this.plainCoor = !this.plainCoor;
      this.mapCoor = !this.mapCoor;
      this.isShow = false;
    },
  },
  mounted: function () {
    this.getWidthAndHeight();
  },
};
</script>

<style scoped>
.el-header {
  background-color: #7aadf0;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  width: var(--el-aside-width);
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
.whole_page {
  height: calc(90vh);
}
.title {
  padding: 20px 0px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
}
table {
  width: 100%;
}
img {
  height: calc(10vh);
}
.buttonGroup {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.el-button {
  margin-top: 1vh;
}
</style>
