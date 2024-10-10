<script setup lang="ts">
import type { BubbleItem } from '@/types/home'
// 父传子
const props = defineProps({
  btnTitle: {
    type: String,
    default: '首页',
  },

  showBtn: {
    type: Boolean,
    default: false,
  },
  showBtn1: {
    type: Boolean,
    default: false,
  },
  btnIconType: {
    type: String,
    default: 'star', // 默认图标类型
  },
  btnText: {
    type: String,
    default: '我的公寓', // 默认按钮文字
  },
  searchText: {
    type: String,
    default: '搜索你要搜索的东西', // 默认搜索框文字
  },
  searchIconType: {
    type: String,
    default: 'search', // 默认搜索框图标类型
  },
})

// 获取屏幕边界到安全区域
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log(safeAreaInsets)

// recommend  模拟数据
const recommend: BubbleItem[] = [
  { id: 1, content: '春雷计划他们想上学' },
  { id: 2, content: '净水计划' },
  { id: 3, content: '班班有个图书馆' },
]
</script>

<template>
  <view :style="{ paddingTop: `${safeAreaInsets?.top}px` }">
    <view mt-5rpx pb-60rpx>
      <view>
        <text text-35rpx text-white>
          {{ props.btnTitle }}
        </text>
      </view>
    </view>
    <view class="publlc-input">
      <!-- 我的公益 -->
      <slot />
      <view v-if="showBtn" class="btn">
        <uni-icons :type="btnIconType" color="red" :size="25" class="icon" />
        <text text-25rpx text-light>
          {{ props.btnText }}
        </text> <!-- 动态按钮文字 -->
      </view>

      <!-- 搜索框 -->
      <view class="input-box">
        <view class="icon-text-wrapper">
          <uni-icons :type="searchIconType" :size="25" color="white" class="icon" />
          <text text-light>
            {{ props.searchText }}
          </text> <!-- 动态搜索框文字 -->
        </view>
      </view>
    </view>

    <!-- 推荐 -->
    <view v-if="showBtn1" class="recommend">
      <view v-for="item in recommend" :key="item.id" class="bgfont">
        <view class="bg">
          <text>{{ item.content }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.publlc-input {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn {
    flex: 1;
    display: flex;
    align-items: center;

    .icon {
      background-color: white;
      padding: 10rpx;
      border-radius: 100rpx;
    }
    text {
      width: 100%;
      margin-left: 10rpx;
    }
  }

}

.input-box {
  width: 100%;
  height: 80rpx;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 100rpx;
  flex: 1;
  padding: 0 30rpx;
  display: flex;
  justify-content: center;
  /* 保证整个 input-box 内容居中 */
  align-items: center;
  margin: 0 auto;

  .icon-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* 让容器的宽度占满父容器 */
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10rpx;
    /* 保持图标和文字之间的小间距 */
  }

  text {
    font-size: 25rpx;
    text-align: center;
    /* 使文字在内部居中 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.recommend{
  width: 100%;
  display: flex;

.bgfont{
  background-color: rgba(255,255,255,0.4);
  margin: 10rpx 0 0 10rpx;
  padding: 10rpx 15rpx;
  border-radius: 50rpx;

  .bg{
    color: white;
    font-size: 20rpx;
  }
}
}
</style>
