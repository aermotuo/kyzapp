<template>
  <div class="s-flow">
    <div class="flex s-columns">
      <div class="flex__col--6 s-columns__item">
        <div class="s-columns__title">总发客数量</div>
        <div class="s-columns__number">1,200,000</div>
      </div>
      <div class="flex__col--6 s-columns__item">
        <div class="s-columns__title">总发客数量</div>
        <div class="s-columns__number">1,200,000</div>
          <div class="flex flex--align--center s-columns__intro">
          <div class="flex__item">日增客流</div>
          <div class="flex__item">
            15% <span class="iconfont icon-xiaolian"></span>
          </div>
        </div>
      </div>
      <div class="flex__col--6 s-columns__item">
        <div class="s-columns__title">总发客数量</div>
        <div class="s-columns__number">1,200,000</div>
        <div class="flex flex--align--center s-columns__intro">
          <div class="flex__item">日增客流</div>
          <div class="flex__item">
            15% <span class="iconfont icon-xiaolian"></span>
          </div>
        </div>
      </div>
      <div class="flex__col--6 s-columns__item">
        <div class="s-columns__title">总发客数量</div>
        <div class="s-columns__number">1,200,000</div>
        <div class="flex flex--align--center s-columns__intro">
          <div class="flex__item">日增客流</div>
          <div class="flex__item">
            15% <span class="iconfont icon-xiaolian"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="s-setout">
      <div class="flex flex--align--center s-setout__hd">
        <div class="flex__col--4 s-setout__title">
          发客数量
        </div>
        <div class="flex__col--8">
          <Input placeholder="Enter something..." />
        </div>
      </div>
      <echart-trend></echart-trend>
      <echart-ride-number class="echart-ride-number"></echart-ride-number>
    </div>
  </div>
</template>

<script>
import EchartTrend from '@/components/echarts/EchartTrend';
import EchartRideNumber from '@/components/echarts/EchartRideNumber';
export default {
  name: 'SummaryFlow',
  components:{
    EchartTrend,
    EchartRideNumber
  }
}
</script>

<style>
.s-columns{
  margin-top:10px;
  position: relative;
  border:1px solid #f2f2f2;
}
.s-columns::before,.s-columns::after{
  content:'';
  position: absolute;
  background-color:#f2f2f2;
}
.s-columns::before{
  top:50%;
  left:0;
  width: 100%;
  height: 1px;
}
.s-columns::after{
  top:0;
  left:50%;
  width: 1px;
  height: 100%;
}
.s-columns__item{
  padding:5px;
  background-color:#fff;
}
.s-columns__title{
  color:#3091F2;
}
.s-columns__number{
  padding-left:30px;
  color:#FF6633;
}
.s-columns__intro{
  margin-top:15px;
  color:#666666;
}
.s-columns__intro div:last-child{
  text-align: right;
}

.s-setout{
  margin-top:10px;
  border-top:1px solid #f2f2f2;
  border-bottom:1px solid #f2f2f2;
  background-color:#fff;
}
.s-setout__hd{
  padding:5px;
  border-bottom:1px solid #f2f2f2;
}
.s-setout__title{
  font-weight: 700;
  color:#666;
}
.echart-ride-number{
  padding:10px;
}
</style>
