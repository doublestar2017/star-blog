<template>
  <div class="home">
    <div id="start1"></div>
    <div id="start2"></div>
    <div id="start3"></div>
    <div class="content">
      <div class="home-header">
        <router-link
          class="link"
          to="/"
        >
          <img
            class="home-logo"
            src="../assets/logo.jpg"
            alt="star"
          />
        </router-link>
      </div>

      <div class="home-body">
        <div class="list">
          <router-link
            class="link"
            to="/articles"
          >
            学习
          </router-link>
          <router-link
            class="link"
            to="/project"
          >
            生活
          </router-link>
          <router-link
            class="link"
            to="/project"
          >
            娱乐
          </router-link>
          <router-link
            class="link"
            to="/project"
          >
            记录
          </router-link>
        </div>
        <div class="mark">
          <div class="introduce"> 有二事焉恒然于心 </div>
          <div class="introduce2"> 敬之畏之日省日甚 </div>
        </div>

        <div class="mark2">
          <div class="introduce"> 外乎者如璀璨星穹 </div>
          <div class="introduce2"> 内在者犹道德律令 </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "Home",
  setup() {
    onMounted(() => {});
  },
});
</script>

<style lang="less" scoped>
.home {
  @windowWidth: 2000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  font-family: KT;
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f92,
    #75517d,
    #1b2947
  );
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  );
  overflow: hidden;
  height: 100vh;
  .mixin(@n) when(@n > 0) {
    box-shadow+: ~`Math.round(Math.random() * @{windowWidth}) + "px" + " " +
      Math.round(Math.random() * @{windowWidth}) + "px #FFF" `;
    .mixin((@n - 1));
  }
  #start1 {
    .mixin(700);
    width: 1px;
    height: 1px;
    animation: animStar 50s linear infinite;
    animation-delay: -10s;
  }
  #start2 {
    .mixin(200);
    width: 2px;
    height: 2px;
    animation: animStar 100s linear infinite;
    animation-delay: -8s;
  }
  #start3 {
    .mixin(100);
    width: 3px;
    height: 3px;
    animation: animStar 150s linear infinite;
    animation-delay: -5s;
  }
  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
  .content {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 30px;
    text-align: center;
    padding-top: 12%;
    .home-logo {
      width: 220px;
      border-radius: 50%;
      animation: mylogo 3s;
      -moz-animation: mylogo 3s; /* Firefox */
      -webkit-animation: mylogo 3s; /* Safari and Chrome */
      -o-animation: mylogo 3s; /* Opera */
      animation-iteration-count: infinite;
    }
    .home-header {
      .link {
        display: block;
      }
    }
    .home-body {
      padding-top: 20px;
      .list {
        .link {
          display: inline-block;
          padding: 20px;
          color: #ffffff;
          min-width: 80px;
        }
        .link:hover {
          color: rgb(155, 35, 35);
        }
      }
    }
    .mark {
      font-size: 50px;
      animation: hiddenText 3s 3s linear forwards;
      animation-iteration-count: 1;
      @keyframes hiddenText {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      .introduce {
        position: fixed;
        top: 50px;
        right: 50px;
        width: 30px;
        color: #fff;
      }
      .introduce2 {
        position: fixed;
        top: 170px;
        right: 130px;
        width: 30px;
        color: #fff;
      }
    }
    .mark2 {
      font-size: 50px;
      opacity: 0;
      animation: showText 5s 4s linear forwards;
      animation-iteration-count: 1;
      @keyframes showText {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .introduce {
        position: fixed;
        top: 50px;
        right: 50px;
        width: 30px;
        color: #fff;
      }
      .introduce2 {
        position: fixed;
        top: 170px;
        right: 130px;
        width: 30px;
        color: #fff;
      }
    }
  }
}
@keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 0.6;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.4;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 0.6;
  }
}

@-moz-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-webkit-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-o-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}
</style>

