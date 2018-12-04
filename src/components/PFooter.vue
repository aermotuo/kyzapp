<template>
  <div>
    <Row type="flex" align="middle" class="c-footer">
      <Col class="c-footer__tab">
        <div class="iconfont icon-home c-tab__icon"></div>
        首页
      </Col>
      <Col class="c-footer__tab">
        <div class="iconfont icon-tubiao c-tab__icon"></div>
        态势展示
      </Col>
      <Col class="c-footer__tab">
        <div class="iconfont icon-loufang-shixin c-tab__icon"></div>
        客运站
      </Col>
      <Col class="c-footer__tab">
        <div class="iconfont icon-shipin c-tab__icon"></div>
        视频查看
      </Col>
      <Col class="c-footer__tab">
        <div class="iconfont icon-jingli c-tab__icon"></div>
        警力部署
      </Col>
    </Row>
    <div class="c-footer__zw"></div>
  </div>  
</template>

<script>
export default {
  name: 'PFooter'
}
</script>

<style scoped>
.c-footer{
  position: fixed;
  bottom:0;
  left:0;
  z-index:999;
  width:100%;
  height: 60px;
  border-top:1px solid #f2f2f2;
  background-color:#fff;
}
.c-footer__zw{
  height: 60px;
}
.c-footer__tab{
  flex: 1;
  color:#999;
  text-align: center;
  font-size: 12px;
}
.c-tab__icon{
  font-size: 26px;
  line-height: 1.2;
}
</style>
