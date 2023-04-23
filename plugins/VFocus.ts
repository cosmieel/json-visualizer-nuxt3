export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive("focus", {
        mounted(el: HTMLElement): void {
            el.focus();
        },
    });
});
