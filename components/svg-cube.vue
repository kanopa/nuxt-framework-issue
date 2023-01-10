<script lang="ts" setup>
import { colors } from '../common/constants'

const props = defineProps<{ color: string }>()
const { color } = toRefs(props)
const currentColor = ref(colors[color.value])
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.36 23.52">
    <polygon
      points="20.36 5.88 10.18 0 0 5.88 0 17.64 10.18 23.52 20.36 17.64 20.36 5.88"
      :style="{ fill: currentColor.first }"
    />
    <polygon
      points="10.18 23.49 20.36 17.62 20.36 5.88 10.18 11.75 10.18 23.49"
      :style="{ fill: currentColor.second }"
    />
    <polygon points="10.18 23.49 0 17.62 0 5.88 10.18 11.75 10.18 23.49" :style="{ fill: currentColor.third }" />
  </svg>
</template>
