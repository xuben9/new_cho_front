<template>
  <div class="guide">
    <h2>This website provides three functions:</h2>
    <h2>1. Transfer distance matrix to coordinates</h2>
    <h3>1.1 Upload files</h3>
    <h4>
      Click “matrix to coordinates” - click to upload files/drag files
      (.xls/.xlsx/.txt/.csv) – get results
    </h4>
    <h3>1.2 Download</h3>

    <h4>
      If you want to download the results, click “click to download coordinates
      files”.
    </h4>

    <h3>1.3 Rotation</h3>

    <h4>
      Rotation: click “-” “+” to adjust degrees or enter the degree directly.
    </h4>

    <h4>“click to download coordinates files” to download the new matrix.</h4>

    <h2>2. Transfer coordinates to distance matrix</h2>

    <h3>
      2.1 If coordinates are in the format of plain coordinates (x-axis and
      y-axis):
    </h3>

    <h4>2.1.1 Upload files</h4>
    <h5>
      Click “coordinates to matrix” - click to upload files/drag files
      (.xls/.xlsx/.txt/.csv) – get results
    </h5>

    <h4>2.1.2 Download</h4>
    <h5>
      If you want to download the results, click “click to download matrix
      files”.
    </h5>

    <h3>
      2.2 If coordinates are in the format of map coordinates (longitude and
      latitude)
    </h3>

    <h4>2.2.1 Click “switch to map to coordinates transformation”</h4>
    <h4>2.2.2 Upload files</h4>
    <h5>
      Click “coordinates to matrix” - click to upload files/drag files
      (.xls/.xlsx/.txt/.csv) – get results
    </h5>
    <h4>2.2.3 Download</h4>
    <h5>
      If you want to download the results, click “click to download matrix
      files”.
    </h5>

    <h2>3. TSP solutions references</h2>
    <h3>Just click the links to explore!</h3>
    <hr />
    <h2>Contact me: chunyujcy98@163.com</h2>
  </div>
</template>

<script>
export default {
  name: "Guide",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h2 {
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
