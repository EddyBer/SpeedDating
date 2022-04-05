class creationController extends BaseController {
    constructor() {
        super()
        this.setBackButtonView('connect')
    }

    async register() {
        let isValid = true
        let username = $('#username')
        let name = $('#name')
        let firstName = $('#firstname')
        let date = $('#age')
        let gender = $('#gender')
        let mail = $('#mail')
        let password = $('#password')
        let confirmPassword = $('#confirmPassword')

        if (!username.value) {
            username.focus()
            username.className += " is-invalid"
            isValid = false
        } 
        if (!name.value) {
            name.focus()
            name.className += " is-invalid"
            isValid = false
        }
        if (!firstName.value) {
            firstName.focus()
            firstName.className += " is-invalid"
            isValid = false
        }
        if (!date.value) {
            date.focus()
            date.className += " is-invalid"
            isValid = false
        }
        if (!gender.value) {
            gender.focus()
            gender.className += " is-invalid"
            isValid = false
        }
        if (!password.value) {
            password.focus()
            password.className += " is-invalid"
            isValid = false
        }
        if (password.value !== confirmPassword.value) {
            confirmPassword.focus()
            confirmPassword.className += " is-invalid"
            isValid = false
        }
        
        if (!isValid) {
            this.toast("error")
        } else {

            const params = JSON.stringify({
            username : username.value,
            name : name.value,
            firstName : firstName.value,
            age : date.value,
            gender : gender.value,
            mail:mail.value,
            password : password.value,
            confirmPassword : confirmPassword.value
            })

            const newUser = await this.model.register(params)

            if (!newUser) {
                this.toast("success")
            }
            
        }
        
        
    }

}

window.creationController = new creationController()