const vm = new Vue({
    el: '#app',
    data: {
        inputText: '',
        startIndex: 3,
        substrLength: 8,
    },
    computed: {
        result: function () {
            return this.inputText.substr(this.startIndex, this.substrLength);
        },
    }
});
