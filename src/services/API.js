class API {
    constructor() {
        this.url = 'http://localhost:5500/'
    }

    async login(params) {
        let res = await fetch(`${this.url}login/${params}`, { method:'POST'})
        return res
    }

    async register(params) {
        let res =  await fetch(`${this.url}register/${params}`, { method:'POST'})
        return res
    }

    async getRencontres(id) {
        let res =  await fetch(`${this.url}rencontre/${id}`, { method:'GET'})
        return res
    }

    async createRencontre(params) {
        let res =  await fetch(`${this.url}rencontre/create/${params}`, { method:'POST'})
        return res
    }

    async deleteRencontre(id) {
        let res =  await fetch(`${this.url}rencontre/delete/${id}`, { method:'DELETE'})
        return res
    }

    async updateRencontre(params) {
        let res =  await fetch(`${this.url}rencontre/update/${params}`, { method:'PUT'})
        return res
    }

    // async getPersonnes(id) {
    //     let res =  await fetch(`${this.url}personne/${id}`, { method:'GET'})
    //     return res
    // }

    // async createPersonne(params) {
    //     let res =  await fetch(`${this.url}personne/create/${params}`, { method:'POST'})
    //     return res
    // }

    // async deletePersonne(id) {
    //     let res =  await fetch(`${this.url}personne/delete/${id}`, { method:'DELETE'})
    //     return res
    // }

    // async updatePersonne(params) {
    //     let res =  await fetch(`${this.url}personne/update/${params}`, { method:'PUT'})
    //     return res
    // }
}
