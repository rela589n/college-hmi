const vm = new Vue({
    el: '#app',
    data: {
        matrixSize: 1
    },
    computed: {
        numbersMatrix: function () {
            if (+this.matrixSize > 100) {
                return;
            }

            let result = new Array(+this.matrixSize);
            for (let i = 0; i < result.length; ++i) {
                result[i] = [];
            }
            let rowIsEven = true;
            let counter = 1;

            for (let j = 1; j <= this.matrixSize; ++j) {
                if (rowIsEven) {
                    for (let i = 0; i < this.matrixSize; ++i, ++counter) {
                        result[i].push(counter);
                    }
                } else {
                    for (let i = this.matrixSize - 1; i >= 0; --i, ++counter) {
                        result[i].push(counter);
                    }
                }

                rowIsEven = !rowIsEven;
            }

            return result;
        }
    }
});
