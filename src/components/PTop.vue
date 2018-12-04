<template>
  <div>
    <Row class="c-head" type="flex" align="middle">
      <Col span="8"  class="c-head__loaction">
        <span>
          深圳
        </span>
        <span class="c-head__weather">
          21/14°C
        </span>
      </Col>
      <Col span="8"  class="c-head__pagename" v-text="pagename"></Col>
      <Col span="8"  class="c-head__btnbox">
        <span class="iconfont icon-lingdang c-head__icon"></span>
        <span class="iconfont icon-user c-head__icon"></span>
      </Col>
    </Row>
    <div class="c-head__zw">

    </div>
  </div>
  
</template>

<script>
export default {
  name: 'PTop',
  props:{
    pagename: {
      type: String,
      default: '首页'
    }
  }
}
</script>

<style scoped>
.c-head{
  position: fixed;
  top:0;
  left:0;
  z-index: 999;
  width:100%;
  height: 50px;
  padding:0 15px;
  border-bottom:1px solid #f2f2f2;
  background-color: #fff;
}
.c-head__loaction{
  color:#666;
}
.c-head__pagename{
  color:#333;
  font-size: 20px;
  text-align: center;
}
.c-head__btnbox{
  text-align: right;
}
.c-head__icon{
  font-size:22px;
  color:#999;
}
.c-head__zw{
  height: 50px;
}
</style>

