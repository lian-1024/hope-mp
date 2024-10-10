<script setup lang="ts">
import type { BubbleList } from '@/types/home'

// 模拟数据
const OpenList: BubbleList[] = [
  { id: 1, icon: 'shop-filled', title: '每日签到' },
  { id: 2, icon: 'shop-filled', title: '我的志愿' },
  { id: 3, icon: 'shop-filled', title: '我的公益' },
  { id: 4, icon: 'shop-filled', title: '消息' },
]
</script>

<template>
  <view class="publlc-open-box">
    <view v-for="item in OpenList" :key="item.id" class="publlc-open">
      <!-- 图片 -->
      <view class="openIcon">
        <uni-icons
          type="shop-filled"
          color=""
          :size="30"
        />
      </view>
      <view class="open-text">
        {{ item.title }}
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.publlc-open-box{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 40rpx;
    .publlc-open{
    display: flex;
    align-items: center;
    flex-direction: column;
    .openIcon{
        width: 100rpx;
        height: 100rpx;
        border-radius: 100rpx;
        background-color:white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .open-text{
        color: white;
        font-size: 25rpx;
        margin-top: 10rpx;
    }
}
}
</style>
