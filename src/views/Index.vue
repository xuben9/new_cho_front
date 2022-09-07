<template>
  <img alt="hello" src="../assets/icon_left_corner.png" />
  <div class="index">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-link to="/mtc">
      <!-- <img alt="matrix to coordinates" src="../assets/index_matrix.png" /> -->
      <div class="mtc">Matrix to Coordinates</div>
    </router-link>
    <div style="width:5% "></div>
    <router-link to="/ctm">
      <!-- <img alt="coordinates to matrix" src="../assets/index-matrix-a.png" /> -->
      <div class="mtc">Coordinates to Matrix</div>
    </router-link>
    <div style="width:5% "></div>
    <router-link to="/tsp">
      <!-- <img alt="coordinates to matrix" src="../assets/index-matrix-a.png" /> -->
      <div class="mtc">TSP Solutions References</div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "Index",
  components: {
  },
};
</script>

<style scoped>
#arrow {
  font-size: 20px;
  height: 50px;
  width: 50px;
}
img {
  height: 30vh;
}
.index {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 5vh 0;
}
.index a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  width: 20%;
}
.mtc {
  box-sizing: border-box;
  font-size: 2.0rem;
  border: solid;
  border-radius: 20px;
}
</style>
