<template>
  <el-container class="whole_page">
    <!-- <el-header>Welcome to CHO's project</el-header> -->
    <el-container>
      <el-aside>
        <img alt="hello" src="../assets/icon_left_corner.png" />
        <div class="title">Matrix To Coordinates</div>
        <div id="upload">
          <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8086/cho/bb"
            multiple
            :on-success="handleResp"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop matrix file here or <em>click to upload</em>
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
            id="downloadbutton"
            @click="downloadfile"
            type="primary"
            plain
            v-if="isShow"
            >Click to download coordinates Files</el-button
          >
          <el-button
            id="downloadRotate"
            @click="downloadRotate"
            type="primary"
            plain
            v-if="isRotate"
            >Click to download rotated coordinates Files</el-button
          >
        </div>
        <div id="rotation" v-if="isShow">
          <span>Counterclockwise rotation</span>
          <el-input-number
            id="input_angle"
            v-model="angle"
            :min="0"
            :max="360"
            @change="handleRotate"
          />
        </div>
      </el-aside>
      <el-container>
        <el-main id="mianpage">
          <!-- <div id="graph" style="width: 600px; height: 600px"></div> -->
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "MTN",
  components: {},
  data() {
    return {
      matrix: {},
      coordinates: {},
      filename: {},
      isShow: false,
      isRotate: false,
      angle: 0,
      coordinatesRotate: {},
    };
  },
  methods: {
    handleResp(response) {
      console.log(response);
      this.$message({
        message: "Upload matrix file successfully!!!",
        type: "success",
      });
      this.matrix = response.matrix;
      this.coordinates = response.coordinates;
      this.filename = response.filename;

      var chartDom = document.getElementById("mianpage");
      var myChart = echarts.init(chartDom);
      myChart.setOption({
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: this.coordinates,
            type: "line",
          },
        ],
      });
      this.showdownloadbutton();
    },
    downloadfile() {
      window.location.href =
        "http://localhost:8086/cho/downloadfile/" + this.filename;
    },
    handleRotate() {
      var params = {
        coordinates: this.coordinates,
        rotateDegree: this.angle,
      };
      this.isRotate = true;
      console.log(this.angle);
      console.log(this.coordinates);
      this.$axios
        .post("/dd", params)
        .then((response) => {
          console.log(response);
          this.coordinatesRotate = response.data.coordinates;
          var chartDom = document.getElementById("mianpage");
          var myChart = echarts.init(chartDom);
          myChart.setOption({
            xAxis: {},
            yAxis: {},
            series: [
              {
                symbolSize: 20,
                data: this.coordinatesRotate,
                type: "line",
              },
            ],
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    downloadRotate() {
      var params = {
        coordinates: this.coordinatesRotate,
      };
      this.$axios
        .post("/ff", params)
        .then((response) => {
          console.log(response);
          window.location.href =
            "http://localhost:8086/cho/downloadfile/" +
            response.data.filenameRotate;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // getWidthAndHeight() {
    //   var ele = document.getElementById("mianpage");
    //   var tmph = ele.getBoundingClientRect().height;
    //   var tmpw = ele.getBoundingClientRect().width;
    //   console.log(tmph);
    //   console.log(tmpw);
    //   // document.getElementById("graph").style.height = tmph;
    //   // document.getElementById("graph").style.width = tmpw;
    // },
    showdownloadbutton() {
      this.isShow = true;
    },
  },
  mounted: function () {
    // this.getWidthAndHeight()
  },
};
</script>

<style scoped>
.el-header {
  background-color: #409eff;
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
  line-height: 160px;
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
#upload {
  padding-bottom: 20px;
}
#rotation {
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
}
#input_angle {
  width: 6.8rem;
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
