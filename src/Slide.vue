<script lang="ts" setup>
import { onMounted, VNode } from 'vue';

defineProps<{
    node?: VNode
}>();

onMounted(() => {
    node?.el?.dispatchEvent(new Event('enter'));
});
</script>

<script lang="ts">
let node = $ref<VNode>();
</script>

<template>
    <div class="slide-deck-slide">
        <component
            :is="node"
            ref="node" />
    </div>
</template>