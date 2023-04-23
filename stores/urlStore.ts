interface IUrlState {
    jsonOutput: object | string;
    inputText: string;
    errorMessage: string;
}

type TypeUrlData = object | string;

export const useUrlStore = defineStore("urlStore", {
    state: (): IUrlState => ({
        jsonOutput: {},
        inputText: "",
        errorMessage: "",
    }),

    getters: {
        // double: state => state.n * 2,
        href: state => new URL(state.inputText).href,
    },

    actions: {
        // getData(data: object): object {
        //     return Array.isArray(data) && data.length === 1 ? data[0] : data;
        // },

        async visualizeJson(): Promise<void> {
            try {
                const { data } = await useFetch<TypeUrlData>(this.href);

                this.jsonOutput = data.value as TypeUrlData;

                localStorage.setItem('inputUrl', this.inputText);
                localStorage.setItem('jsonUrlOutput', JSON.stringify(this.jsonOutput));

                this.errorMessage = "";
            } catch (e) {
                this.errorMessage = (e as Error).message;
            }
        },

        onMountedVisualize(): void {
            if (localStorage.getItem("inputUrl")) {
                this.inputText = localStorage.getItem("inputUrl") as string;
                this.jsonOutput = JSON.parse(localStorage.jsonUrlOutput);
            }
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUrlStore, import.meta.hot));
}
