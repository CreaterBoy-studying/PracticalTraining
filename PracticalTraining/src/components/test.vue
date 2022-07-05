<template>
  <div>
    <div class="head">
     
    </div>
    <div id="main" class="chart" ref="evaluate" style="width:500px;height:300px"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    turn1() {
      this.$router.push("/show");
    },
      initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(this.$refs.evaluate)
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      })
    },
  },

  mounted() {
    this.initCharts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
