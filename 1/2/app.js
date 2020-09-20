const vm = new Vue({
    el: '#app',
    data: {
        inputNumber: '',
    },
    computed: {
        result: function () {
            let parsedInteger = parseInt(this.inputNumber);

            if (isNaN(parsedInteger)) {
                return '';
            }

            return parsedInteger.toString(2);
        },
    }
});
