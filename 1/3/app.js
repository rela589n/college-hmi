const vm = new Vue({
    el: '#app',
    data: {
        inputText: '',
        searchString: 'S',
    },
    computed: {
        result: function () {
            let firstIndex = this.inputText.indexOf(this.searchString);
            let lastIndex = this.inputText.lastIndexOf(this.searchString);

            if (firstIndex !== lastIndex) {
                return this.inputText.slice(0, firstIndex + 1) + '*'.repeat(lastIndex - firstIndex - 1) + this.inputText.slice(lastIndex);
            }

            return this.inputText;
        },
    }
});
