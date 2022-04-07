class API {

    async login(params) {
        let res = await fetch(`http://localhost:5500/login/${params}`, { method:'POST'})
        return res
    }

    async register(params) {
        let res =  await fetch(`http://localhost:5500/register/${params}`, { method:'POST'})
        return res
    }

    async getRencontres(id) {
        let res =  await fetch(`http://localhost:5500/rencontres/${id}`, { method:'GET'})
        return res
    }

    async createRencontre(params) {
        let res =  await fetch(`http://localhost:5500/rencontres/create/${params}`, { method:'POST'})
        return res
    }

    async deleteRencontre(id) {
        let res =  await fetch(`http://localhost:5500/rencontres/delete/${id}`, { method:'DELETE'})
        return res
    }

    async getPersonnes(id) {
        let res =  await fetch(`http://localhost:5500/personne/${id}`, { method:'GET'})
        return res
    }

    async createPersonne(params) {
        let res =  await fetch(`http://localhost:5500/personne/create/${params}`, { method:'POST'})
        return res
    }

    async deletePersonne(id) {
        let res =  await fetch(`http://localhost:5500/personne/delete/${id}`, { method:'DELETE'})
        return res
    }
}
