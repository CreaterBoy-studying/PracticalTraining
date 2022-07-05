<template>
  <div>
    <div @click="setScreen" id="content" class="content">
    </div>
    <div class="nama"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      widthData:screen.width+'px',
      HeightData:screen.height+'px',
    };
  },
  methods: {
    // setScreen(){
    //   document.getElementById("container").style.width=this.widthData;
    //   document.getElementById("container").style.backgroundColor="#bfc";
    //   console.log(this.widthData);
    // }
    // v-bind:style="{width:widthData,height:HeightData}"
  },

  mounted() {
    // this.setScreen();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*pc端 */
/* @media screen and (min-width: 923px) {
    .container {
        position: absolute;
        height: 864px;
        width: 1519px; 
        background-color: #ddd;
    }
} */
    .content {
        /* position: absolute;*/
        height: 100px;
        width: 2019px; 
        background-color: #ddd;
    }

    .nama{
      width: 1500px;
      height: 800px;
      background-color: #abc;
    }
</style>

