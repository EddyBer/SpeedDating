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

    async getRencontres(id) {
        let res = await this.api.getRencontres(id)
        return res
    }

    async createRencontre(params) {
        let res = await this.api.createRencontre(params)
        return res
    }

    async deleteRencontre(id) {
        let res = await this.api.deleteRencontre(id)
        return res
    }

    async updateRencontre(params) {
        let res = await this.api.updateRencontre(params)
        return res
    }

    async getPersonnes(id) {
        let res = await this.api.getPersonnes(id)
        return res
    }

    async createPersonne(params) {
        let res = await this.api.createPersonne(params)
        return res
    }

    async deletePersonne(id) {
        let res = await this.api.deletePersonne(id)
        return res
    }

    async updatePersonne(params) {
        let res = await this.api.updatePersonne(params)
        return res
    }
}