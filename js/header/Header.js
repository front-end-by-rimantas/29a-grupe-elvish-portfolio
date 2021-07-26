class Header {
    constructor(params) {
        this.selector = params.selector;
        this.structure = params.structure;

        this.DOM = null;
    }

    init() {
        if(!this.isValidSelector()) {
            return false
        }
        this.render()
    }

    isValidSelector() {
        if (typeof this.selector !=='string'){
            console.error("ERROR: selector has to be a string typ!!!")
            return false;
        }
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error("AAAAAAAAAAAAAAAAAAAAA NERADAU");
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    isValidHeaderItem(item) {
        if (typeof item !== 'object' ||
            typeof item.href !== 'string' ||
            typeof item.title !== 'string' ||
            item.href === '' ||
            item.title === '') {
            return false;
        }
        return true;
    }

    render() {
        let HTML = '';
        for(const item of this.structure) {
            // einam per duomenu sarasa, ir atvaizduojam visus masyvo objektus;
            if ( !this.isValidHeaderItem(item)) {
                return '';
            }
            HTML += `<a href="${item.href}" class=${item.class}> ${item.title} </a>
            `;

        }
        this.DOM.innerHTML = HTML
    }
}

export {Header}