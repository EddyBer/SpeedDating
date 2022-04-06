class connectController extends BaseController {
    constructor() {
        super()
    }

    async login() {
        let username = $('#username').value
        let password = $('#password').value

        const params =JSON.stringify({
            mail : username,
            password : password
        })

        if (!username) {
            alert('Veuillez saisir une adresse')
        } else if (!password) {
            alert('Veuillez saisir un mot de passe')
        } else {

            let logged = await this.model.login(params)

            if (logged.ok) {
                const token = await logged.json()
                localStorage.setItem('Token',token.token)
                navigate('home')
            } else {
                this.toast("error")
            }
        }
    }
}

window.connectController = new connectController()