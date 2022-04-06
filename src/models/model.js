class Model {
    constructor() {
        this.api = new API()
    }

    async login(params) {
        let res = await this.api.login(params)
        return res
    }

    async register(params) {
        let res = await this.api.register(params)
        return res
    }

    async getRencontres() {
        let res = await this.api.getRencontres()
        return res
    }
}