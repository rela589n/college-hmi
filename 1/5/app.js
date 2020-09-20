const vm = new Vue({
    el: '#app',
    data: {
        numbers: [1, 2],
        modulo: 0,
    },
    computed: {
        maxElement: function () {
            return this.numbers.reduce((carry, current) => {
                return carry + (Math.abs(current) > Math.abs(this.modulo));
            }, 0)
        }
    }
});
