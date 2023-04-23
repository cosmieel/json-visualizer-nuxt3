<script setup lang="ts">
const textareaStore = useTextareaStore();

onMounted(() => {
    textareaStore.onMountedVisualize();
});

textareaStore.$subscribe((mutation, state) => {
    localStorage.setItem('inputText', state.inputText)
})
</script>

<template>
    <form class="form" @submit.prevent>
        <UITextArea v-focus v-model="textareaStore.inputText" class="form__textarea" placeholder="Paste JSON" />
        <UIErrorMessage v-if="textareaStore.errorMessage" class="form__error">
            {{ textareaStore.errorMessage }}
        </UIErrorMessage>
        <UIButton class="form__btn" @click="textareaStore.visualizeJson">Visualize</UIButton>
    </form>
</template>


