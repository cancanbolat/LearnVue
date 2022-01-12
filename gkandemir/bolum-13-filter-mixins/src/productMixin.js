export const productMixin = {
    data() {
        return {
            upperMessage: "UPPER MESSAGE",
            lowerMessage: "lower message",
            products: [
                "elma",
                "armut",
                "şeftali",
                "erik",
                "muz",
                "portakal",
                "çilek",
                "kiraz",
            ],
            searchText: "",
        };
    },
    filters: {
        toUpperCaseFilter(value) {
            return value.toUpperCase();
        },
    },
    computed: {
        filtered() {
            return this.products.filter((element) => {
                return element.match(this.searchText);
            });
        },
    },
}