<script setup lang="ts">
const urlStore = useUrlStore();
</script>

<template>
    <div>
        <h2>Visualization by URL</h2>
        <TheUrlForm />
        <TheTree :tree-data="urlStore.jsonOutput" />
    </div>
</template>
  