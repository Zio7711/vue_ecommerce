<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <!-- no userName, NOT login -->
          <p v-if="!userName">
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>

          <!-- Login status -->
          <p v-else>
            <a>{{ userName }}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form @submit="goSearch" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxLarge"
            v-model="keyword"
          />

          <button class="sui-btn btn-xLarge btn-danger" type="submit">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        //responding data, for collecting input element value
        keyword: '',
      };
    },
    methods: {
      //search button function
      goSearch() {
        //pass params when routing
        let location = {
          name: 'search',
          params: { keyword: this.keyword || undefined },
        };
        if (this.$route.query) {
          location.query = this.$route.query;
          this.$router.push(location);
        }
      },

      logout() {
        try {
          this.$store.dispatch('userLogout');
          this.$router.push('/home');
        } catch (error) {
          alert(error.message);
        }
      },
    },

    computed: {
      userName() {
        return this.$store.state.user.userInfo.name;
      },
    },

    mounted() {
      this.$bus.$on('clear', () => {
        this.keyword = '';
      });
    },
  };
</script>

<style lang="less">
  .header {
    & > .top {
      background-color: #eaeaea;
      height: 30px;
      line-height: 30px;

      .container {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        .loginList {
          float: left;

          p {
            float: left;
            margin-right: 10px;

            .register {
              border-left: 1px solid #b3aeae;
              padding: 0 5px;
              margin-left: 5px;
            }
          }
        }

        .typeList {
          float: right;

          a {
            padding: 0 10px;

            & + a {
              border-left: 1px solid #b3aeae;
            }
          }
        }
      }
    }

    & > .bottom {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .logoArea {
        float: left;

        .logo {
          img {
            width: 175px;
            margin: 25px 45px;
          }
        }
      }

      .searchArea {
        float: right;
        margin-top: 35px;

        .searchForm {
          overflow: hidden;

          input {
            box-sizing: border-box;
            width: 490px;
            height: 32px;
            padding: 0px 4px;
            border: 2px solid rgb(149, 191, 71);
            float: left;

            &:focus {
              outline: none;
            }
          }

          button {
            height: 32px;
            width: 68px;
            background-color: rgb(149, 191, 71);
            border: none;
            color: #fff;
            float: left;
            cursor: pointer;

            &:focus {
              outline: none;
            }
          }
        }
      }
    }
  }
</style>
