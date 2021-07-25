class Education {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.init();
    }

    init() {
        if (!this.isValidSelector ||
            !this.findTargetDOM ||
            !this.isValidData ) {
            console.log('ERROR: something went wrong!');
            return false;
        }
        this.render();
    }

    isValidSelector() {
        if(typeof this.selector !== 'string' ||
            this.selector === '') {
                console.log('ERROR: selector is not a empty string!');
                return false;
            }
        return true;
    }

    findTargetDOM() {
        this.DOM = document.getElementById(selector);
        return !!this.DOM;
    }

    isValidData() {
        if (!Array.isArray(data) ||
         this.data.length === 0) {
            console.log('ERROR: data is not valid!');
            return false;
         }
        return true;
    }

    render() {
        let HTML = '';
        for (let i of data) {
            HTML += `<div class="col-12 col-lg-5 lg-5-start border-ed">
                        <h4 class="h4 small">${data.year}</h4>
                        <h4 class="h4">${data.position}</h4>
                        <p class="p">${data.lorem}</p>
                    </div>`;
        }

        this.DOM.insertAdjacentElement('afterbegin', HTML);
    }
};

export { Education };