<script lang="ts" setup>
import PubllcOpen from './components/publlc-open.vue'
import publlcRecommend from './components/publlc-recommend.vue'
import PubllcInput from '@/components/publlc-Input.vue'
</script>

<template>
  <view class="navbar pageBg">
    <view class="content-wrapper loadingLayout">
      <!-- 自定义导航栏 -->
      <PubllcInput
        btn-title="首页"
        :show-btn="false"
        show-btn1
        search-text="搜索你要搜索的内容"
        search-icon-type="search"
      />
      <!-- 上下布局 -->
      <PubllcOpen />
    </view>

    <!-- 推荐项目 推荐活动 -->
    <publlcRecommend />
  </view>
</template>

<style lang="scss" scoped>

</style>
