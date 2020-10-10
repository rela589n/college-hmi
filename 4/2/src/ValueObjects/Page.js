export default class {
    constructor(pageName) {
        this.name = pageName;
    }

    is(pageName) {
        return this.name === pageName;
    }
}