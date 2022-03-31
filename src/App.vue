<template>
  <van-config-provider :theme-vars="themeVars">
    <!-- <van-nav-bar safe-area-inset-top /> -->
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <!-- <van-number-keyboard safe-area-inset-bottom /> -->
  </van-config-provider>
</template>
<script setup lang="ts">
const themeVars = {
  rateIconFullColor: '#07c160',
  sliderActiveBackgroundColor: '#07c160',
  buttonPrimaryBorderColor: '#07c160',
  buttonPrimaryBackgroundColor: '#07c160',
}
</script>
