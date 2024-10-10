<script setup lang="ts">
import publlcButton from './publlc-button.vue'
</script>

<template>
  <scroll-view scroll-x class="publlc-scroll">
    <view v-for="item in 5" :key="item" class="publlc-block">
      <view class="publlc-component-activity">
        <view class="publlc-image">
          <image class="image" src="../static/zgc.jpg" mode="scaleToFill" />
        </view>
        <view class="publlc-content">
          <view class="publlc-text">
            <view class="publlc-title1">
              巧克力中的“爱马仕”，让自己站在今年情人节票圈的顶端
            </view>
            <view class="publlc-title2">
              巧克力中的“爱马仕”，让自己站在今年情人节票圈的顶端
            </view>
          </view>
          <view>
            <publlcButton unique-id="1" btn-button="一起来做志愿" font-size="25rpx" />
          </view>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<style lang="scss" scoped>
.publlc-scroll {
  width: 100%;
  height: 250rpx;
  border: 1px solid shadow-black;
  white-space: nowrap;
  /* 保留此属性以启用横向滚动 */
}

.publlc-block {
  margin-right: 50rpx;
  display: inline-block;
  height: 100%;
  width: 600rpx;
  /* 固定宽度，确保组件超出视口 */

  .publlc-component-activity {
    height: 100%;
    border: 1px solid pink;
    color: black;
    display: flex;

    .publlc-image {
      width: 40%;
      /* 使用百分比来设置图片宽度 */

      .image {
        width: 100%;
        /* 图片充满父容器 */
        height: 100%;
        /* 保持图片高度与父容器一致 */
        border-top-left-radius: 25rpx;
        border-bottom-left-radius: 25rpx;
      }
    }

    .publlc-content {
      width: 60%;
      /* 剩余部分给内容 */
      padding: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .publlc-text {
        display: flex;
        flex-wrap: wrap;
        /* 允许子元素换行 */
        width: 100%;
        /* 确保文本容器占满父容器 */
      }

      .publlc-title1,
      .publlc-title2 {
        flex: 1 0 auto;
        /* 允许元素自适应宽度 */
        max-width: 100%;
        /* 避免文本溢出 */
      }

      .publlc-title1 {
        font-size: 25rpx;
        white-space: normal; //加上这个语句
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .publlc-title2 {
        font-size: 22rpx;
        color: rgba(166, 166, 166, 1);
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        /* 超出部分隐藏 */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        /* 限制文本显示一行 */
        line-clamp: 2;
      }
    }
  }
}
</style>
