class Progress {
    constructor(sel, data) {
        this.sel = sel;
        this.data = data;

        this.DOM = null;
        this.init();
    }

    init() {
        if (!this.isSelector() ||
            !this.isData() ||
            !this.findDOM() ) {
            console.log('ERROR: something went wrong!');
            return false;
        }
        this.render();
    }
    isSelector() {
        if (typeof this.sel !== 'string' ||
            this.sel === '') {
            console.log('ERROR: selector is not valid!');
            return false;
        }
        return true;
    }

    isData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            console.log('ERROR: data is not valid!');
            return false;
        }
        return true;
    }

    findDOM() {
        this.DOM = document.querySelector(this.sel);
        return !!this.DOM;
    }

    render() {
        let HTML = ``;
        for (let data of this.data) {
            HTML += `<div class="col-12 col-lg-6">
                        <h4>${data.title}<span>${data.progress}%</span></h1>
                        <div class="myProgress">
                            <div  style="width:${data.progress}% ;"class="myBar"></div>
                        </div>
                    </div>`;
        }
        this.DOM.insertAdjacentHTML('afterbegin', HTML);
    }
}

export { Progress }