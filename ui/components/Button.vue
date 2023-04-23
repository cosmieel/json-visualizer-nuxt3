<script setup lang="ts">
defineProps({
    isBig: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button class="ui-button" :class="{ _big: isBig }" type="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.ui-button {
    border: none;
    background: #ed9300;
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    font-size: 20px;
    transition: background 0.2s ease-out;

    &._big {
        padding: 50px;
        font-size: 32px;
    }

    &:hover {
        background: #ca7d00;
    }
}
</style>
