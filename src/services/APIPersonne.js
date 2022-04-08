class APIPersonne extends API {
    constructor() {
        super()
        this.newUrl = this.url + 'personne/'
    }

    async getPersonnes(id) {
        let res =  await fetch(`${this.newUrl}${id}`, { method:'GET'})
        return res
    }

    async createPersonne(params) {
        let res =  await fetch(`${this.newUrl}create/${params}`, { method:'POST'})
        return res
    }

    async deletePersonne(id) {
        let res =  await fetch(`${this.newUrl}delete/${id}`, { method:'DELETE'})
        return res
    }

    async updatePersonne(params) {
        let res =  await fetch(`${this.newUrl}update/${params}`, { method:'PUT'})
        return res
    }
}