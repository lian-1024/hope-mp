<script setup lang="ts">
import publlcProjectsComponent from '@/components/publlc-projects-component.vue'
import publlcComponentActivity from '@/components/publlc-component-activity.vue'
</script>

<template>
  <view class="publlc-recommend">
    <view class="publlc-title">
      <uni-section title-font-size="17px" class="btn10" title="推荐项目" type="line" />

      <navigator
        class="publlc-more" url="/pages/recommen-projects/recommen-projects" open-type="navigate"
        hover-class="navigator-hover"
      >
        更多>
      </navigator>
    </view>

    <!-- 公益项目组件 -->
    <publlcProjectsComponent />

    <view class="publlc-title">
      <uni-section title-font-size="17px" class="btn10" title="推荐活动" type="line" />

      <navigator
        class="publlc-more" url="/pages/recommen-projects/recommen-projects" open-type="navigate"
        hover-class="navigator-hover"
      >
        更多>
      </navigator>
    </view>

    <!-- 推荐活动 -->
    <publlcComponentActivity />
  </view>
</template>

<style lang="scss">
.publlc-recommend {
  width: 100%;
  background-color: white;
  margin-top: 40rpx;
  border-top-left-radius: 30rpx; // 左上角圆角
  border-top-right-radius: 30rpx; // 左上角圆角
  padding: 0 20rpx;

  .publlc-title {

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding-right:12rpx ;
    .publlc-more {
      font-size: 25rpx;
      opacity: 0.5;
      color: black;
    }

    .btn10 {
      margin-right: 20rpx;
      background-color: transparent;

    }
  }
}
</style>
