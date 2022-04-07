class personnesController extends BaseController {
    constructor() {
        super()
        this.getPersonnes()
    }

    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    openModal() {
        this.myModal = new bootstrap.Modal(document.getElementById('createModal'), 'keyboard=true')
        this.myModal.show()
    }

    async createPersonne() {
        let nom = $('#name-personne')
        let prenom = $('#firstname-personne')
        let date = $('#date-personne')
        let sexe = $('#gender')
        let isValid = true

        if (!nom.value) {
            nom.className += " is-invalid"
            isValid = false
        }
        if (!prenom.value) {
            prenom.className += " is-invalid"
            isValid = false
        }
        if (!date.value) {
            date.className += " is-invalid"
            isValid = false
        }

        const infosUser = this.parseJwt(localStorage.getItem('Token'))

        if (isValid) {
            const params = JSON.stringify({
                user : infosUser.userId,
                nom : nom.value,
                prenom : prenom.value,
                date : date.value,
                gender : sexe.value
            })

            const newPersonne = await this.model.createPersonne(params)

            if (newPersonne.ok) {
                this.myModal.hide()
                navigate('personnes')
                this.toast('success')
            } else {
                this.toast("error")
            }
        }
    }

    async getPersonnes() {
        let content = ''
        const infosUser = this.parseJwt(localStorage.getItem('Token'))

        let listOfPersonnes = await this.model.getPersonnes(infosUser.userId)

        if (listOfPersonnes.ok) {
            const liste = await listOfPersonnes.json()
            let tbody = document.getElementById('personne')

            liste.listOfPersonnes.forEach(elem => {
                let date = new Date (elem.birthdate).toLocaleDateString()
                let gender = ""
                switch (elem.gender) {
                    case 1 : gender = "Femme"; break;
                    case 2 : gender = "Homme"; break;
                    case 3 : gender = "Autre"; break;
                }

                content += `<tr style="word-break:break-word">
                                <td>${elem.lastName}</td>
                                <td>${elem.firstName}</td>
                                <td>${date}</td>
                                <td>${gender}</td>
                                <td><i class="bi bi-trash" onclick="personnesController.deletePersonne('${elem.id}')"></i></td>
                                <td><i class="bi bi-pencil" onclick="personnesController.updatePersonne('${elem.id}')"></i></td>
                            </tr>`
            })

            tbody.innerHTML = content
        }
    }

}

window.personnesController = new personnesController()