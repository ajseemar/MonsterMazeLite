class ResourceManager {
    constructor() {
        this.resourceCache = {};
        this.loading = [];
        this.callbacks = [];
    }

    load(resource) {
        if (resource instanceof Object) {
            Object.keys(resource).forEach(key => this._load(key, resource[key]));
        } else this._load(resource);
    }

    _load(key, url) {
        if (this.resourceCache[key]) return this.resourceCache[key];
        else {
            this.loading.push(url);

            const img = new Image();
            img.onload = () => {
                this.resourceCache[key] = img;
                if (this.isReady()) this.callbacks.forEach(cb => cb());
            }
            img.src = url;
            this.resourceCache[key] = img;
        }
    }

    get(url) {
        return this.resourceCache[url];
    }

    isReady() {
        let ready = true;
        for (let k in this.resourceCache) {
            if (this.resourceCache.hasOwnProperty(k) && !(this.resourceCache[k]))
                ready = false;
        };
        return ready;
    }

    onReady(func) {
        this.callbacks.push(func);
    }
}

module.exports = ResourceManager;