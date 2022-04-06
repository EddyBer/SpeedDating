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
            const logged = await this.model.login(params)

            if (logged.status === 204) {
                navigate('home')
            }
        }
    }
}

window.connectController = new connectController()