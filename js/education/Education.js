class Education {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.findTargetDOM() ||
            !this.isValidData() ) {
            console.error('ERROR: something went wrong!');
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
        this.DOM = document.getElementById(this.selector);
        return !!this.DOM;
    }

    isValidData() {
        if (!Array.isArray(this.data) ||
         this.data.length === 0) {
            console.log('ERROR: data is not valid!');
            return false;
         }
        return true;
    }

    render() {
        let HTML = '';
        let count = 1;
        for (let data of this.data) {
            if (count % 2 !== 0) {
            HTML += `<div class="col-12 col-lg-5 border-ed">
                        <h4 class="h4 small">${data.year}</h4>
                        <h4 class="h4">${data.position}</h4>
                        <p class="p">${data.lorem}</p>
                    </div>`;
                count++;
            } else {
                HTML += `<div class="col-12 col-lg-5 lg-5-start border-ed">
                            <h4 class="h4 small">${data.year}</h4>
                            <h4 class="h4">${data.position}</h4>
                            <p class="p">${data.lorem}</p>
                        </div>`;
                    count++;
            }
        }
        this.DOM.insertAdjacentHTML('afterbegin', HTML);
    }
};

export { Education };