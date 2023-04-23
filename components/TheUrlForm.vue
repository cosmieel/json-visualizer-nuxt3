<script setup lang="ts">
const urlStore = useUrlStore();

onMounted(() => {
    urlStore.onMountedVisualize();
});

urlStore.$subscribe((mutation, state) => {
    localStorage.setItem('inputUrl', state.inputText)
})
</script>

<template>
    <form class="form" @submit.prevent>
        <UIInput v-focus v-model="urlStore.inputText" class="form__input" placeholder="Paste link"
            @keyup.enter="urlStore.visualizeJson" />
        <UIErrorMessage v-if="urlStore.errorMessage" class="form__error">
            {{ urlStore.errorMessage }}
        </UIErrorMessage>
        <UIButton class="form__btn" @click="urlStore.visualizeJson">Visualize</UIButton>
    </form>
</template>
