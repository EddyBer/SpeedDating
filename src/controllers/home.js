class homeController extends BaseController {
    constructor() {
        super()
        this.getRencontre()
        //this.setBackButtonView('connect')
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

    async deleteRencontre(id) {
        console.log(id)
        const deleted = await this.model.deleteRencontre(id)

    }

    async updateRencontre(id) {

    }

    async createRencontre() {
        let nom = $('#name-rencontre')
        let date = $('#date-rencontre')
        let commentaire = $('#message-rencontre')
        let note = $('#note-rencontre')
        let isValid = true

        if (!nom.value) {
            nom.className += " is-invalid"
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
                date : date.value,
                note : note.value,
                commentaire : commentaire.value
            })

            const newRencontres = await this.model.createRencontre(params)

            if (newRencontres.ok) {
                this.myModal.hide()
                navigate('home')
            } else {
                this.toast("error")
            }
        }
    }

    async getRencontre() {
        let content = ''
        const infosUser = this.parseJwt(localStorage.getItem('Token'))

        let listOfRencontres = await this.model.getRencontres(infosUser.userId)

        

        if (listOfRencontres.ok) {
            const liste = await listOfRencontres.json()
            let tbody = document.getElementById('rencontre')

            liste.listOfRencontres.forEach(elem => {
                content += `<tr>
                                <td>${elem.personne}</td>
                                <td>${elem.commentaire}</td>
                                <td>${elem.date}</td>
                                <td>${elem.note}</td>
                                <td><i class="bi bi-trash" onclick="homeController.deleteRencontre('${elem.id}')"></i></td>
                            </tr>`
            })

            tbody.innerHTML = content
        }
    }
}

window.homeController = new homeController()