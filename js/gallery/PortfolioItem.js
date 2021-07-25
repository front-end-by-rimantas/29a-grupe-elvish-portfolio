class PortfolioItem {
    static isValid(data) {
        if (typeof data !== 'object' ||
            data === null ||
            Array.isArray(data) ) {
            return false;
        }
        
        if (typeof data.img !== 'string' ||
            data.img === '') {
            return false;
        }
        if (typeof data.title !== 'string' ||
        data.title === '') {
        return false;
        }
        if (typeof data.viewsCount !== 'number' ||
            !isFinite(data.viewsCount) ||
            data.viewsCount < 0 ||
            data.viewsCount % 1 !== 0) {
            return false;
        }
        if (!Array.isArray(data.tags) ||
            data.tags.length === 0 ) {
                return false;
        }
        const validTags = [];
        for (const tag in data.tags) {
            if (typeof tag === 'string' && tag !== '') {
                validTags.push(tag);
            }
        }
        if (validTags.length === 0) {
            return false;
        }
        
        return true;
    }
}

export { PortfolioItem };