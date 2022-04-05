class Model {
    constructor() {
        this.api = new API()
    }

    login(params) {
        return this.api.login(params)
    }

    register(params) {
        return this.api.register(params)
    }
}