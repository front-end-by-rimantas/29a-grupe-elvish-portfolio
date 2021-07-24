class Gallery {
    constructor(selector, data, itemClass) {
        this.selector = selector;
        this.data = data;
        this.itemClass = itemClass;

        this.DOM = null;
        // this.renderStrategyOptions = ['first', 'last', 'mostViews', 'leastViews', 'random'];
        this.renderStrategyOptions = {
            first: this.collectItemsFirst.bind(this),
            last: this.collectItemsLast.bind(this),
            mostViews: this.collectItemsMostViews.bind(this),
            leastViews: this.collectItemsLeastViews.bind(this),
            random: this.collectItemsRandom.bind(this),
        };
        this.renderStrategy =  
            Object.keys(this.renderStrategyOptions).includes('first') ?
            'first' :
            Object.keys(this.renderStrategyOptions)[0]
        ;
        this.maxItems = 6;
        this.collectedItems = [];
        this.filteredItems = [];

        // this.collectItemsFirst() = this.collectItemsFirst.bind(this);
        // this.itemClass = itemClass.bind(this);
        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.isValidData() ||
            !this.findTargetDOM() ||
            !this.collectValidItems() ) {
            return false;
        }

        this.collectItems();
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
            Object.keys(this.renderStrategyOptions).includes(strat)) {
            this.renderStrategy = strat;
        }

        return true;
    }

    findTargetDOM() {
        this.DOM = document.getElementById(this.selector);
        return !!this.DOM;
    }

    collectValidItems() {
        for (let item of this.data.list) {
            if (this.itemClass.isValid(item)) {
                this.collectedItems.push(item);
            }
        }       
        return !!this.collectedItems.length;
    }

    collectItems() {
        this.renderStrategyOptions[this.renderStrategy]();
    }

    collectItemsFirst() {
        if (this.collectedItems.length <= this.maxItems) {
            this.filteredItems = this.collectedItems;
        } else {
            this.filteredItems = this.collectedItems.slice(0, this.maxItems);
        }
    }

    collectItemsLast() {
        if (this.collectedItems.length <= this.maxItems) {
            this.filteredItems = this.collectedItems;
        } else {
            this.filteredItems = this.collectedItems.slice(-this.maxItems);
        } 
    }

    collectItemsMostViews() {
        this.collectedItems = this.collectedItems.sort((a, b) => 
            b.viewsCount - a.viewsCount
        );
        this.filteredItems = this.collectedItems.slice(0, this.maxItems);
    }

    collectItemsLeastViews() {
        this.collectedItems = this.collectedItems.sort((a, b) => 
        a.viewsCount - b.viewsCount
        );
        this.filteredItems = this.collectedItems.slice(0, this.maxItems);
    }
    
    collectItemsRandom() {
        while (this.filteredItems.length < this.maxItems &&
            this.filteredItems.length < this.collectedItems.length) {
            const rand = Math.floor(Math.random() * this.collectedItems.length);
            if (!this.filteredItems.includes(this.collectedItems[rand])) {
                this.filteredItems.push(this.collectedItems[rand]);
            }
        }
        console.log(this.filteredItems);
    }

    render() {
        const HTML = `${this.generateFilterHTML()}
                      ${this.generateContentHTML()}`;
        this.DOM.innerHTML += HTML;
    }

    generateContentHTML() {
        let contentHTML = '';
        let count = 0;
        for (let item in this.filteredItems) {
            contentHTML += `
                        <div class="item col-12 col-lg-4">
                            <p class="upper-p">${this.filteredItems[item].title}</p>
                            <p class="lower-p">${this.filteredItems[item].tags.join(', ')}</p>
                            <img src=${this.data.imgPath + this.filteredItems[item].img} />                    
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
            tagsHTML += `<div class="tag" onclick="funkcija()">${tag}</div>`;
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
        for (const tag of this.filteredItems) {
            tags = [...tags, ...tag.tags];
        }
        for (const tag of tags) {
            if (!uniqueTags.includes(tag.toLowerCase())) {
                uniqueTags.push(tag.toLowerCase());
                uniqueTagsCase.push(tag);
            }
        }
        return uniqueTagsCase;
    }
}

export { Gallery };