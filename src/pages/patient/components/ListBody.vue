<template>
  <div class="">
    <div class="wrap uc-family bg_gray hasNav">
      <div class="add-user">
        <router-link to="/patient/addpatient">
          <i class="iconfont add-user-icon cl00caba">
          </i>
          <i class="add-user-txt cl00caba">
            添加家庭成员
          </i>
        </router-link>
        <span></span>
      </div>
      <!--家庭成员列表-->
      <ul class="user-list" id="user-list" style="font-size: 30px">
        <li v-for="item of items" class="mt10 clearfix" :key="item.id">
          <router-link :to="'/patient/editpatient/' + item.id ">
          <div class="layout">
            <div class="userinfo fl">
              <a class="block">
                <h1 class="layout">
                <span class="fs16-rem">
                    <i class="fleft inblo elli" style="max-width: 2rem;">{{item.name}}</i>
                    <em class="fleft ml10">{{item.sex}}</em>
                    <em class="fleft ml10">{{item.birth}}</em>
                </span>
                </h1>
                <p>居住地址：{{item.address}}</p>
                <p>手机号码：{{item.phone}}</p>
              </a>
            </div>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { config } from '../../../../static/js/util.js'
export default {
  name: 'ListBody',
  data () {
    return {
      items: []
    }
  },
  methods: {
    getpatientslist () {
      let that = this
      $.ajax({
        url: config.base_url + 'userprofile',
        type: 'get',
        dataType: 'json',
        data: {
          profile_id: 0,
          token: '221837a41fc4f78b5b457dc2d6de9fa6'
        },
        success: function (res) {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].sex === 1) {
              res.data[i].sex = '男'
            } else {
              res.data[i].sex = '女'
            }
          }
          console.log(res.data)
          that.items = res.data
        }
      })
    }
  },
  mounted () {
    this.getpatientslist()
  }
}
</script>

<style scoped>
  /*@import "../../../../static/css/common.css";*/
  /*@import "../../../../static/css/custom.plugin.css";*/
  @import "../../../../static/css/custom.main.css";

  /*html {*/
    /*font-size: 1rem;*/
  /*}*/

  /*.wrap.hasNav, .hasNav {*/
  /*padding-top: 43px;*/
  /*}*/

  /*.wrap {*/
  /*width: 100%;*/
  /*}*/

  /*.bg_gray {*/
  /*background-color: #F1F1F1;*/
  /*}*/

  /*.add-user {*/
  /*padding: 6px 10px;*/
  /*background-color: #fff;*/
  /*margin: 10px 0;*/
  /*color: #bdbdbd;*/
  /*font-size: 14px;*/
  /*}*/

  /*.cl00caba {*/
  /*color: #00caba;*/
  /*}*/

  /*.add-user-icon {*/
  /*display: inline-block;*/
  /*width: 14px;*/
  /*height: 14px;*/
  /*color: #00d3c2;*/
  /*border: 1px solid #00d3c2;*/
  /*border-radius: 7px;*/
  /*line-height: 14px;*/
  /*text-align: center;*/
  /*margin-right: 6px;*/
  /*vertical-align: 1px;*/
  /*}*/

  /*.add-user-txt {*/
  /*font-size: 16px;*/
  /*color: #00d3c2;*/
  /*}*/

  /*.mt10{margin-top: 10px;}*/
  /*.ml10{margin-left: 10px;}*/

  /*.clearfix:before,.clearfix:after{*/
  /*content:"";*/
  /*display:table;*/
  /*}*/
  /*.clearfix:after{clear:both;}*/
  /*.clearfix{*/
  /**zoom:1;!*IE/7/6*!*/
  /*}*/
  /*.layout:after { content:" "; display:block; clear:both; height:0; }*/
  /*.layout { zoom:1; }*/
  /*.fl, .fleft{float: left;}*/
  /*.fs16-rem{font-size: 0.426667rem;}*/
  /*.inblo{display: inline-block;}*/
  /*.elli{text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}*/
</style>
