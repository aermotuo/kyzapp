<template>
  <div class="p-add">
    <inside-top title="新增告警"></inside-top>
    <div class="p-add__bd">
      <form class="p-add__form">
        <div class="p-form__bd">
          <div class="flex flex--align--center p-form__group">
            <label class="p-form__label">编号</label>
            <div class="flex__item">
              <Input width="100%" class="p-form__input"></Input>
            </div>
          </div>
          <div class="flex flex--align--center p-form__group">
            <label class="p-form__label">告警时间</label>
            <div class="flex__item">
              <DatePicker
                type="datetime"
                placeholder="2018-11-30 23：30"
                format="yyyy-MM-dd HH:mm"
                style="width: 100%"
              ></DatePicker>
            </div>
          </div>
          <div class="flex flex--align--center p-form__group">
            <label class="p-form__label">告警人</label>
            <div class="flex__item">
              <Input width="100%" class="p-form__input"></Input>
            </div>
          </div>
          <div class="flex flex--align--center p-form__group">
            <label class="p-form__label">告警类型</label>
            <div class="flex__item">
              <Select v-model="selectLevel.level">
                <Option
                  v-for="item in selectLevel.cityList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </div>
          </div>
          <div class="flex flex--align--center p-form__group">
            <label class="p-form__label">告警类型</label>
            <div class="flex__item">
              <Select v-model="selectType.type">
                <Option
                  v-for="item in selectType.cityList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="p-form__ft">
          <label class="p-form__label">
            详细说明
          </label>
          <textarea class="p-form__textarea"></textarea>
        </div>
        <div class="p-form__btn">确认</div>
      </form>
    </div>
  </div>
</template>

<script>
import InsideTop from "@/components/public/InsideTop";
export default {
  name: "WarningAdd",
  components: {
    InsideTop
  },
  data() {
    return {
      selectLevel: {
        cityList: [
          { value: "3", label: "低级" },
          { value: "2", label: "中级" },
          { value: "1", label: "高级" }
        ],
        level: ""
      },
      selectType: {
        cityList: [
          { value: "3", label: "超人" },
          { value: "2", label: "未系安全带" },
          { value: "1", label: "其他" }
        ],
        type: ""
      }
    };
  }
};
</script>

<style scoped>
.p-add {
  background-color: #f9f9f9;
}
.p-add__bd {
  padding: 20px;
}
.p-form__bd{
  border: 1px solid #e4e4e4;
  background-color: #fff;
}
.p-form__ft{
  margin-top:10px;
}
.p-form__textarea{
  width: 100%;
  padding:10px;
  background-color:#fff;
  border:1px solid #e4e4e4;
  resize: none;
  outline: 0;
}

.p-form__btn{
  margin-top:20px;
  padding:10px;
  text-align: center;  
  font-size: 16px;
  color:#fff;
  border-radius: 25px;
  background-color:#c1dddd;
}
</style>
