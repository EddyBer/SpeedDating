class homeController extends BaseController {
    constructor() {
        super()
        this.getRencontre()
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

    formatDateISO(date) {
        let tabDate = date.split('/')

        let newDate = tabDate[2] + '-' + tabDate[1] + '-' + tabDate[0]

        return newDate
    }

    openModalUpdate(id,nom,message,date,note) {
        this.myModal2 = new bootstrap.Modal(document.getElementById('updateModal'), 'keyboard=true')
        let inputNom =  document.getElementById('name-update')
        let inputDate =  document.getElementById('date-update')
        let inputMessage =  document.getElementById('message-update')
        let inputNote =  document.getElementById('note-update')
        let hiddenId =  document.getElementById('hiddenId')

        hiddenId.innerHTML = id
        inputNom.value = nom
        inputMessage.value = message
        inputDate.value = this.formatDateISO(date)
        inputNote.value = note

        this.myModal2.show()
    }

    async deleteRencontre(id) {

        if (confirm("Voulez-vous vraiment supprimer cette rencontre ?")) {
            const deleted = await this.model.deleteRencontre(id)

            if (deleted.ok) {
                navigate('home')
            }
        }
    }

    async updateRencontre() {
        const infosUser = this.parseJwt(localStorage.getItem('Token'))
        const id = document.getElementById('hiddenId')

        let nom =  document.getElementById('name-update')
        let date =  document.getElementById('date-update')
        let message =  document.getElementById('message-update')
        let note =  document.getElementById('note-update')
        let isValid = true

        if (!nom.value) {
            nom.className += " is-invalid"
            isValid = false
        } else {
            const listOfPersonnes = await this.model.getPersonnes(infosUser.userId)

            if (listOfPersonnes.ok) {
                const liste = await listOfPersonnes.json()
                const tab = []
                liste.listOfPersonnes.forEach(elem => {
                        tab.push(elem.lastName)
                })

                if (!tab.find(elem => elem.toUpperCase() === nom.value.toUpperCase())) {
                    nom.className += " is-invalid"
                    isValid = false
                }
            }
        }
        if (!date.value) {
            date.className += " is-invalid"
            isValid = false
        }
        if (message.value.length > 255) {
            message.className += " is-invalid"
            isValid = false
        }
        
        if (isValid) {
            const params = JSON.stringify({
                id : id.innerHTML,
                user : infosUser.userId,
                nom : nom.value,
                date : date.value,
                message : message.value,
                note : note.value
            })

            const updatedRencontre = await this.model.updateRencontre(params)

            if (updatedRencontre.ok) {
                this.myModal2.hide()
                navigate('home')
                this.toast('success')
            } else {
                this.toast("error")
            }
        }
    }

    async createRencontre() {
        let nom = $('#name-rencontre')
        let date = $('#date-rencontre')
        let commentaire = $('#message-rencontre')
        let note = $('#note-rencontre')
        let isValid = true

        const infosUser = this.parseJwt(localStorage.getItem('Token'))

        if (!nom.value) {
            nom.className += " is-invalid"
            isValid = false
        } else {
            const listOfPersonnes = await this.model.getPersonnes(infosUser.userId)

            if (listOfPersonnes.ok) {
                const liste = await listOfPersonnes.json()
                const tab = []
                liste.listOfPersonnes.forEach(elem => {
                        tab.push(elem.lastName)
                })

                if (!tab.find(elem => elem.toUpperCase() === nom.value.toUpperCase())) {
                    nom.className += " is-invalid"
                    isValid = false
                }
            }
        }
        
        if (!date.value) {
            date.className += " is-invalid"
            isValid = false
        }
        if (commentaire.value.length > 255) {
            commentaire.className += " is-invalid"
            isValid = false
        }

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
                this.toast('success')
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
                let date = new Date (elem.date).toLocaleDateString()
                content += `<tr style="word-break:break-word">
                                <td>${elem.personne}</td>
                                <td class="overflow-auto">${elem.commentaire}</td>
                                <td>${date}</td>
                                <td>${elem.note}/10</td>
                                <td><i class="bi bi-trash" onclick="homeController.deleteRencontre('${elem.id}')"></i></td>
                                <td><i class="bi bi-pencil" onclick="homeController.openModalUpdate('${elem.id}','${elem.personne}','${elem.commentaire}','${date}','${elem.note}')"></i></td>
                            </tr>`
            })

            tbody.innerHTML = content
        }
    }
}

window.homeController = new homeController()