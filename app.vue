<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPtOf1UFHbuGsVGUkjFNTQklZL4hldPgM",
  authDomain: "visualijson-app-nuxt3.firebaseapp.com",
  projectId: "visualijson-app-nuxt3",
  storageBucket: "visualijson-app-nuxt3.appspot.com",
  messagingSenderId: "897483817183",
  appId: "1:897483817183:web:3df02a2cf1624dde9ba96a"
};

const app = initializeApp(firebaseConfig);
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background: #f6fff7;
}

h2 {
    text-align: center;
    font-size: 40px;
    padding-top: 20px;
    padding-bottom: 40px;
    color: #ed9300;
    text-shadow: 3px 3px #00a69a;
}

input,
textarea {
    display: flex;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    outline: none;
}

ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
}

.form {
    text-align: center;

    &__btn {
        margin: 24px;
    }

    &__error {
        padding-top: 16px;
    }
}
</style>