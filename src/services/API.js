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
}
