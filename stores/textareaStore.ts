interface ITextareaState {
    jsonOutput: object | string;
    inputText: string;
    errorMessage: string;
}

export const useTextareaStore = defineStore("textareaStore", {
    state: (): ITextareaState => ({
        jsonOutput: {},
        inputText: "",
        errorMessage: "",
    }),

    getters: {
        getParsedJson: state => {
            const inputText: string = state.inputText;
            const parse = (): string => JSON.parse(String(inputText));

            return parse();
        },
    },

    actions: {
        visualizeJson(): void {
            try {
                this.jsonOutput = this.getParsedJson;

                localStorage.setItem("inputText", this.inputText);
                
                this.errorMessage = "";
            } catch (e) {
                this.errorMessage = (e as Error).message;
            }
        },
        onMountedVisualize(): void {
            if (localStorage.getItem("inputText")) {
                this.inputText = localStorage.getItem("inputText") as string;
                this.jsonOutput = this.getParsedJson;
            }
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTextareaStore, import.meta.hot));
}
