class BaseController {
    constructor() {
        //M.AutoInit();
        this.setBackButtonView('index')
        this.model = new Model()
    }

    setBackButtonView(view) {
        window.onpopstate = function() {
            navigate(view)
        }; history.pushState({}, '');
    }
}