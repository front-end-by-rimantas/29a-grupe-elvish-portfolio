class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.renderStrategyOptions = ['first', 'last', 'mostViews', 'leastViews', 'random'];
        this.renderStrategy = this.renderStrategyOptions[0];
        this.maxItems = 6;

        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.isValidData() ||
            !this.findTargetDOM()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.log('ERROR: selector is not valid!');
            return false;
        }
        return true;
    }

    isValidData() {
        const { maxItems: max, renderStrategy: strat, imgPath: path, list } = this.data;
        // this.data type
        if (typeof this.data !== 'object' ||
            this.data === null ||
            Array.isArray(this.data)) {
            console.log("ERROR: invalid data!");
            return false;
        }
        // imgPath type
        // const path = this.data.imgPath;
        if (typeof path !== 'string' ||
            path === '') {
            return false;
        }

        // list
        // const list = this.data.list;
        if (!Array.isArray(list) ||
            list.length === 0) {
            return false;
        }

        // maxItems update
        // const max = this.data.maxItems;
        if (typeof max === 'number' &&
            isFinite(max) &&
            max > 0 &&
            max % 1 === 0 ) {
            this.maxItems = max;
        }
        // renderStrategy update
        // const strat = this.data.renderStrategy;
        if (typeof strat === 'string' &&
            strat !== '' &&
            this.renderStrategyOptions.includes(strat)) {
            this.renderStrategy = strat;
        }

        return true;
    }

    findTargetDOM() {
        this.DOM = document.getElementById(this.selector);
        return !!this.DOM;
    }

    render() {
        console.log(this.data.list);
    }
}

export { Gallery };