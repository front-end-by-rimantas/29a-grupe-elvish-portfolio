class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.renderStrategyOptions = ['first', 'last', 'mostViews', 'leastViews', 'random'];
        this.renderStrategy = this.renderStrategyOptions[0];
        this.maxItems = 6;
        this.collectedItems = [];

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
        if (typeof path !== 'string' ||
            path === '') {
            return false;
        }
        // list type
        if (!Array.isArray(list) ||
            list.length === 0) {
            return false;
        }
        // maxItems update
        if (typeof max === 'number' &&
            isFinite(max) &&
            max > 0 &&
            max % 1 === 0 ) {
            this.maxItems = max;
        }
        // renderStrategy update
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
        const HTML = `${this.generateFilterHTML()}
                      ${this.generateContentHTML()}`;
        this.DOM.innerHTML += HTML;
    }

    generateContentHTML() {
        let contentHTML = '';
        let count = 0;
        for (let item in this.data.list) {
            if (!true) {
                continue;
            }
            contentHTML += `
                        <div class="item col-12 col-lg-4">
                            <p class="upper-p">${this.data.list[item].title}</p>
                            <p class="lower-p">${this.data.list[item].tags.join(', ')}</p>
                            <img src=${this.data.imgPath + this.data.list[item].img} />                    
                        </div>
                    `;
            count++;
            if (count == this.maxItems) {
                break;
            }
        }
        const HTML = `<div class="row content">
                        ${contentHTML}
                    </div>`; 
        return HTML;
    }

    generateFilterHTML() {
        const tags = this.collectTags();
        if (tags.length === 0) {
            return '';
        }
        let tagsHTML = `<div class="tag active">All</div>`;
        for (let tag of tags) {
            tagsHTML += `<div class="tag">${tag}</div>`;
        };

        const HTML = `<div class="row filter">
                        <div class="tags col-12">
                        ${tagsHTML}
                        </div>
                    </div>`
        return HTML;
    }

    collectTags() {
        let tags = [];
        let uniqueTags = [];
        let uniqueTagsCase = [];
        for (const tag of this.data.list) {
            tags = [...tags, ...tag.tags];
        }
        for (const tag of tags) {
            if (!uniqueTags.includes(tag.toLowerCase())) {
                uniqueTags.push(tag.toLowerCase());
                uniqueTagsCase.push(tag);
            }
        }
        console.log(uniqueTagsCase);

        return uniqueTagsCase;

    }
}

export { Gallery };