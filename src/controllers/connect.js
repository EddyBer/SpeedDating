class connectController extends BaseController {
    constructor() {
        super()
        this.refreshConnection()
    }

    refreshConnection() {
        if (localStorage.getItem('Token')) {
            localStorage.removeItem('Token')
        }
    }

    async login() {
        
        let username = $('#username')
        let password = $('#password')

        const params =JSON.stringify({
            mail : username.value,
            password : password.value
        })

        if (this.checkInput(username) && this.checkInput(password) && this.validateEmail(username.value)) {

            let logged = await this.model.login(params)

            if (logged.ok) {
                const token = await logged.json()
                localStorage.setItem('Token',token.token)
                navigate('home')
            } else {
                this.toast("error")
            }
        } else {
            this.toast("error")
        }
    }
}

window.connectController = new connectController()