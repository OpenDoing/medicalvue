<template>
  <div>
    <div class="nav clearfix fixedtop fullwidth">
      <div class="nav-nav">
        <a class="typo_white typo_middle iconfont fleft nav-nav-prev pr10" href="#">
        </a>
        <h1 id="page_title" class="nav-title textc typo_white typo_large typo_normal elli">{{tittle}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    tittle: String
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="" scoped>
  .clearfix {
    overflow: hidden;
  }
  .fixedtop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .fullwidth {
    width: 100%;
  }

  .nav-nav {
    width: 94%;
    padding: 7px 3%;
    background-color: #00D3C2;
    background: -webkit-gradient(linear, left top, right top, from(#1db5a4), to(#1cabbf));
    background: -moz-linear-gradient(left, #1db5a4, #1cabbf);
    background: linear-gradient(to right, #1db5a4, #1cabbf);
    overflow: hidden;
    position: relative;
  }

  .nav-title {
    padding: 0 15px;
    line-height: 1.5;
  }
  .typo_white, a.typo_white {
    color: #FFF;
  }
  .typo_large {
    font-size: 18px;
  }

</style>
