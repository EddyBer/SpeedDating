class creationController extends BaseController {
    constructor() {
        super()
        this.setBackButtonView('connect')
    }

    async register() {
        let username = $('#username')
        let name = $('#name')
        let firstName = $('#firstname')
        let date = $('#age')
        let gender = $('#gender')
        let mail = $('#mail')
        let password = $('#password')
        let confirmPassword = $('#confirmPassword')

        if (!username.value) {
            alert('Veuillez saisir un pseudo')
        } else if (!name.value) {
            alert('Veuillez renseigner voter nom')
        } else if (!firstName.value) {
            alert('Veuillez renseigner voter prénom')
        } else if (!gender.value) {
            alert('Veuillez renseigner voter genre')
        } else if (!password.value) {
            alert('Veuillez renseigner un mot de passe')
        } else if (password.value !== confirmPassword.value) {
            alert('Les deux mots de passe sont différents')
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
        }
        
        
    }

}

window.creationController = new creationController()