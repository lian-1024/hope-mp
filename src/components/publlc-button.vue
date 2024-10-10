<script setup lang="ts">
const props = defineProps({
  btnButton: {
    type: String,
    default: '帮助',
  },
  uniqueId: {
    type: String,
    required: true, // 确保每个组件实例有唯一标识
  },
  fontSize: {
    type: String,
    default: '32rpx', // 默认字体大小
  },
})

// 发射点击事件
const emit = defineEmits(['button-click'])

function handleClick() {
  emit('button-click', props.uniqueId) // 将唯一值传递到父组件
}
</script>

<template>
  <div class="publlc-button-box">
    <button type="primary" class="publlc-button" :style="{ fontSize: props.fontSize }" @click="handleClick">
      {{ props.btnButton }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.publlc-button-box {
    width: 100%;
    height: 100%;

    .publlc-button {
        border-radius: 78rpx;
        margin-top: 20rpx;
        background: linear-gradient(180deg, rgba(237, 69, 86, 1) 0%, rgba(237, 69, 86, 1) 65.29%, rgba(247, 148, 158, 1) 100%);
    }
}
</style>
