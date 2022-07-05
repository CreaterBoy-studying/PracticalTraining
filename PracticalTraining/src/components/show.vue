<template>
  <div>
    <div class="context">
      <header>
        <h1>智能手环数据监测终端</h1>
      </header>
      <section>
        <div class="main">
          <div class="column">
            <div class="panel">
              <div class="panel-footer"></div>
              <h2>心率</h2>
              <div
                class="chart heart"
                id="a"
                _echarts_instance_="ec_1616299223023"
                ref="chart"
                style="width: 500px; height: 300px"
              ></div>
            </div>


            <div class="panel">
              <div class="panel-footer"></div>
              <h2>心率</h2>
              <!-- <div
                class="chart heart"
                id="a"
                _echarts_instance_="ec_1616299223023"
                ref="chart"
                style="width: 500px; height: 300px"
              ></div> -->
            </div>

          </div>
          <div class="column">
            <div class="num">
              <div class="num-hd">
                <ul>
                  <li>120</li>
                  <li>200</li>
                </ul>
              </div>
              <div class="num-bd">
                <ul>
                  <li>心率</li>
                  <li>血氧</li>
                </ul>
              </div>
            </div>
            <div class="gps">
              dsa 
            </div>
            <!-- 旋转地球的特效 -->
            <div class="map">
              <div class="map1"></div>
              <div class="map2"></div>
              <div class="map3"></div>
            </div>
          </div>
          <div class="column">
            <div class="panel">
              <div class="panel-footer"></div>
              <h2>血氧</h2>
              <!-- <div
                class="chart"
                id="a"
                _echarts_instance_="ec_1616299223023"
                ref="chart"
                style="width: 500px; height: 300px"
              ></div> -->
            </div>
            <div class="panel">
              <div class="panel-footer"></div>
              <h2>血氧</h2>
              <!-- <div
                class="chart"
                _echarts_instance_="ec_1616299223027"
                ref="shebei"
                style="width: 500px; height: 300px"
              ></div> -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    // setHeight:function(){
    //   document.getElementsByClassName("context").style.height=screen.height;
    // }
    
    get:function(){
      axios.get("/ip",{params:{key:"4c6fe220b88cab6fe29b836b23cf82c3",ip:"114.247.50.2"}})
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err)
      })
    },
        
        function1() {
      // 1实例化对象
      var myChart = this.$echarts.init(this.$refs.chart);
      var a;
      var b;
      var c;
      var X = [];
      // axios
      //   .get("http://coderxiaomo.top:10080/users/users/?status=1")
      //   .then((res) => {
      //     /*对于前端用户体验优化，如果拿不到数据会报错 */
      //     if (res.data.code == "200") {
      //       a = res.data.count;
      //     } else {
      //       alert("数据请求出现错误");
      //     }
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
      // axios
      //   .get("http://coderxiaomo.top:10080/users/users/?status=2")
      //   .then((res) => {
      //     /*对于前端用户体验优化，如果拿不到数据会报错 */
      //     if (res.data.code == "200") {
      //       b = res.data.count;
      //     } else {
      //       alert("数据请求出现错误");
      //     }
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
      // axios
      //   .get("http://coderxiaomo.top:10080/users/users/?status=3")
      //   .then((res) => {
      //     /*对于前端用户体验优化，如果拿不到数据会报错 */
      //     if (res.data.code == "200") {
      //       c = res.data.count;
      //       X.push(a);
      //       X.push(b);
      //       X.push(c);
      //       console.log(X);
      //     } else {
      //       alert("数据请求出现错误");
      //     }
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
      // 2. 指定配置项和数据
      var myColor = ["#1089E7", "#F57474", "#F8B448", "#8B78F6"];
      var option = {
        grid: {
          top: "10%",
          left: "22%",
          bottom: "10%",
          // containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            data: ["健康", "感染", "密切接触"],
            // 不显示y轴的线
            axisLine: {
              show: false,
            },
            // 不显示刻度
            axisTick: {
              show: false,
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
              color: "#fff",
            },
          },

          {
            data: [456, 403, 402],
            inverse: true,
            // 不显示y轴的线
            axisLine: {
              show: false,
            },
            // 不显示刻度
            axisTick: {
              show: false,
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
              color: "#fff",
            },
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            data: [456, 403, 402],
            yAxisIndex: 0,
            // 修改第一组柱子的圆角
            itemStyle: {
              barBorderRadius: 20,
              // 此时的color 可以修改柱子的颜色
              color: function (params) {
                // params 传进来的是柱子对象
                // console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              },
            },
            // 柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            // 显示柱子内的文字
            label: {
              show: true,
              position: "inside",
              // {c} 会自动的解析为 数据  data里面的数据
              formatter: "{c}",
            },
          },
          {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            data: [500, 500, 500],
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15,
            },
          },
        ],
      };
      console.log(X);
      // 3. 把配置项给实例对象
      myChart.setOption(option);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },

  mounted() {
    // this.setHeight();
    this.get();
    this.function1();
  },
};
</script>
<style scoped>
@font-face {
  font-family: "DS-DIGIT";
  src: url(../assets/DS-DIGIT.ttf);
}
* {
  box-sizing: border-box;
}
.context {
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../assets/bg.jpg);
  background-color: #010a37;
  width: 100%;
  height: 721px;
}

header {
  height: 100px;
  background: url(../assets/head_bg.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
h1 {
  padding-top: 20px;
  font-size: 30px;
  color: #fff;
  text-align: center;
}
.main {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0 0.125rem;
  display: flex;
  flex-direction: row;
}
.main .column {
  flex: 5;
}
.main .column:nth-child(3) {
  flex: 5;
}
/*心率的样式 */
h2{
  padding: 5px;
  font-size: 25px;
  font-family: "楷体";
  color: #fff;
  text-align: center;
}
/*数字样式 */
.main .num .num-hd ul {
  display: flex;
  flex-direction: row;
}
.main .num .num-hd ul li {
  flex: 1;
  list-style: none;
  text-align: center;
  height: 100px;
  font-size: 50px;
  color: #ffeb7b;
  position: relative;
  font-family: "DS-DIGIT";
}
.main .num .num-hd ul li:first-child::after {
  content: "";
  display: block;
  position: absolute;
  top: 25%;
  right: 0;
  width: 1px;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.3);
}
.main .num .num-hd ul::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 10px;
  border-top: 2px #02a6b5 solid;
  border-left: 2px #02a6b5 solid;
}
.list {
  font-family: "楷体";
  font-size: 20px;
  margin: 2px;
  color: #ffffff;
}
.main .num .num-hd ul::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 10px;
  border-bottom: 2px #02a6b5 solid;
  border-right: 2px #02a6b5 solid;
}
.main .num-bd ul {
  display: flex;
  flex-direction: row;
}
.main .num-bd ul li {
  flex: 1;
  list-style: none;
  text-align: center;
  height: 0.5rem;
  font-size: 30px;
  position: relative;
  color: #fff;
  line-height: 0px;
  padding-bottom: 50px;
}
/*每一个框的样式设计 */

.main .column .panel {
  height: 300px;
  background: url(../assets/line.png) no-repeat rgba(255, 255, 255, 0.04);
  border: 0.0125rem rgba(25, 186, 139, 0.17) solid;
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
  position: relative;
}
.main .column .panel::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-top: 2px #02a6b5 solid;
  border-left: 2px #02a6b5 solid;
}
.main .column .panel::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 96%;
  width: 10px;
  height: 10px;
  border-top: 2px #02a6b5 solid;
  border-right: 2px #02a6b5 solid;
}
.main .column .panel .panel-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
}
.main .column .panel .panel-footer::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-bottom: 2px #02a6b5 solid;
  border-left: 2px #02a6b5 solid;
}
.main .column .panel .panel-footer::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 96%;
  width: 10px;
  height: 10px;
  border-bottom: 2px #02a6b5 solid;
  border-right: 2px #02a6b5 solid;
}

.map {
  margin-top: 150px;
  height: 300px;
  float: left;
}
.map .map1 {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../assets/map.png) no-repeat;
  background-size: 100%, 100%;
  opacity: 0.3;
}

.map .map2 {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../assets/lbx.png) no-repeat;
  background-size: 100%, 100%;
  opacity: 0.6;
  animation: rotate1 15s linear infinite;
}
@keyframes rotate1 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.map .map3 {
  width: 420px;
  height: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../assets/jt.png) no-repeat;
  background-size: 100%, 100%;
  opacity: 0.6;
  animation: rotate2 10s linear infinite;
}

@keyframes rotate2 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>