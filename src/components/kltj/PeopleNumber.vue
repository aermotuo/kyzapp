<template>
  <Row :gutter="16">
    <Col span="6">
      <div class="p-number">
        <div class="head-text p-number__hd">
          总发客数
        </div>
        <div class="p-number__bd">
          <span>
            1,200,000
          </span>
        </div>
      </div>
    </Col>
    <Col span="6">
      <div class="p-number">
        <div class="head-text p-number__hd">
          总发客数
        </div>
        <div class="p-number__bd">
          <span>
            1,200,000
          </span>
          <div class="p-number__intro">同比增长</div>
        </div>
      </div>
    </Col>
    <Col span="6">
      <div class="p-number">
        <div class="head-text p-number__hd">
          总发客数
        </div>
        <div class="p-number__bd">
          <span>
            1,200,000
          </span>
          <div class="p-number__intro">同比增长</div>
        </div>
      </div>
    </Col>
    <Col span="6">
      <div class="p-number">
        <div class="head-text p-number__hd">
          总发客数
        </div>
        <div class="p-number__bd">
          <span>
            1,200,000
          </span>
          <div class="p-number__intro">
            同比增长
          </div>
        </div>
      </div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'PeopleNumber'
}
</script>

<style scoped>
  .p-number{
    height: 100%;
    border:1px solid #dedede;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    overflow: hidden;
  }
  .p-number__hd{
    color:#1E9FFF;
  }
  .p-number__bd{
    padding:15px;
  }
  .p-number__bd span{
    color:#FF5722;
    font-size: 36px;
  }
  .p-number__intro{
    margin-top:10px;
  }
</style>
