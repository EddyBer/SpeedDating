class connectController extends BaseController {
    constructor() {
        super()
    }

    async login() {
        let username = $('#username')
        let password = $('#password')

        const params =JSON.stringify({
            mail : username.value,
            password : password.value
        })

        if (!username.value) {
            username.focus()
            username.className += " is-invalid"
            this.toast("error")
        } else if (!password.value) {
            password.focus()
            password.className += " is-invalid"
            this.toast("error")
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