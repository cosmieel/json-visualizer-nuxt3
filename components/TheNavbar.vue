<template>
    <nav class="nav">
        <NuxtLink to="/" class="nav__link" data-test="route-home">
            Home
        </NuxtLink>
        <NuxtLink to="/stringpaste" class="nav__link" data-test="route-stringpaste">
            JSON-string
        </NuxtLink>
        <NuxtLink to="/linkpaste" class="nav__link" data-test="route-linkpaste">
            JSON-url
        </NuxtLink>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    padding: 30px 40px;
    background: #00a69a;
    display: flex;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 32px;

    &__link {
        color: #fff;
        text-decoration: none;
        margin-left: 50px;
        transition: color 0.2s ease-out, text-shadow 0.2s ease-out;

        &:first-child {
            margin-left: 0;
            margin-right: auto;
        }

        &:hover {
            color: #ffd38c;
        }

        &.router-link-active {
            text-shadow: 2px 1px #ffd38c;
        }
    }
}
</style>
