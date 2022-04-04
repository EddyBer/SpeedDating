class API {

    login(params) {
        return fetch(`http://localhost:5500/login/${params}`, { method:'POST'})
    }
}