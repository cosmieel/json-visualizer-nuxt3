<script setup lang="ts">
const textareaState = useTextareaStore();
</script>

<template>
    <div>
        <h2>Visualization by JSON-string</h2>
        <TheTextareaForm />
        <TheTree :tree-data="textareaState.jsonOutput" />
    </div>
</template>
  