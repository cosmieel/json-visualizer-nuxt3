<script setup lang="ts">
defineProps<{
    treeData: object | string
}>()
</script>

<template>
    <div class="tree">
        <ul class="tree__list">
            <TheTreeItem :node="treeData" />
        </ul>
    </div>
</template>

<style scoped lang="scss">
.tree {
    max-width: 1600px;
    margin: 0 auto;
    padding: 40px 24px 0;
}
</style>
