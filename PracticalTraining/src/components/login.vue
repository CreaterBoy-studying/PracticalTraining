<template>
  <div>
    <div id="M_container" class="M_container">
      <div>
        <div class="main">
          <div class="header">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-drxx92"></use>
            </svg>
          </div>
          <div class="login">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="70px"
              class="demo-ruleForm"
            >
              <el-form-item class="label_font" label="账号" prop="username">
                <el-input v-model.number="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item class="label_font" label="密码" prop="pass">
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >提交</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/iconfont/iconfont.js";

export default {
  name: "HelloWorld",
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: "",
      },
      rules: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/show")
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },

  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*pc端 */
@media screen and (min-width: 923px) {
  .M_container {
    background-image: url(../assets/login_bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .main {
    position: absolute;
    width: 300px;
    height: 400px;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    right: 0px;
    left: 0px;
    background-color: #bfc;
    background: rgba(29, 29, 31, 0.52);
    backdrop-filter: saturate(180%) blur(20px);
    box-shadow: rgb(187, 187, 221, 0.5) 5px 5px;
  }
  .icon {
    width: 2rem;
    height: 2rem;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
    right: 0px;
    left: 0px;
    margin-top: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
  .login {
    position: absolute;
    top: 5rem;
  }
  .label_font {
    font-size: 20px;
    color: #fff;
  }
  .el-form-item__label {
    color: fff;
  }
}

/*ipad端 */
@media screen and (min-width: 768px) and (max-width: 922px) {
  .container {
    width: 723px;
    height: 300px;
    background-color: #bbd;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
/*移动端 */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    height: 100px;
    background-color: #ead;
    padding: 0px 10px 0 10px !important;
    box-sizing: border-box;
  }
}
</style>
