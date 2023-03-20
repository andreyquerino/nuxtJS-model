import { defineStore } from "pinia";

export const nameStore = defineStore('name', {
    state: () => ({
        name: 'You name'
    }),

    actions: {
        addName(el) {
            this.name = el
        }
    },

})