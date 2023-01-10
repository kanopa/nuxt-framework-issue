<script lang="ts" setup>
import { colors } from '../common/constants';
import SvgCube from './svg-cube.vue';

const colorsKeys = Object.keys(colors)
</script>

<template>
  <div class="cube-wrapper">
    <div v-for="item in colorsKeys" class="cube">
      <svg-cube :color="item" />
    </div>
  </div>
</template>

<style scoped>
.cube-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.cube-wrapper .cube {
  display: flex;
  width: 50px;
  margin-right: 1rem;
}
</style>