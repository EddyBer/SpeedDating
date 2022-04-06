class homeController extends BaseController {
    constructor() {
        super()
        this.getRencontre()
        //this.setBackButtonView('connect')
    }

    async getRencontre() {
        const listOfRencontres = await this.model.getRencontres()
        console.log(listOfRencontres)
    }

}

window.homeController = new homeController()