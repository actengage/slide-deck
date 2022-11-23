<script lang="ts" setup>
import { onMounted, VNode } from 'vue';

const props = defineProps<{
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
            :is="props.node"
            ref="node" />
    </div>
</template>