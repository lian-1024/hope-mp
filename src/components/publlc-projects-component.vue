<script setup lang="ts">
import publlcButton from './publlc-button.vue'
import type { BubbleRecommen } from '@/types/home'

const publlcComponent: BubbleRecommen[] = [
  { id: 1, Image: '../static/image.png', isVisible: false, netizen: '已有99999万爱心网友捐赠', content: '现在很多APP在用户截图时会自动提示用户是否要进行分享。这个时机确实抓的很棒，一般来说，用户截图大多', title: '现在很多APP在用户截图时会自动提示用户是否要进行分享。这个时机确实抓的很棒，一般来说，用户截图大多数时候都是为了分享给他人，少部分是为了留底备份。作为用户和产品之间的桥...' },
]

function handleButtonClick(uniqueId: string) {
  console.log('Button clicked:', uniqueId)
  // 这里可以根据 uniqueId 来调用不同的 API 或进行不同的处理
}
</script>

<template>
  <view class="publlc-projects-component">
    <view v-for="item in publlcComponent" :key="item.id">
      <view class="publlc-image">
        <image :src="item.Image" mode="aspectFit" />
      </view>
      <view class="publlc-text uni-publlc-component">
        {{ item.title }}
      </view>
      <view v-if="item.isVisible">
        <view class="publlc-content uni-publlc-component">
          {{ item.content }}
        </view>
        <view class="publlc-netizen uni-publlc-component">
          {{ item.netizen }}
        </view>
      </view>
      <!-- <button type="primary" class="publlc-button">
        {{ item.Button }}
      </button> -->
      <!-- <button>点赞</button> -->
      <publlcButton btn-button="帮助" unique-id="page1" @button-click="handleButtonClick" />
      <view class="publlcposition">
        <uni-icons class="icons" type="gear" color="white" :size="25" />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.publlc-projects-component {
  width: 100%;
  position: relative;

  .publlc-image {
    width: 100%;

    image {
      width: 100%;
      max-height: 330rpx; // 设置最大高度
      object-fit: cover; // 覆盖图片区域
    }
  }

  .publlc-text {
    padding: 0 10rpx;
    font-size: 27rpx;
    font-weight: 700;
  }

  // .publlc-button {
  //   border-radius: 78rpx;
  //   margin-top: 20rpx;
  //   background: linear-gradient(180deg, rgba(237, 69, 86, 1) 0%, rgba(237, 69, 86, 1) 65.29%, rgba(247, 148, 158, 1) 100%);
  // }

  .publlcposition {
    position: absolute;
    top: 5%;
    right: 3%;
    width: 60rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    border-radius: 100rpx;
    background-color: rgba(0, 0, 0,0.2);

  }

  .publlc-content{
    color: rgba(166, 166, 166, 1);
    font-size: 25rpx;
    margin-top: 10rpx;
  }
  .publlc-netizen{
    color: rgba(166, 166, 166, 1);
    margin-top: 15rpx;
    font-size: 22rpx;
  }
}
</style>
