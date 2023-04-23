<script setup lang="ts">
defineProps({
    modelValue: String,
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

function updateInput(e: Event): void {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<template>
    <textarea class="ui-textarea" :value="modelValue" @input="updateInput" type="text" />
</template>

<style lang="scss" scoped>
.ui-textarea {
    resize: vertical;
    min-height: 250px;
    border: 2px solid #00a69a;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    transition: border-color 0.2s ease-out;

    &:focus {
        border-color: #006e67;
    }
}
</style>
