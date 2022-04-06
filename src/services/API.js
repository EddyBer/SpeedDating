class API {

    async login(params) {
        let res = await fetch(`http://localhost:5500/login/${params}`, { method:'POST'})
        return res
    }

    async register(params) {
        let res =  await fetch(`http://localhost:5500/register/${params}`, { method:'POST'})
        return res
    }

    async getRencontres() {
        let res =  await fetch(`http://localhost:5500/rencontres`, { method:'GET'})
        return res
    }
}
