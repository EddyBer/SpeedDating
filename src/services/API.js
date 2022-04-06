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
}
