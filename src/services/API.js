class API {

    login(params) {
        return fetch(`http://localhost:5500/login/${params}`, { method:'POST'})
    }

    register(params) {
        return fetch(`http://localhost:5500/register/${params}`, { method:'POST'})
    }
}