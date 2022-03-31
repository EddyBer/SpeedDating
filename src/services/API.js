class API {
    login(username,password) {
        return fetchJSON(`http://127.0.0.1:5500/login`)
    }
}