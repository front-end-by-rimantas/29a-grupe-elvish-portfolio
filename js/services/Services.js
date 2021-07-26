class Services {
    constructor(sel, data) {
        this.sel = sel;
        this.data = data;

        this.DOM = null;
        this.init();
    }

    init() {
        if(!this.isValidSelector() ||
            !this.findDOM() ||
            !this.isValidData() ) {
            console.log('ERROR: something went wrong!');
            return false;
        }
        this.render();
    }

    isValidSelector() {
        if (typeof this.sel !== 'string' ||
            this.sel === '') {
            console.log("ERROR: selector is not valid!");
            return false;
        }
        return true;
    }

    isValidData() {
        if (typeof this.data !== 'object' ||
            this.data === null ||
            Array.isArray(this.data) ||
            this.data.list.length === 0 ) {
            console.log('ERROR: data is not valid!');
            return false;
        }
        return true;
    }

    findDOM() {
        this.DOM = document.getElementById(this.sel);
        return !!this.DOM;
    }

    render() {
        let HTML = '';
        for (let data of this.data.list) {
            HTML += `<div class="col-12 col-lg-4 item-center text-center border">
                        <img src=${this.data.path + data.img} alt="${data.title}" class="icon" />
                        <h3 class="h3">${data.title}</h3>
                        <p class="p">${data.lorem}</p>
                    </div>`;
        };
        this.DOM.insertAdjacentHTML('afterbegin', HTML);
    }
}

export { Services }