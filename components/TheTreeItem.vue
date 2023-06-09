<script setup lang="ts">
defineProps<{
    node: object | string
}>()

function isNodeContainObject(object: string | unknown): boolean {
    return typeof object === "object" && object !== null;
}
function getNodeContent(value: string): string {
    return String(value) ? String(value) : "'empty'";
}
</script>

<template>
    <li 
        class="node" 
        v-for="(value, key) in node" :key="key"
    >
        <div 
            class="node__key" 
            :class="{ '_is-alone': isNodeContainObject(value) }"
        >
            <span>{{ getNodeContent(key as string) }}</span>
        </div>

        <div v-if="!isNodeContainObject(value)" class="node__value">
            <span class="node__value-text">
                {{ getNodeContent(value) }}
            </span>
            <span class="node__value-type">
                {{ typeof value }}
            </span>
        </div>

        <ul v-if="isNodeContainObject(value)">
            <TheTreeItem :node="value" />
        </ul>
    </li>
</template>

<style lang="scss" scoped>
.node {
    margin: 0;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    color: #fff;
    font-size: 16px;

    position: relative;

    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        left: 23.5px;
        top: 0;
        background: #00a69a;
        width: 3px;
        height: calc(100% + 20px);
    }

    &:last-child {
        margin-bottom: 0;

        &::after {
            display: none;
        }
    }

    ul {
        position: relative;
        margin-left: 20px;

        &::before {
            content: "";
            position: absolute;
            right: 100%;
            top: 28px;
            height: 3px;
            width: 20px;
            background: #00a69a;
            z-index: 1;
        }
    }

    &__key {
        padding: 20px;
        background: #00a69a;
        border-radius: 5px 0 0 5px;
        font-weight: bold;
        min-height: 58px;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: flex-start;
        position: relative;

        &._is-alone {
            border-radius: 5px;
        }

        span {
            position: sticky;
            top: 20px;
        }
    }

    &__value {
        padding: 0px 0px 0px 20px;
        background: #ed9300;
        margin-right: 20px;
        border-radius: 0 5px 5px 0;
        min-height: 58px;
        box-sizing: border-box;
        max-width: 600px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    &__value-text {
        padding: 20px 0;
        word-break: break-all;
    }

    &__value-type {
        background: #505386;
        font-size: 12px;
        padding: 5px;
        margin-left: 10px;
        font-weight: bold;
        border-radius: 0 5px 0 0;
    }
}
</style>
