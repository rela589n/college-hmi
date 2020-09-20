const vm = new Vue({
    el: '#app',
    data: {
        inputNumber: '',
    },
    computed: {
        result: function () {
            return Array.prototype.reduce.apply(
                this.inputNumber,
                [
                    function (character, previous) {
                        return +previous + +character;
                    },
                    0
                ]
            );
        },
    }
});
